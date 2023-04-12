import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsGraphic from '../assets/ContactUsPageGraphic.png';
import PageTitle from '@/shared/PageTitle';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles =
    'w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-2';
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id={SelectedPage.Contact} className="mx-auto w-5/6 pt-20 pb-32">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Contact);
        }}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PageTitle>
            <span className="text-primary-500">JOIN NOW </span>TO GET IN SHAPE
          </PageTitle>
          <p>
            Donec dignissim quam vel auctor faucibus. Nam non ex orci. Cras
            auctor iaculis orci, sed volutpat nisl interdum vel. Vivamus porta
            erat et cursus pretium
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/d3bfc02f8ff1e85b2fef2959c8af299e"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Name"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500 mb-2">
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                </p>
              )}
             
              <input
                className={inputStyles}
                type="text"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  ,
                })}
              /> {errors.email && (
                <p className="mt-1 text-primary-500 mb-2">
                  {errors.email.type === 'required' && 'This field is required.'}
                  {errors.email.type === 'pattern' && 'Invalid email address.'}
                </p>
              )}
               <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="Message"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500 mb-2">
                  {errors.message.type === 'required' && 'This field is required.'}
                  {errors.message.type === 'maxLength' && 'Max length is 2000 characters.'}
                </p>
              )}
              <button type='submit'
              className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
              >Send</button>
              
              
            </form>
            
          </motion.div>
          <motion.div className='relative mt-16 basis-2/5 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            >
                <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-20 before:z-[-1] flex items-center justify-center'>
                    <img className='w-full' alt='contact-image' src={ContactUsGraphic}/>
                </div>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
