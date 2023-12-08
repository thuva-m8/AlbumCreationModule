'use client'
import {Fragment, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import Link from "next/link";
import {useParams} from "next/navigation"
import DeletePop from '../component/deleteModel'

const products = [
    {
        id: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
    },
    {
        id: 2,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
    },
    {
        id: 3,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
    },
    {
        id: 4,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
    },


]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(false)
    const [openModel, setModelOpen] = useState(false)

    const params = useParams();
    return (
        <div className="bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 mt-20">
            <Link href="/album">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                </svg>
            </Link>
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
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

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div
                            className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>


                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <main className=" pb-24">
                <DeletePop open={openModel} setOpen={setModelOpen}/>

                <div className="text-center py-4 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Album title</h1>
                </div>

                {/* Filters */}
                <Disclosure
                    as="section"
                    aria-labelledby="filter-heading"
                    className="relative z-10 border-t border-b border-gray-200 grid items-center"
                >
                    <div className="col-start-1 row-start-1 py-4">
                        <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <Menu as="div" className="relative inline-block">
                                <div className="flex">
                                    <div className="flex justify-end space-x-2">
                                        <Link
                                            href={`/album/gallery/${params.id}/edit`}
                                            type="button"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                                            onClick={() => setModelOpen(true)}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </div>
                            </Menu>
                        </div>
                    </div>
                </Disclosure>

                {/* Product grid */}
                <section aria-labelledby="products-heading"
                         className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                    <div
                        className="mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <div key={product.id}
                                 className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                                <div
                                    className=" overflow-hidden bg-gray-200 aspect-w-10 aspect-h-100 group-hover:opacity-90">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center"
                                    />
                                </div>
                                <div className="pt-10 pb-4 text-center">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>

                                    <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pagination */}

            </main>
        </div>
    )
}
