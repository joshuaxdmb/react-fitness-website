import { useEffect, useState } from 'react';
import Navbar from './scenes/Navbar';
import { SelectedPage } from './shared/types';
import Home from './scenes/Home';
import Benefits from './scenes/Benefits';
import Plans from './scenes/Plans';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 10) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage]);
  return (
    <div className="app bg-gray-10">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Plans setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  );
}

export default App;
