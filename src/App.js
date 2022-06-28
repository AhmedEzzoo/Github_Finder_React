import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import User from './pages/User';
import Footer from './components/layout/Footer';
import { GitHubProvider } from './context/GitHubContext';
import { AlertProvider } from './context/AlertContext';
import AlertComponent from './components/layout/AlertComponent';



function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
     <Router>   
      <div className ='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>

            <AlertComponent/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />}/>
              <Route path='/user/:login' element={<User/>}/>
              <Route path='/notfound' element={<Notfound />} /> 
              <Route path='/*' element={<Notfound />} /> 
            </Routes>
        </main>
        <Footer/>
      </div>
     </Router>
     </AlertProvider>
    </GitHubProvider>
 
  );
}

export default App;
