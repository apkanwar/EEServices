import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/Twitter';
import { Email, Phone } from '@mui/icons-material';
import Link from 'next/link';

export default function Footer() {
    const socialMedia = [
        { href: "https://facebook.com/ensuredemployment", icon: FacebookIcon, color: 'primary', label: "Facebook" },
        { href: "https://www.instagram.com/ensuredemployment/", icon: InstagramIcon, style: { color: "#E4405F" }, label: "Instagram" },
        { href: "#", icon: XIcon, color: 'primary', label: "Twitter" },
        { href: "#", icon: LinkedInIcon, color: 'primary', label: "LinkedIn" }
    ];

    return (
        <footer className="bg-white font-headings dark:bg-midnight-black">
            <div className="mx-auto flex flex-col lg:flex-row max-w-7xl items-center justify-between p-16 lg:px-8 gap-8">
                <div className="grid grid-cols-4 lg:grid-cols-2">
                    {socialMedia.map(({ href, icon: Icon, color, style, label }, idx) => (
                        <Link key={idx} href={href} target='_blank' className="p-2 hover:bg-artic-blue transition-all rounded-md mx-2 cursor-pointer" aria-label={label}>
                            <Icon style={{ fontSize: 48, ...style }} color={color} />
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-5 lg:gap-2">
                    <div className="text-2xl font-medium text-gray-900 dark:text-artic-blue text-center">
                        <Link href={'/admin'} className='cursor-default'>&#169; </Link>
                        2024 <span className='xl:hidden'><br /></span>Ensured Employment
                    </div>
                    <hr className="w-8 h-0.5 mx-auto mb-1 bg-gray-700 border-0 rounded dark:bg-white" />
                    <div className="text-xl font-normal text-gray-500 dark:text-gray-400 inline-block lg:pl-6">
                        <Link href="/privacy-policy" className="inline-block cursor-pointer pr-3 pb-1 lg:pb-0">Privacy Policy</Link>
                        <Link href="/terms-of-use" className="inline-block cursor-pointer pr-3">Terms of Use</Link>
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
        </footer>
    );
}
