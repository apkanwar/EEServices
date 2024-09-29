import React from "react";
import styles from "@/styles/wipeButton.module.css";
import Link from "next/link";

const WipeButton = ({ text, color, link }) => {
    return (
        <Link href={link} className={`relative py-5 px-10 font-dText text-white bg-${color} font-semibold text-lg border-inherit border-${color} border-4 ${styles.wipeButton}`} >
            <span>{text}</span>
        </Link>
    );
};

export default WipeButton;
