import Navbar from "./navbars/navbar";
import TopBar from "./navbars/topbar";
import WipeButton from "./wipeButton";

const HeadingBanner = ({ title, buttonInfo }) => {
    return (
        <div className="relative bg-plum shadow-xl" style={{ background: `url("PlumBG.png")` }}>
            <TopBar />
            <Navbar color="transparent" />
            <div className="flex flex-row justify-between bg-transparent mx-[180px] px-4 backdrop-blur-sm pt-20 pb-10">
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