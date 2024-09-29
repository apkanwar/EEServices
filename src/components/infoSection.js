import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { SvgIcon } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const InfoSection = ({ info, imgSrc, infoSide }) => {
    return (
        <div className={`flex flex-col max-w-7xl mx-auto items-center md:items-start ${infoSide === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} py-24`}>
            {/* Text Section */}
            <div className="flex flex-col gap-36 w-full md:w-1/2 px-6 m-auto">
                {info.map((content, index) => (
                    <div key={index}>
                        <h4 className="font-semibold text-plum uppercase font-headings">{content.subtitle}</h4>
                        <h2 className="text-3xl font-bold text-custom-black font-headings mb-4">{content.title}</h2>
                        {content.description.map((desc, keyD) => (
                            <p key={keyD} className="text-gray-600 font-dText text-lg pb-8">{desc}</p>
                        ))}
                        {content.listItems && (
                            <ul className="space-y-4">
                                {content.listItems.map((item, indexL) => (
                                    <li key={indexL} className="flex px-4 gap-4 items-center">
                                        <SvgIcon className="text-plum">
                                            <CheckCircleIcon />
                                        </SvgIcon>
                                        <span className="text-gray-600 font-dText text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 px-6">
                <div className='flex flex-col gap-8'>
                    {imgSrc.map((image, index) => (
                        <Image key={index} width={600} height={600} src={image} priority={true} alt={"Info Image"} className="rounded-lg shadow-lg w-full object-cover" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
