'use client'
import Link from "next/link";
import AlbumForm from '/app/albumForm'

export default function Example() {
    return (
        <div>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 mt-20'>
                <Link href="/album">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                    </svg>
                </Link>
            </div>
            <AlbumForm/>
        </div>

    )
}
