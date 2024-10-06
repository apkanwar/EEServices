import Navbar from "./navbars/navbar";
import TopBar from "./navbars/topbar";
import WipeButton from "./wipeButton";

const HeadingBanner = ({ title, buttonInfo }) => {
    return (
        <div className="relative bg-plum shadow-xl !bg-cover" style={{ background: `url("PlumBG.png")` }}>
            <TopBar />
            <Navbar color="transparent" />
            <div className="flex flex-col gap-4 md:flex-row justify-between bg-transparent mx-8 xl:mx-[180px] px-4 backdrop-blur-sm py-8 lg:pt-20 lg:pb-10">
                <p className="leading-normal font-semibold text-5xl font-headings text-white">
                    {title}
                </p>
                {buttonInfo && (
                    <WipeButton text={buttonInfo.text} type="transparent" link={buttonInfo.link} />
                )}
            </div>
        </div>
    )
}

export default HeadingBanner;