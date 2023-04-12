import { PlanType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import PageTitle from '@/shared/PageTitle';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

const plans: Array<PlanType> = [
  {
    name: 'Lose Weight Fast',
    description:
      'Phasellus eros justo, hendrerit a auctor molestie, ultrices eu ligula. Phasellus pharetra malesuada pharetra. Nullam quis ultrices neque. Praesent ultrices aliquet tortor, nec laoreet metus vehicula at. Morbi varius metus felis, non mollis enim lacinia vitae. Suspendisse pharetra arcu tellus, tincidunt viverra libero elementum eu.',
    image: image1,
  },
  {
    name: 'Lose Some Weight and Tonify',
    description:
      'Phasellus eros justo, hendrerit a auctor molestie, ultrices eu ligula. Phasellus pharetra malesuada pharetra. Nullam quis ultrices neque. Praesent ultrices aliquet tortor, nec laoreet metus vehicula at. Morbi varius metus felis, non mollis enim lacinia vitae. Suspendisse pharetra arcu tellus, tincidunt viverra libero elementum eu.',
    image: image2,
  },
  {
    name: 'Gain Mass Fast(er)',
    description:
      'Phasellus eros justo, hendrerit a auctor molestie, ultrices eu ligula. Phasellus pharetra malesuada pharetra. Nullam quis ultrices neque. Praesent ultrices aliquet tortor, nec laoreet metus vehicula at. Morbi varius metus felis, non mollis enim lacinia vitae. Suspendisse pharetra arcu tellus, tincidunt viverra libero elementum eu.',
    image: image3,
  },
  {
    name: 'Lose Weight Steadily',
    description:
      'Phasellus eros justo, hendrerit a auctor molestie, ultrices eu ligula. Phasellus pharetra malesuada pharetra. Nullam quis ultrices neque. Praesent ultrices aliquet tortor, nec laoreet metus vehicula at. Morbi varius metus felis, non mollis enim lacinia vitae. Suspendisse pharetra arcu tellus, tincidunt viverra libero elementum eu.',
    image: image4,
  },
  {
    name: 'Get Healthy with Objectives',
    description:
      'Phasellus eros justo, hendrerit a auctor molestie, ultrices eu ligula. Phasellus pharetra malesuada pharetra. Nullam quis ultrices neque. Praesent ultrices aliquet tortor, nec laoreet metus vehicula at. Morbi varius metus felis, non mollis enim lacinia vitae. Suspendisse pharetra arcu tellus, tincidunt viverra libero elementum eu.',
    image: image5,
  },
  {
    name: 'Just Get Healthy (Not Recommended)',
    description:
      'Phasellus eros justo, hendrerit a auctor molestie, ultrices eu ligula. Phasellus pharetra malesuada pharetra. Nullam quis ultrices neque. Praesent ultrices aliquet tortor, nec laoreet metus vehicula at. Morbi varius metus felis, non mollis enim lacinia vitae. Suspendisse pharetra arcu tellus, tincidunt viverra libero elementum eu.',
    image: image6,
  },
];

const Class = ({ name, description, image }: PlanType) => {
  const overlayStyles = `p-5 absolute z-20 flex h-[380px] w-[450px] flex-col 
    items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px] hover:cursor-pointer">
      <div className={overlayStyles}>
        <p className="font-bold text-2xl">{name}</p>

        <p className='mt-5'>{description}</p>
      </div>
      <img className="h-[350px] object-cover" alt={`${image}`} src={image} />
    </li>
  );
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Plans = ({ setSelectedPage }: Props) => {
  const buttonRef = useRef();

  return (
    <section
      id="plans"
      className="mx-auto min-h-full w-full  py-20 bg-primary-100 justify-center flex items-center"
    >
      {' '}
      <div className=" relative -bottom-[150px] hover:cursor-pointer">
        <ChevronLeftIcon
          className="h-10 w-10  hover:text-primary-300"
          onClick={() => {
            buttonRef.current.scrollLeft -= 400;
          }}
        />
      </div>
      <motion.div
        className="w-5/6"
        onViewportEnter={() => {
          console.log('here plans')
          setSelectedPage(SelectedPage.Plans)}}
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
        >
          <div className="md:w-3/5">
            <PageTitle>MY PLANS</PageTitle>
            <p className="py-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              consectetur magna ac metus pellentesque, in aliquam metus
              pharetra. Praesent et pretium neque. Ut ut ante eu sapien tempus
              mollis. Nam nec ligula consectetur, aliquet odio id, tempor arcu.
              Integer sodales arcu sed rutrum cursus.
            </p>
          </div>
        </motion.div>
        <div
          ref={buttonRef}
          className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden no-scrollbar"
        >
          <ul className="w-[2800px] whitespace-nowrap">
            {plans.map((item: PlanType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
      <div className="relative -bottom-[150px]">
        <ChevronRightIcon
          className=" hover:text-primary-300 hover:cursor-pointer  h-10 w-10"
          onClick={() => {
            buttonRef.current.scrollLeft += 400;
          }}
        />
      </div>
    </section>
  );
};

export default Plans;
