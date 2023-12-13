'use client'
import AlbumForm from '/app/albumForm'
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";
import {generateClient} from "aws-amplify/data";

const client = generateClient()
export default function edit() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const updateAnAlbum = async (newAlbum) => {
        newAlbum.id = params.id
        const {errors, data: album} = await client.models.Album.update(newAlbum)
        router.push(`/album/gallery/${params.id}`)

    }

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
            <AlbumForm onSubmit={updateAnAlbum}/>
        </div>
    )
}