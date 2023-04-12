import React from 'react';
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
type Props = {
  children: React.ReactNode;
  title: String;
  icon: React.ReactElement;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
    hidden:{opacity:0, scale:0.9},
    visible:{opacity:1, scale:1}
}

const Benefit = ({ children, title, icon, setSelectedPage }: Props) => {
    
  return (
    <motion.div 
        variants={childVariant}
        className='md:h-[450px] flex flex-col items-center justify-center gap-5 mt-10 md:mt-0 rounded-md border-2 px-5 border-gray-100 py-16 text-center'>
        <div className='bg-primary-100 h-[70px] w-[70px] items-center justify-center flex rounded-full'>
        {icon}
        </div>
      <h4 className='font-bold'>{title}</h4>
      <p>{children}</p>
      <AnchorLink
              className="text-sm fond-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
      
    </motion.div>
  );
};

export default Benefit;
