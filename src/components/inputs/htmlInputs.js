

const InputField = ({ name, type, placeholder, required }) => {
    return (
        <div className="flex flex-col gap-1 items-start">
            <div className="relative rounded-md shadow-sm w-full">
                <input
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required
                    title={required}
                    className="block w-full outline-none border-0 p-3 bg-gray-200 text-custom-black ring-1 ring-inset ring-transparent placeholder:text-gray-600 placeholder:italic focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
};

export default InputField;
