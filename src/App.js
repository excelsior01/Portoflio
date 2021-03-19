import { lazy, Suspense } from "react";
import "./App.css";
 

import Media from "react-media";
import Cursor from "./comps/Cursor";
const Nav = lazy(() => import("./comps/Nav"));
const Hero = lazy(() => import("./comps/Hero"));
const About = lazy(() => import("./comps/About"));
const Works = lazy(() => import("./comps/Works"));
const Contact = lazy(() => import("./comps/Contact"));
const Footer = lazy(() => import("./comps/Footer"));

function App() {
  return (
    <div className='App'>
      <Media queries={{ small: { maxWidth: 768 } }}>
        {(matches) => (matches.small ? null : <Cursor />)}
      </Media>

      <Suspense fallback={<div className='loading'>loading...</div>}>
         
          <Nav />
          <Hero />
          <About />
          <Works />
          <Contact />
          <Footer />
        
      </Suspense>
    </div>
  );
}

export default App;
