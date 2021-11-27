/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  GlobeIcon,
  DesktopComputerIcon,
  CakeIcon,
  BookOpenIcon,
  TerminalIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { motion } from 'framer-motion';
import logotype from "../components/images/logotype.svg";

import { Link } from 'react-scroll';

const solutions = [
  {
    name: 'IP Address Tracker',
    description: 'La geolocalización de IP le permite rastrear direcciones IP desde cualquier parte del mundo ...',
    href: 'projectone',
    icon: GlobeIcon,
  },
  {
    name: 'Emrolley course UI Design',
    description: 'Enrolley es una plataforma de cursos en línea. Más que una plataforma enfocada a instituciones escolares ...',
    href: 'projecttwo',
    icon: DesktopComputerIcon,
  },
  { name: 'Food App - React Native', description: "Servicio de pedidos de alimentos en línea creado para su restaurante. Modernice su negocio ...", href: 'projectthree', icon: CakeIcon },
]
// const callsToAction = [
//   { name: 'Watch Demo', href: '/', icon: PlayIcon },
//   { name: 'Contact Sales', href: '/', icon: PhoneIcon },
// ]
const resources = [
  {
    name: 'Frameworks para inteligencia artificial',
    description: 'No hay duda de que Nextjs es un marco poderoso para construir niveles de producción ...',
    href: 'articles',
    icon: BookOpenIcon,
  },
  {
    name: 'Implementar dirección IP local con Next JS.',
    description: 'La inteligencia artificial es una tecnología que está transformando todos los ámbitos de la vida ...',
    href: 'articles',
    icon: TerminalIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





export default function Header() {

  return (
    <Popover className="sticky top-0 z-50 relative bg-pirGray-900">
      {({ open }) => (
        <>
          <motion.div initial={{ y: 0, opacity: 0 }} animate={{ y: 10, opacity: 1 }} transition={{ ease: "easeOut", duration: 1.5, delay: .3 }} className="max-w-1200 mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-pirGray-800 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-10 w-auto sm:h-10"
                    src={logotype}
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-pirGray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-pirGray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pirGray-700">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">

                <Link activeClass="active" spy={true} smooth={true} to="herohome" className="text-base font-medium text-white hover:text-gray-400 cursor-pointer">
                  Perfil
                </Link>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-400' : 'text-white',
                          'group bg-white  inline-flex items-center text-base font-medium hover:text-gray-400 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 bg-pirGray-900'
                        )}
                      >
                        <span>Proyectos</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-400' : 'text-white',
                            'ml-2 h-5 w-5 group-hover:text-gray-400'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-pirGray-1000 px-5 py-6 sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-pirGray-800"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-300">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover className="relative ">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-400' : 'text-white',
                          'group bg-white  inline-flex items-center text-base font-medium hover:text-gray-400 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 bg-pirGray-900'
                        )}
                      >
                        <span>Articulos</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-400' : 'text-white',
                            'ml-2 h-5 w-5 group-hover:text-gray-400'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-pirGray-1000 px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <Link to={item.href}
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  >

                                  <Popover.Button
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-pirGray-800"
                                    key={item.name}
                                  >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                                    <div className="ml-6 text-left">
                                      <p className="text-base font-medium text-gray-300">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </Popover.Button>

                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                {/* <a href="/" className="text-base font-medium text-white hover:text-gray-400">
                  Contacto
                </a> */}

              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/* <a href="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </a> */}
                <a
                  href=""
                  target="_blanck"
                  className="ml-8 font-semibold whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-pirGray-700 hover:bg-pirGray-800"
                >
                  Curriculum
                </a>
              </div>
            </div>
          </motion.div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-pirGray-900 divide-y-2 divide-pirGray-800">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-10 w-auto"
                        src={logotype}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="sticky top-0 z-50 bg-pirGray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-pirGray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pirGray-700">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8 ">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-pirGray-700"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-300">{item.name}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <p href="/" className="text-base font-medium text-pirGray-500 hover:text-gray-700">
                      Artículo 1
                    </p>

                    <p href="/" className="text-base font-medium text-pirGray-500 hover:text-gray-700">
                      Artículo 2
                    </p>
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        className="text-base font-medium text-pirGray-500 hover:text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <a
                      href=""
                      target="_blanck"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pirGray-700 hover:bg-pirGray-800"
                    >
                      Curriculum
                    </a>
                    {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Made by{' '}
                      <a href="/" className="text-pirGray-700 hover:text-indigo-500">
                        yanick.
                      </a>
                    </p> */}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}


// bg-pirGray-900 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-pirGray-700 focus:outline-none
