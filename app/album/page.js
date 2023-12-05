'use client'
import {Fragment, useState} from 'react'
import {Dialog, Disclosure, Menu, Popover, Tab, Transition} from '@headlessui/react'
import {MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon} from '@heroicons/react/outline'
import {ChevronDownIcon, FilterIcon} from '@heroicons/react/solid'
import Link from "next/link";

const products1 = [
    {
        id: 1,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$13',
        description: '3 sizes available',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 2,
        name: 'Focus Card Holder',
        href: '#',
        price: '$64',
        description: 'Walnut',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 3,
        name: 'Focus Carry Pouch',
        href: '#',
        price: '$32',
        description: 'Heather Gray',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
]
const products2 = [
    {
        id: 7,
        name: 'Electric Kettle',
        href: '#',
        price: '$149',
        description: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-07.jpg',
        imageAlt: 'Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.',
    },
    {
        id: 8,
        name: 'Leather Workspace Pad',
        href: '#',
        price: '$165',
        description: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-08.jpg',
        imageAlt:
            'Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.',
    },
    {
        id: 9,
        name: 'Leather Long Wallet',
        href: '#',
        price: '$118',
        description: 'Natural',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-09.jpg',
        imageAlt:
            'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
    },
    // More products...
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-gray-50">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 sm:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25"/>
                        </Transition.Child>


                    </Dialog>
                </Transition.Root>

                <main>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="py-24 text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Gallery</h1>
                        </div>
                        <div className="flex justify-end">.
                            <Link href="/create-album">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center px-3.5 py-2 border border-blue-700 bg-blue-100 text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-100"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5"
                                         stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                    Create an album
                                </button>
                            </Link>
                        </div>
                        <section aria-labelledby="filter-heading" className="border-t border-gray-200 pt-6 mt-2">
                        </section>

                        {/* Product grid */}
                        <section aria-labelledby="products-heading" className="mt-8">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                                {products1.map((product) => (
                                    <a key={product.id} href={product.href} className="group">
                                        <div
                                            className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                                            />
                                        </div>
                                        <div
                                            className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                            <h3>{product.name}</h3>
                                            <p>{product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                                    </a>
                                ))}
                            </div>
                        </section>

                        <section aria-labelledby="more-products-heading" className="mt-16 pb-24">
                            <h2 id="more-products-heading" className="sr-only">
                                More products
                            </h2>

                            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                                {products2.map((product) => (
                                    <a key={product.id} href={product.href} className="group">
                                        <div
                                            className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                                            />
                                        </div>
                                        <div
                                            className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                            <h3>{product.name}</h3>
                                            <p>{product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>

                <footer aria-labelledby="footer-heading" className="bg-white border-t border-gray-200">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="py-20">
                            <div
                                className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
