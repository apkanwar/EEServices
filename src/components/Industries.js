const data = [
    "Legal",
    "Accounting",
    "Financial",
    "Wealth Management",
    "General Office Labour",
    "Assistant",
    "IT and Technology",
    "Call Center",
    "Managerial",
    "Warehouse Labour",
    "Forklift",
    "Machine Operator"
];

export default function Industries() {
    return (
        <div className="bg-white flex flex-col items-center justify-center pt-20">
            <div className="max-w-7xl py-20 text-center">
                <h1 className="font-jSans text-3xl font-bold uppercase">We specialize in recruiting talent across all industries</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
                {data.map((industryName, index) => (
                    <div key={index}
                        className='px-8 py-2 flex font-jSans text-xl items-center justify-center rounded-full border-4 bg-transparent border-plum shadow-lg select-none hover:bg-plum hover:text-white transition-all'>
                        <span>{industryName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
