// import logo from './logo.svg';


import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import SignupJobGiver from './components/SignupJobGiver';
import SignupJobSeeker from './components/SignupJobSeeker';
import Auction from './components/Auction';
import Dashboard from './components/Dashboard';
import Favourite from './components/Favourite';


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
              <Route path="/auction" element={<Auction />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/favourite" element={<Favourite />} />

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
