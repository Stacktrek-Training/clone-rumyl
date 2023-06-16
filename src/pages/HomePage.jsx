import React from "react";
import Header from "../layouts/Header";
import Body from "../layouts/Body";
import Page from "../layouts/Pagination";
import Footer from "../layouts/Footer";
import { Button, Navbar } from "flowbite-react";
import "../assets/styles/index.css";
import DefaultCarousel from "../components/DefaultCarousel";

function HomePage() {
  return (
    <div className="grid bg-gray-100">
           {/* Header */}

      <Header />
      {/* Content */}
      <main className="container mx-auto">
        <DefaultCarousel />
        <br/>
        <Body />    
      </main>
      
      
      {/* Pagination*/}
      <Page/>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        
        {/* Footer */}
      <Footer/>
    </div>
  );
}

export default HomePage;
