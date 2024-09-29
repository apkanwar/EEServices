import Link from 'next/link';
import Image from 'next/image';
import { Popover } from '@headlessui/react'

const Navbar = ({ color }) => {
    return (
        <header className={`bg-${color} font-dText uppercase font-bold text-white justify-center flex 2xl:block`}>
            <div className="xl:mx-20 flex flex-row justify-between items-center">
                <Link href="/" className='flex flex-row items-center gap-4'>
                    <Image width={100} height={100} src="/ensuredIcon.png" className='w-16 lg:w-24' alt="" />
                    <h1 className="lg:text-xl">Ensured Employment Services</h1>
                </Link>

                <Popover.Group className="hidden 2xl:flex gap-6 font-semibold">
                    <Link href={"/job-seekers"} className="px-3 py-1.5 rounded hover:bg-custom-black transition ease-in duration-200">
                        Job Seekers
                    </Link>
                    <Link href={"/employers"} className="px-3 py-1.5 rounded hover:bg-custom-black transition ease-in duration-200">
                        Employers
                    </Link>
                    <Link href={"/about"} className="px-3 py-1.5 rounded hover:bg-custom-black transition ease-in duration-200">
                        About Us
                    </Link>
                    <Link href={"/resources"} className="px-3 py-1.5 rounded hover:bg-custom-black transition ease-in duration-200">
                        Resources
                    </Link>
                    <Link href={"/faq"} className="px-3 py-1.5 rounded hover:bg-custom-black transition ease-in duration-200">
                        FAQ
                    </Link>
                </Popover.Group>
            </div>
        </header>
    )
}

export default Navbar;