'use client'
import AlbumForm from '/app/albumForm'
import Link from "next/link";
import {useParams} from "next/navigation";


export default function edit() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams();
    return (
        <div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10">
                <Link href={`/album/gallery/${params.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                    </svg>
                </Link>
            </div>
            <AlbumForm/>
        </div>
    )
}