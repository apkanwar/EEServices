import Link from 'next/link';
import Image from 'next/image';
import { Popover, Dialog } from '@headlessui/react'
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = ({ color }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className={`bg-${color} font-dText uppercase font-bold text-white justify-center 2xl:block`}>
            <div className="xl:mx-20 md:mx-8 flex flex-col md:flex-row justify-between items-center">
                <Link href="/" className='flex flex-row items-center gap-4'>
                    <Image width={100} height={100} src="/logoWhite.png" className='w-16 lg:w-24' alt="Ensured Employment Services Logo" />
                    <h1 className="lg:text-xl">Ensured Employment Services</h1>
                </Link>

                {/* Hamburger Icon */}
                <div className="flex xl:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden xl:flex gap-6 font-semibold">
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

                {/* Mobile Menu */}
                <Dialog as="div" className="xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between md:justify-end">
                            {/* Logo */}
                            <Link href="/" className='md:hidden'>
                                <Image className="h-16 w-auto" src="/logo.png" alt="Ensured Employment Services Logo" width={64} height={64} />

                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <h1 className="text-base font-headings md:hidden">Ensured Employment Services</h1>
                        <div className="mt-6 flow-root">
                            <div className="my-6 divide-y divide-gray-500/10 text-base font-semibold leading-9">
                                <div className="space-y-2 py-6">
                                    <Link
                                        href="/job-seekers"
                                        className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                                    >
                                        Job Seekers
                                    </Link>
                                    <Link
                                        href="/employers"
                                        className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                                    >
                                        Employers
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/resources"
                                        className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                                    >
                                        Resources
                                    </Link>
                                    <Link
                                        href="/faq"
                                        className="-mx-3 block px-3 py-2 hover:bg-gray-50"
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </header>
    )
}

export default Navbar;