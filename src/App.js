import React from "react";

import { About, Footer, Header, Skills, Testimonial, Works } from "./container";
import { Navbar } from "./components";
import BackgroundAnimation from "./BackgroundAnimation";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
      <BackgroundAnimation />
    </div>
  );
};

export default App;
