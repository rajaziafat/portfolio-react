import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons"

import { motion } from 'framer-motion';


function HeroHome() {
    return (
        <>
        
        <div id="herohome" className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                    <motion.h2 initial={{ x: 0, opacity: 0 }} animate={{ y: 10, opacity: 1 }} transition={{ ease: "easeOut", duration: 1.5,   delay: 1}} className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font text-pirGray-100">Yanick Alex</motion.h2>
                    <motion.h1 initial={{ x: 0, opacity: 0 }} animate={{ y: 10, opacity: 1 }} transition={{ ease: "easeOut", duration: 1.5,  delay: 1.5 }}   className="mb-8 text-4xl font-black tracking-tighter text-black md:text-5xl title-font text-pirGray-100">Desarollador Software & Diseñador UX/UI.</motion.h1>
                    <motion.p  initial={{ x: 0, opacity: 0 }} animate={{ y: 10, opacity: 1 }} transition={{ ease: "easeOut", duration: 1.5,  delay: 2 }} className="mb-8 text-base leading-relaxed text-left text-blueGray-600 text-pirGray-400">
                    Disfruto creando experiencias digitales a través del diseño y el código. Me especializo en diseño UI / UX
                        y desarrollo web front-end, centrándose en convertir ideas en soluciones atractivas y significativas.</motion.p>
                    <motion.div 
                        initial={{ x: 0, opacity: 0 }} 
                        animate={{ y: 10, opacity: 1 }} 
                        transition={{ ease: "easeOut", duration: 2,  delay: 2.5 }} 
                        className="flex justify-center">

                        <a href="" target="_blank" rel="noreferrer">
                            <button className="inline-flex text-white bg-pirGray-700 border-0 py-2 px-4 focus:outline-none hover:bg-pirGray-800 rounded text-lg">
                                <div className="items-center flex-shrink-0 mr-1.5">
                                <FontAwesomeIcon size="lg" icon={faDribbble}/>
                                </div>
                                Dribbble
                            </button>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                            <button 
                                className="ml-4 inline-flex text-white bg-pirGray-700 border-0 py-2 px-4 focus:outline-none hover:bg-pirGray-800 rounded text-lg"
                                >
                                    <div className="items-center flex-shrink-0 mr-1.5">
                                    <FontAwesomeIcon size="lg" icon={faGithub}/>
                                    </div>
                                    Github 
                            </button>
                        </a>
                    </motion.div>
                </div>
                <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 2,  delay: 2.5 }}  className="w-full lg:max-w-lg md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/AvSPKv9.jpg"/>
                </motion.div>
            </div>
        </div>
        
        </>
    )
}

export default HeroHome
