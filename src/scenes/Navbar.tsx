import {useEffect, useState} from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Logo from '../assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean
};

const Navbar = ({selectedPage,setSelectedPage, isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const navbarBackground = isTopOfPage ? "" : "bg-secondary-500 drop-shadow"

    
  return (
    <nav >
        <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
              <div className={`${flexBetween} w-full gap-10`}>

                {/* LEFT SIDE OF NAVBAR OR LOGO*/}
                <img alt='logo' src={Logo} style={{height:50}}/>

                {/* RIGHT SIDE OF NAVBAR */}
                {isAboveMediumScreens? <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-6 text-lg`}>
                    <Link page='Home'  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link  page="Our Classes"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contact Us"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                  <p className='text-lg'>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage} >Become a Member</ActionButton>
                  </div>
                </div> : (
                  <div>
                    <button className='rounded-full bg-secondary-500 p-2 hover:bg-primary-300 '
                    onClick={()=>{setIsMenuToggled(!isMenuToggled)}}>
                      <Bars3Icon className='h-6 w-6 text-white'/>
                    </button>
                  </div>
                  
                ) }
                
              </div>
             
            </div>
        </div>
        {/* MOBILE MENU */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-400 drop-shadow-xl'>
            <div className='flex justify-end w-full p-10'>
            <button onClick={()=>{setIsMenuToggled(!isMenuToggled)}}>{<XMarkIcon className='h-8 w-8 text-white hover:text-primary-300'/>}</button>
            </div>
            <div className={`flex ml-[20%] flex-col  gap-8 text-2xl text-white`}>
                    <Link page='Home'  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link  page="Our Classes"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contact Us"selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  </div>

          </div>
        )}
    </nav>
  )
}

export default Navbar