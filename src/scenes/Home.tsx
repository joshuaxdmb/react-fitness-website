import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import ISSACert from '@/assets/ISSA-cert.png';
import ACECert from '@/assets/ACE-cert.png';
import EREPSCert from '@/assets/EREPS-cert.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section id="home" className="gap-16 bg-gray-10 pt-10 md:h-auto md:mb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 "
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5 px-20">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible:{opacity:1, x:0}}}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-6 text-md">
              The right plans are based on scientific facts and evidence, and
              proved through dozens of satisfied clients. No matter your body
              type, current shape, or goals, you CAN get in shape, and I will
              help you find a plan that works for you. Get the dream body that
              you want, starting now!
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2,duration: 0.5 }}
          variants={{ hidden: { opacity: 0, x: -50 }, visible:{opacity:1, x:0}}}
          className="flex mt-12 items-center gap-6 justify-center md:justify-start flex-col md:flex-row md:mb-10">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm fond-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-2/5 justify-center md:z-10 md:mt-12 md:justify-end">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* CERTIFICATIONS */}
      {isAboveMediumScreens && (
        <div className="h-[220px] w-full bg-primary-100 flex items-center">
          <div className="mx-auto w-5/6  ">
            <div className="flex  items-center justify-between">
              <img className="h-[150px]" alt="ISSA-certification" src={ISSACert} />
              <img className="h-[150px]" alt="ACE-certificaiton" src={ACECert} />
              <img className="h-[150px]" alt="EREPS-certification" src={EREPSCert} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
