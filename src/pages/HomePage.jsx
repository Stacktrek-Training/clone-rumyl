import React from "react";
import Header from "../layouts/Header";
import Body from "../layouts/Body";
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
      <div class="grid place-items-center pt-7">

        <nav aria-label="Page navigation example ">
          <ul class="inline-flex -space-x-px">
            <li>
              <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
              <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
        </nav>
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        
        {/* Footer */}
        <footer className="bg-gray-200 p-4 text-center">
        <p className="text-gray-600">
          HOME | CONTACT US <br />
          &copy; {new Date().getFullYear()} 2023 Madara Inc. All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
