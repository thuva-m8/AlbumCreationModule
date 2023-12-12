'use client'

import {useState} from 'react'

export default function albumForm({onSubmit}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [albumTitle, setAlbumTitle] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [description, setDescription] = useState('')

    const handleAlbumTitle = (e) => {
        setAlbumTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newAlbum = {
            name: albumTitle,
            description: description
        };

        // Pass the newAlbum data to the parent component's onSubmit function
        onSubmit(newAlbum);

        // Optionally, you can clear the form fields or perform other actions after creating/updating the album.
        setAlbumTitle('');
        setDescription('');
    };
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
            <form onSubmit={handleSubmit} className="mt-10">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-blue-800">Create an album</h3>
                        </div>
                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Album title
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <div className="max-w-lg flex rounded-md shadow-sm">

                                        <input
                                            type="text"
                                            value={albumTitle}
                                            onChange={handleAlbumTitle}
                                            name="username"
                                            placeholder='album title'
                                            autoComplete="username"
                                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Description
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                    value={description}
                    onChange={handleDescription}
                    placeholder="description"
                    rows={3}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                />
                                </div>
                            </div>
                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Upload Photos
                                </label>
                                {/*<div className="mt-1 sm:mt-0 sm:col-span-2">*/}
                                {/*    <div*/}
                                {/*        className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">*/}
                                {/*        <div className="space-y-1 text-center">*/}
                                {/*            <svg*/}
                                {/*                className="mx-auto h-12 w-12 text-gray-400"*/}
                                {/*                stroke="currentColor"*/}
                                {/*                fill="none"*/}
                                {/*                viewBox="0 0 48 48"*/}
                                {/*                aria-hidden="true"*/}
                                {/*            >*/}
                                {/*                <path*/}
                                {/*                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"*/}
                                {/*                    strokeWidth={2}*/}
                                {/*                    strokeLinecap="round"*/}
                                {/*                    strokeLinejoin="round"*/}
                                {/*                />*/}
                                {/*            </svg>*/}
                                {/*            <div className="flex text-sm text-gray-600">*/}
                                {/*                <label*/}
                                {/*                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"*/}
                                {/*                >*/}
                                {/*                    <span>Upload a Photo</span>*/}
                                {/*                    <input id="file-upload" name="file-upload" type="file"*/}
                                {/*                           className="sr-only"/>*/}
                                {/*                </label>*/}
                                {/*                <p className="pl-1">or drag and drop</p>*/}
                                {/*            </div>*/}
                                {/*            <p className="text-xs text-gray-500">PNG, JPG</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}
