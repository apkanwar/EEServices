// components/WipeButton.js
import SvgIcon from "@mui/material/SvgIcon";

const GridContainer = ({ heading, details, icon }) => {
    return (
        <div className="flex flex-row gap-4">
            <div className="h-fit rounded-md p-2">
                <SvgIcon style={{ fontSize: 64 }} className="text-plum">{icon}</SvgIcon>
            </div>

            <div className="flex flex-col gap-2 py-4">
                <h2 className="font-dText text-2xl font-bold h-16">{heading}</h2>
                <p className="font-dText">{details}</p>
            </div>
        </div>
    );
};

export default GridContainer;
