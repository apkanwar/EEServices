import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import saveToFireBase from "@/pages/api/saveToFirebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "@/lib/firebaseConfig";
import Inputs_Select from './inputs/select';
import styles from '@/styles/customStyles.module.css';

export default function ArticleEditor() {
    const [blocks, setBlocks] = useState([]);
    const [title, setTitle] = useState('');
    const [articleType, setArticleType] = useState({ name: 'Employers Resources', value: 'Employee Resources' });
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileText, setSelectedFileText] = useState("Click to upload or drag and drop");
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false); // New loading state

    const handleFile = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setSelectedFileText(file.name);
    };

    const uploadFileToStorage = async (file) => {
        const storageRef = ref(storage, `articles/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        return getDownloadURL(snapshot.ref);
    };

    const addBlock = (type) => setBlocks(prevBlocks => [...prevBlocks, { id: Date.now().toString(), type, content: '' }]);

    const deleteBlock = (id) => setBlocks(blocks.filter(block => block.id !== id));

    const updateBlockContent = (id, content) => {
        setBlocks(blocks.map(block => (block.id === id ? { ...block, content } : block)));
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedBlocks = Array.from(blocks);
        const [movedBlock] = reorderedBlocks.splice(result.source.index, 1);
        reorderedBlocks.splice(result.destination.index, 0, movedBlock);
        setBlocks(reorderedBlocks);
    };

    const resetForm = () => {
        setTitle('');
        setSelectedFile(null);
        setSelectedFileText("Click to upload or drag and drop");
        setArticleType({ name: 'Employee Resources', value: 'Employee Resources' });
        setBlocks([]);
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const resumeURL = selectedFile ? await uploadFileToStorage(selectedFile) : '';
            const htmlContent = blocks.map(({ type, content }) => {
                if (type === 'heading') return `<h4>${content}</h4>`;
                if (type === 'paragraph') return `<p>${content}</p>`;
                if (type === 'list') return `<ul style="list-style: disc; margin-left: 24px">${content.split(", ").map(item => `<li>${item.trim()}</li>`).join('')}</ul>`;
                return '';
            }).join('');

            if (title === '' || resumeURL === '' || htmlContent === '') {
                setStatus({ type: "error", message: "Some fields are empty. Please check again." });
            } else {
                const articleData = {
                    title,
                    image: resumeURL,
                    type: articleType.value,
                    content: htmlContent,
                };
                await saveToFireBase(articleData, 'articles');
                setStatus({ type: "success", message: "Article uploaded successfully!" });
                resetForm();
            }
        } catch (error) {
            setStatus({ type: "error", message: "Failed to upload article. Please try again." });
        } finally {
            setLoading(false); // Set loading back to false after the process completes
        }
    };

    return (
        <div className="mb-48 p-6 max-w-7xl mx-auto">
            {/* Article Metadata Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div>
                    <label htmlFor="title" className={styles.labels}>Article Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                </div>
                <Inputs_Select
                    id="type"
                    label="Article Type"
                    selected={articleType}
                    onChange={setArticleType}
                    content={[
                        { name: 'Employers Resources', value: 'Employers Resources' },
                        { name: 'Candidate Resources', value: 'Candidate Resources' }
                    ]}
                />
                <div className="md:col-span-2">
                    <label htmlFor="resumeDropzone" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center py-2">
                            <svg className="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">{selectedFileText}</p>
                            <p className="text-xs text-gray-500 font-semibold">PNG</p>
                        </div>
                        <input id="resumeDropzone" required type="file" className="hidden" accept="application/png" onChange={handleFile} />
                    </label>
                </div>
            </div>

            {/* Add Block Buttons */}
            <div className="flex space-x-4 my-8 items-center gap-4 flex-wrap">
                <h1 className="font-headings font-semibold text-xl">Add Fields:</h1>
                {['heading', 'paragraph', 'list'].map(type => (
                    <button key={type} onClick={() => addBlock(type)} className="hover-button capitalize">{type}</button>
                ))}
            </div>

            {/* Draggable Content Blocks */}
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="contentBlocks">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                            {blocks.map((block, index) => (
                                <Draggable key={block.id} draggableId={block.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="bg-gray-100 p-4 rounded shadow flex items-center"
                                        >
                                            <div className="flex-grow">
                                                {block.type === 'heading' && (
                                                    <input
                                                        type="text"
                                                        placeholder="Heading"
                                                        value={block.content}
                                                        onChange={(e) => updateBlockContent(block.id, e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded"
                                                    />
                                                )}
                                                {['paragraph', 'list'].includes(block.type) && (
                                                    <textarea
                                                        placeholder={block.type === 'paragraph' ? 'Paragraph' : 'List (Separate items by commas)'}
                                                        value={block.content}
                                                        onChange={(e) => updateBlockContent(block.id, e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded"
                                                    />
                                                )}
                                            </div>
                                            <button onClick={() => deleteBlock(block.id)} className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            {/* Loading Indicator */}
            {loading &&
                <div className={`flex gap-4 p-4 items-center border rounded-lg bg-gray-800 text-white border-white`}>
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                    Processing
                </div>
            }

            {status && (
                <div className={`p-4 mt-8 border rounded-lg ${status.type === "success" ? "bg-green-100 text-green-700 border-green-700" : "bg-red-100 text-red-700 border-red-700"}`}>
                    {status.message}
                </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
                <button onClick={handleSubmit} className="hover-button !bg-green-500 hover:!bg-green-800" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Article'}
                </button>
            </div>
        </div>
    );
}
