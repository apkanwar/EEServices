
const AboutDetails = () => {
    return (
        <div className="flex flex-col py-16 px-8 gap-16 mx-auto max-w-5xl">
            <div className="flex flex-row gap-8 max-w-5xl">
                <div className="w-1/3 flex">
                    <h2 className="text-5xl font-bold font-cursive">Our <span className="text-plum">Vision</span></h2>
                </div>
                <div className="w-2/3 flex">
                    <p className="text-lg font-medium font-dText">
                        To create an environment where everyone gets the opportunity they deserve.
                    </p>
                </div>
            </div>
            <div className="flex flex-row mx-auto items-center">
                <hr className="w-3 h-0.5 bg-gray-700 border-0 rounded" />
            </div>
            <div className="flex flex-row gap-8 max-w-5xl">
                <div className="w-1/3 flex">
                    <h2 className="text-5xl font-bold font-cursive">Our <span className="text-plum">Goal</span></h2>
                </div>
                <div className="w-2/3 flex">
                    <p className="text-lg font-medium font-dText">
                        Our goal is always to help ensure that workers are taken care of.
                    </p>
                </div>
            </div>
            <div className="flex flex-row mx-auto items-center">
                <hr className="w-3 h-0.5 bg-gray-700 border-0 rounded" />
            </div>
            <div className="flex flex-row gap-8 max-w-5xl">
                <div className="w-1/3 flex">
                    <h2 className="text-5xl font-bold font-cursive">Our <span className="text-plum">Values</span></h2>
                </div>
                <div className="w-2/3 flex">
                    <p className="text-lg font-medium font-dText">
                        We strive to innovate the user experience and change what it means to work with an employment service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;
