import Navbar from "./navbars/navbar";
import TopBar from "./navbars/topbar";
import WipeButton from "./wipeButton";

export default function Banner() {
    const images = [
        {
            "id": 1,
            "url": "/stock/lunchTime.jpg",
            "delay": "0s"
        },
        {
            "id": 2,
            "url": "/stock/storeClerk.jpg",
            "delay": "5s"
        },
        {
            "id": 3,
            "url": "/stock/team.jpg",
            "delay": "10s"
        }
    ];

    return (
        <div className="relative h-screen bg-no-repeat bg-cover bg-fixed">
            {images.map(({ id, url, delay }) => (
                <div key={id}
                    className="absolute inset-0 bg-no-repeat bg-cover bg-fixed animate-fade-cycle"
                    style={{ backgroundImage: `url(${url})`, animationDelay: delay }}
                ></div>
            ))}

            <div className="relative z-10 h-screen from-[#5CD7C2A6] to-[#815FD6A6] bg-gradient-45">
                <TopBar />
                <Navbar color="plum" />
                <div className="py-4 px-2 mt-5 rounded-xl bg-transparent mx-4 xl:mx-auto text-center max-w-5xl backdrop-blur-sm">
                    <p className="leading-normal font-semibold text-3xl lg:text-4xl 2xl:text-5xl font-headings text-white">Working to place talented and hard working people in the Canadian Workforce</p>
                </div>
                <div className="pb-40 pt-2 w-full flex flex-col lg:flex-row justify-center items-center absolute bottom-0 gap-6">
                    <WipeButton text="I'm a Job Seeker" color="plum" link="/job-seekers" />
                    <WipeButton text="I'm Looking to Hire" color="transparent" link="/employers" />
                </div>
            </div>
        </div>
    )
}
