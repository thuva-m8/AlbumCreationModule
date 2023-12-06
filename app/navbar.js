'use client'
import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Link from "next/link";
import {usePathname} from "next/navigation";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Principals', href: '#'},
    {name: 'Events', href: '#'},
    {name: 'Gallery', href: '/album'},
    {name: 'Teachers', href: '#'}
]

export default function navbar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname();
    return (
        <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-96">
                        <div className="relative flex justify-between h-20">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-2 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />

                                </div>
                                <div
                                    className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center text-blue-800 px-1 pt-1 text-m font-medium ">
                                    {navigation.map((item) => {
                                        const isActive = pathname.endsWith(item.href);
                                        return (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={isActive ? '' : 'border-transparent text-gray-500  hover:text-gray-700 hover:border-gray-300'}
                                            >
                                                {item.name}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-4 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Dashboard
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Team
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Projects
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Calendar
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
