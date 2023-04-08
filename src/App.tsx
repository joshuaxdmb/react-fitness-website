import { useEffect, useState } from 'react';
import Navbar from './scenes/Navbar';
import { SelectedPage } from './shared/types';
import Home from './scenes/Home';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(true)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  },[])
  useEffect(()=>{
    console.log(selectedPage)
  },[selectedPage])
  return (
    <div className="app bg-gray-10">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage = {isTopOfPage} /> 
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
