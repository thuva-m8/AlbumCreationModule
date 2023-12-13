'use client'
import Link from "next/link";
import AlbumForm from '/app/albumForm'
import {generateClient} from "aws-amplify/data";
import {useRouter} from "next/navigation";

const client = generateClient()

export default function CreateAlbum() {
    const router = useRouter()

    const createAlbum = async (newAlbum) => {
        const {errors, data: album} = await client.models.Album.create(newAlbum)
        router.push('/album')
    }

    return (
        <div>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 mt-10'>
                <Link href="/album">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                    </svg>
                </Link>
            </div>
            <AlbumForm onSubmit={createAlbum}/>
        </div>

    )
}
