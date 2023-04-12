import ActionButton from '@/shared/ActionButton';
import Benefit from '@/shared/Benefit';
import PageTitle from '@/shared/PageTitle';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
  ClipboardDocumentIcon,
  UserCircleIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import BenefitsPageGraphic from '../assets/BenefitsPageGraphic.png';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <ClipboardDocumentIcon className="h-10 w-10" />,
    title: 'Periodic progress checks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero neque, fringilla sed felis id, vulputate porttitor est. In tincidunt varius nisi, at consectetur lacus egestas quis.',
  },
  {
    icon: <UserCircleIcon className="h-10 w-10" />,
    title: 'Trainind and diet plans that work for YOU',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero neque, fringilla sed felis id, vulputate porttitor est. In tincidunt varius nisi, at consectetur lacus egestas quis.',
  },
  {
    icon: <AcademicCapIcon className="h-10 w-10" />,
    title: 'Proved by Science and demonstrated by real people',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero neque, fringilla sed felis id, vulputate porttitor est. In tincidunt varius nisi, at consectetur lacus egestas quis.',
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 pt-20 pb-20">
      {/* HEADER */}
      <motion.div
        
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onViewportEnter={() => {
            setSelectedPage(SelectedPage.Benefits);
            console.log('here benefits');
          }}
        >
          <PageTitle>MORE THAN JUST A TRAINER</PageTitle>
          <p className="mb-10">
            I provide a world class training and diet plan built with the same
            principles professional athletes and Holliwood stars use, but
            adapted to your goals and current status. You also won't be alone
            for days or weeks, following my plan blindly without seeing any
            results. We will measure your progress week by week and adjust the
            strategy where necessary.
          </p>
        </motion.div>
        {/* BENFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              setSelectedPage={setSelectedPage}
              icon={benefit.icon}
            >
              {benefit.description}
            </Benefit>
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-lef-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <PageTitle>
                    DOZENS OF CLIENTS GETTING{' '}
                    <span className="text-primary-500">FIT</span>{' '}
                  </PageTitle>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                consectetur magna ac metus pellentesque, in aliquam metus
                pharetra. Praesent et pretium neque. Ut ut ante eu sapien tempus
                mollis. Nam nec ligula consectetur, aliquet odio id, tempor
                arcu. Integer sodales arcu sed rutrum cursus.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                consectetur magna ac metus pellentesque, in aliquam metus
                pharetra. Praesent et pretium neque. Ut ut ante eu sapien tempus
                mollis. Nam nec ligula consectetur, aliquet odio id, tempor
                arcu. Integer sodales arcu sed rutrum cursus.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-12">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
