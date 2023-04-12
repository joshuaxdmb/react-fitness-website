import Logo from '../assets/Logo.png';

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="h-12" alt="logo-foot" src={Logo} />
          <p className='my-5'>
            Praesent ullamcorper elementum lorem a pretium. Nunc at maximus
            libero. Proin auctor metus quis sem rutrum cursus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Sed at cursus ligula
          </p>
          <p>
            © STEFFIT All Rights Reserved
          </p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Book a Session</p>
            <p className='my-5'>Watch my Intro Video</p>
            <p>FAQ</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Get in touch</h4>
            <p className='my-5'>(+1) 647 237 9236</p>
            <p className='my-5'>Mon-Fri 8:00 - 17:00</p>
            <p>Canada Eastern Time</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
