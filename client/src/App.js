// import logo from './logo.svg';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup_Jobgiver from './components/Signup_Jobgiver';
import Signup_Jobseeker from './components/Signup_Jobseeker';


function App() {
  return (
    <>
    <Router>
        {/* <AlertComponent > */}
          {/* <NoteComponent loggedin={loggedin} setloggedin={setloggedin}  > */}
            <Navbar />

              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup-jobgiver" element={<Signup_Jobgiver />} />
              <Route path="/signup-jobseeker" element={<Signup_Jobseeker />} />

                {/* 
                <Route path="/login" element={<Login loggedin={loggedin} setloggedin={setloggedin} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path='*' element={<PageNotFound />} /> */}
              </Routes>
            <Footer/>

          {/* </NoteComponent> */}
        {/* </AlertComponent> */}
    </Router>
    </>
  );
}

export default App;
