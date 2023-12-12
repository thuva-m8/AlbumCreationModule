import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from './navbar'
import ConfigureAmplifyClientSide from "./components/ConfigureAmplifyClientSide";


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Album',
    description: '',
}
export default function Layout({children}) {
    return (
        <html className="h-full" lang="en">
        <body className={inter.className}>
        <Navbar/>
        <div className="min-w-full">
            <main className="">
                <ConfigureAmplifyClientSide/>
                {children}
            </main>
        </div>
        </body>
        </html>
    )
}