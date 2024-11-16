import Link from "next/link";
import styles from "@/styles/customStyles.module.css"
import { SvgIcon } from "@mui/material";

const DashboardItem = ({ action, link, description, icon }) => {
    return (
        <Link href={link} className="max-w-xs my-4">
            <div className="flex flex-col overflow-hidden rounded-2xl shadow-2xl">
                <div className={styles.stripes}>
                    <div className="w-full h-full backdrop-blur-sm items-center justify-center flex">
                        <SvgIcon className="text-plum" style={{ fontSize: 48 }} aria-label="admin icons">
                            {icon}
                        </SvgIcon>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-left font-headings">
                        {action}
                    </h3>

                    <p className="font-dText">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default DashboardItem;