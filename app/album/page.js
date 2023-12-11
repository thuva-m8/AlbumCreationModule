'use client'
import {Fragment, useState, useEffect} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import Link from "next/link";
import {generateClient} from 'aws-amplify/data'

const products1 = [
    {
        id: 1,
        name: 'album title',
        href: '',
        createdAt: '2023/12/6',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
]

const client = generateClient()

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Album() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [album, setAlbum] = useState([])

    const listAlbum = async () => {
        const response  = await client.models.Album?.list()
        console.log(response, 'response')

        // setAlbum(data)

    }
    useEffect(() => {
        listAlbum()
    }, []);
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
                        <div className="py-10 text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Gallery</h1>
                        </div>
                        <div className="flex justify-end">
                            <Link href="album/create-album">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center px-3.5 py-2 border border-blue-800 bg-blue-50 text-sm rounded-md text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-100"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5"
                                         stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
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


                            <div
                                className="grid grid-cols-1 gap-y-20 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-20">
                                {products1.map((product) => (
                                    <a key={product.id} href={`album/gallery/${product.id}`} className="group">
                                        <div
                                            className="w-full aspect-w-1 aspect-h-10 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="w-full h-96 object-center object-cover group-hover:opacity-75"
                                            />
                                        </div>
                                        <div
                                            className="mt-4 flex items-center justify-between ">
                                            <h3 className='text-m font-medium text-gray-900'>{product.name}</h3>
                                            <p className=' font-medium text-sm text-opacity-30 text-gray-900'>{product.createdAt}</p>
                                        </div>
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
