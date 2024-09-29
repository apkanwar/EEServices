import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/Twitter';
import { Email, Phone } from '@mui/icons-material';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white font-headings dark:bg-midnight-black">
            <div className="mx-auto flex flex-col lg:flex-row max-w-7xl items-center justify-between p-16 lg:px-8 gap-8">
                <div className="grid grid-cols-4 lg:grid-cols-2">
                    <Link href={"https://facebook.com/ensuredemployment"} className="p-2 hover:bg-artic-blue transition-all rounded-md mx-2 cursor-pointer">
                        <FacebookIcon style={{ fontSize: 48 }} color='primary' />
                    </Link>
                    <Link href={"https://www.instagram.com/ensuredemployment/"} className="p-2 hover:bg-artic-blue transition-all rounded-md mx-2 cursor-pointer">
                        <InstagramIcon style={{ fontSize: 48 }} sx={{ color: "#E4405F" }} />
                    </Link>
                    <div className="p-2 hover:bg-artic-blue transition-all rounded-md mx-2 cursor-pointer">
                        <XIcon style={{ fontSize: 48 }} color='primary' />
                    </div>
                    <div className="p-2 hover:bg-artic-blue transition-all rounded-md mx-2 cursor-pointer">
                        <LinkedInIcon style={{ fontSize: 48 }} color='primary' />
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-2 ">
                    <div className="text-2xl font-medium text-gray-900 dark:text-artic-blue text-center">
                        &#169; 2024 <span className='xl:hidden'><br/></span>Ensured Employment
                    </div>
                    <hr className="w-8 h-0.5 mx-auto mb-1 bg-gray-700 border-0 rounded dark:bg-white" />
                    <div className="text-xl font-normal text-gray-500 dark:text-gray-400 inline-block lg:pl-6">
                        <div className="inline-block cursor-pointer pr-3 pb-1 lg:pb-0">
                            Privacy Policy
                        </div>
                        <div className="inline-block cursor-pointer pr-3">
                            Terms of Use
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-2">
                    <div className="text-2xl font-medium text-gray-900 dark:text-artic-blue text-center lg:text-left">
                        Contact
                    </div>
                    <hr className="w-8 h-0.5 mb-1 border-0 rounded bg-gray-700 dark:bg-white mx-auto lg:mx-0" />
                    <div className='flex flex-row items-center gap-2'>
                        <div className="flex flex-col text-custom-black gap-4 dark:text-white">
                            <Phone style={{ fontSize: 28 }} className="mr-2" />
                            <Email style={{ fontSize: 28 }} className="mr-2" />
                        </div>
                        <div className="flex flex-col text-gray-500 gap-4 dark:text-white">
                            <div>(917) 443-9971</div>
                            <a href="mailto:ensuredemployment@gmail.com">Email Us</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer >
    )
}