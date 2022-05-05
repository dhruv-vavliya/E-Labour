// import logo from './logo.svg';


import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import SignupJobGiver from './components/SignupJobGiver';
import SignupJobSeeker from './components/SignupJobSeeker';


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
              <Route path="/signup-jobgiver" element={<SignupJobGiver />} />
              <Route path="/signup-jobseeker" element={<SignupJobSeeker />} />

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
