import { Disclosure } from '@headlessui/react';

const questions = [
    {
        id: 1,
        question: 'I’m looking for work, what do I need to do to apply?',
        answer: 'We require everyone to apply through our website. Applications take a few days to process. If we have any positions that match your experience and credentials, we will reach out directly to schedule an interview.',
    },
    {
        id: 2,
        question: 'Do you contact everyone who applies? Can I get feedback on my resume?',
        answer: 'Due to the high volume of applications we receive, it is not possible for us to contact everybody who applies or give individual feedback on resumes.',
    },
    {
        id: 3,
        question: 'What types of jobs do you staff?',
        answer: 'We specialize in placing candidates in Human Resources, Office Support, Executive/Administrative Assistant, Marketing, Graphics, Digital Media, and Finance roles at all levels. We serve a variety of industries, including Finance, Entertainment, Digital Media, Technology, Startups, Law, and Non-Profit companies. We sometimes staff jobs that don’t fit into those categories, therefore we are happy to review all resumes.',
    },
    {
        id: 4,
        question: 'Do I have to pay to register with Ensured Employment?',
        answer: 'No. There is absolutely no charge for job seekers at any point during the process.',
    },
    {
        id: 5,
        question: 'What format should my resume be in?',
        answer: 'We strongly prefer a Microsoft Word or PDF file. Please do not submit Google Doc, Dropbox links, or screenshots.',
    },
    {
        id: 6,
        question: 'If I used to work with Ensured, do I need to re-apply?',
        answer: 'There is no need to reapply. Please reach out to the recruiter with whom you worked previously.',
    },
    {
        id: 7,
        question: 'If I was referred by someone to Ensured, should I mention their name when reaching out?',
        answer: 'Yes. Please provide their full name and, if possible, the name of the recruiter they previously worked with.',
    },
];

export default function FAQContent() {
    return (
        <div className='bg-white'>
            <div className="mx-auto max-w-5xl px-6 py-32 lg:px-8 bg-transparent text-gray-900">
                <div className="space-y-4">
                    {questions.map((q) => (
                        <Disclosure key={q.id}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between my-auto w-full py-3 text-lg font-headings font-semibold bg-transparent transition-all">
                                        <span>{q.question}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 ${open ? 'transform rotate-180' : ''}`}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-lg font-dText bg-transparent">
                                        <p className="whitespace-pre-line">{q.answer}</p>
                                    </Disclosure.Panel>
                                    <hr className="border-gray-900 dark:border-white" />
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    );
};