

const CheckboxInput = ({ inputs, title, size }) => {
    return (
        <div className="flex flex-col gap-1 items-start">
            <h3 className="font-medium text-lg font-headings my-4">
                {title}
            </h3>

            <div className={`grid grid-cols-${size} w-full gap-4`}>
                {inputs.map((input, index) => (
                    <div className="flex items-center" key={index}>
                        <input id={input.id} type="checkbox" value={input.title} className="hidden peer" />
                        <label htmlFor={input.id} className="w-full p-3 text-sm font-medium peer-checked:bg-gray-200 peer-checked:border-indigo-600 border-2 border-gray-200">{input.title}</label>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CheckboxInput;
