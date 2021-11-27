import React from 'react';
import { Link } from 'react-router-dom';

// import logotype from "../components/images/logotype.svg";

function Footer() {
  return (
    <footer>
      <div className="max-w-1200 mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-pirGray-800">

        </div>


        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-pirGray-800">


          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
        
      <Link href="" target='_blanck' class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </Link>
      <Link href="" target="_blanck" class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </Link>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by <a className="text-white hover:underline" href="" target="_blanck">Yanick</a>. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;