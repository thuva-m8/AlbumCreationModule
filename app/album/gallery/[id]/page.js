'use client'
import {Fragment, useEffect, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import Link from "next/link";
import {useParams} from "next/navigation"
import DeletePop from '../component/deleteModel'
import {generateClient} from "aws-amplify/data";

const client = generateClient()

const products = []

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AlbumPhotoList() {
    const [open, setOpen] = useState(false)
    const [openModel, setModelOpen] = useState(false)
    const [albumTitle, setAlbumTitle] = useState([])
    const [description, setDescription] = useState([])
    const [albumCreatedAt, setAlbumCreatedAt] = useState([])
    const [imageUrl, setImageUrl] = useState([])


    const getAnAlbumDetails = async () => {
        const {data: items, errors} = await client.models.Album.get({id: params.id})
        setAlbumTitle(items.name)
        setDescription(items.description)
        setAlbumCreatedAt(items.createdAt.toLocaleLowerCase().slice(0, 10))
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (params.id) {
            getAnAlbumDetails()
        }
    }, [])
    const params = useParams();
    return (
        <div className="bg-white rounded max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
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
                    <h1 className="text-lg font-bold tracking-tight text-gray-900">{albumTitle}</h1>
                </div>
                <div>
                    <h1 className="text-sm tracking-tight text-gray-900">{description}</h1>
                </div>
                <div>
                    <h1 className="text-sm tracking-tight text-gray-400">{albumCreatedAt}</h1>
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
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="w-4 mr-3 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                                            </svg>

                                            Edit
                                        </Link>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm rounded-md shadow-sm text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                                            onClick={() => setModelOpen(true)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="w-4 mr-3 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                                            </svg>

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
                    {products.length ?
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
                                </div>

                            ))}
                        </div>
                        :
                        <div>
                            <div className="mt-6 sm:mt-20 sm:col-span-2 flex justify-center">
                                <div
                                    className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-20 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                            >
                                                <span>Upload a Photo</span>
                                                <input id="file-upload" name="file-upload" type="file"
                                                       className="sr-only"/>
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </section>

                {/* Pagination */}

            </main>
        </div>
    )
}
