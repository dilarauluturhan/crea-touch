import { CiLinkedin } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";

function Footer() {
  return (
      <footer className='text-secondColor font-nunito'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <a href='https://github.com/dilarauluturhan/crea-touch' target='blank' className='flex font-bold items-center md:justify-start justify-center'>
            <span className="ml-3 text-3xl">CreaTouch</span>
          </a>
          <p className='text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4'>© 2023 CreaTouch —
            <a href='https://bento.me/dilarauluturhan' className='ml-1' rel='noopener noreferrer' target='_blank'>@dilarauluturhan</a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a href='https://www.linkedin.com/in/dilarauluturhan/' target='blank'>
              <CiLinkedin className='w-8 h-8 cursor-pointer hover:text-thirdColor' />
            </a>
            <a href='https://www.buymeacoffee.com/dilarauluturhan' target='blank'>
              <CiCoffeeCup className='w-8 h-8 cursor-pointer ml-1 mr-1 hover:text-thirdColor' />
            </a>
            <a href='https://bento.me/dilarauluturhan' target='blank'>
              <CiFaceSmile className='w-8 h-8 cursor-pointer hover:text-thirdColor' />
            </a>
          </span>
        </div>
      </footer>
  )
}

export default Footer;