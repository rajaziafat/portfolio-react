import React from "react";


import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="max-w-1200 mx-auto bg-pirGray-900">
      <Header/>
      <HeroHome/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default Home;