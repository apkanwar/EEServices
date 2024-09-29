import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { SvgIcon } from '@mui/material';

export default function IndustrySelector() {
    const data = [
        {
            imageLink: "/industries/techSupport.jpg",
            buttonText: "Tech Support"
        },
        {
            imageLink: "/industries/admin.jpg",
            buttonText: "Office and Admin"
        },
        {
            imageLink: "/industries/logistics.jpg",
            buttonText: "Logistics Management"
        },
        {
            imageLink: "/industries/nurse.jpg",
            buttonText: "Legal or Medical"
        },
        {
            imageLink: "/industries/bookkeeping.jpg",
            buttonText: "Bookkeeping"
        },
        {
            imageLink: "/industries/hr.jpg",
            buttonText: "HR Management"
        }
    ]
    const [activeIndex, setActiveIndex] = useState(1);
    const intervalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);


    const startImageCycle = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setActiveIndex(prevIndex => (prevIndex + 1) % data.length);
                setIsVisible(true);
            }, 700);
        }, 3000);
    };

    useEffect(() => {
        if (data.length > 0) {
            startImageCycle();
        }
        return () => clearInterval(intervalRef.current);
    }, [data]);

    const handleButtonClick = (index) => {
        setIsVisible(false);
        setTimeout(() => {
            setActiveIndex(index);
            setIsVisible(true);
            startImageCycle();
        }, 700);
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center pt-20">
            <div className="max-w-7xl py-20">
                <h1 className="font-jSans text-3xl font-bold uppercase">We specialize in recruiting talent across all industries</h1>
            </div>
            <div className="grid grid-cols-3 gap-16 max-w-6xl mx-auto">
                <div className="flex flex-col gap-4 justify-center">
                    {data.slice().map((ImageDetails, index) => (
                        <button key={index} onClick={() => handleButtonClick(index)}
                            className={`py-2 flex font-jSans text-lg items-center gap-3 px-8 text-start rounded-full border-2 no-underline ${activeIndex === (index) ? 'bg-plum text-white border-plum' : 'bg-transparent text-custom-black border-black'}`}>
                            <SvgIcon>
                                <CheckCircleIcon />
                            </SvgIcon>
                            <span>{ImageDetails.buttonText}</span>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-subgrid col-span-2">
                    {data.length > 0 && (
                        <div key={activeIndex} className={`mx-auto ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'} transition-all`}>
                            <Image
                                key={data[activeIndex].id}
                                src={data[activeIndex].imageLink}
                                height={0}
                                width={550}
                                alt={`Industry Image #${data[activeIndex].id}`}
                                priority={true}
                                className='rounded-xl h-auto w-auto'
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
