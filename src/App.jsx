  import './App.css';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from 'react'; 
  import 'typeface-poppins';
import CustomRoute from './Components/Routes/CustomRoutes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

  function App() {
    useEffect(() => {
      AOS.init({
        // AOS configurations (optional)
        // Used for scrolling animations
      });
    }, []);


    return (
      <>
         <Header/>  
          <CustomRoute/>
         <Footer/>
      </>
    );
  }

  export default App;
