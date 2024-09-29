import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Email, Phone } from '@mui/icons-material';

export default function TopBar() {
  return (
    <header className="bg-white text-gray-900 shadow-lg">
      <nav className="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between">
        {/* Icons */}
        <div className="flex lg:flex-row">
          <Link href={"https://facebook.com/ensuredemployment"} className="p-2 hover:bg-dark-ab transition-all cursor-pointer">
            <FacebookIcon style={{ fontSize: 32 }} color='primary' />
          </Link>
          <Link href={"https://www.instagram.com/ensuredemployment/"} className="p-2 hover:bg-dark-ab transition-all cursor-pointer">
            <InstagramIcon style={{ fontSize: 32 }} sx={{ color: "#E4405F" }} />
          </Link>
          <div className="p-2 hover:bg-dark-ab transition-all cursor-pointer">
            <LinkedInIcon style={{ fontSize: 32 }} color='primary' />
          </div>
        </div>

        {/* Contact */}
        <div className='flex flex-row font-headings'>
          <div className="flex flex-row text-custom-black items-center hover:bg-dark-ab transition-all cursor-pointer py-2.5 px-4">
            <Phone style={{ fontSize: 28 }} className="mr-2" />
            <div className='leading-none'>(917) 443-9971</div>
          </div>
          <div className="flex flex-row text-custom-black items-center hover:bg-dark-ab transition-all cursor-pointer py-2.5 px-4">
            <Email style={{ fontSize: 28 }} className="mr-2" />
            <a href="mailto:ensuredemployment@gmail.com">Email Us</a>
          </div>
        </div>

      </nav>
    </header>
  )
}