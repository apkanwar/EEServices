import Link from "next/link";
import styles from "@/styles/customStyles.module.css"

const DashboardItem = ({ action, link, description }) => {
    return (
        <Link href={link} className="max-w-xs my-4">
            <div className="flex flex-col overflow-hidden rounded-2xl shadow-2xl">
                <div className={styles.stripes}>
                    <div className="w-full h-full backdrop-blur-sm">

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