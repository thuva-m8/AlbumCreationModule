import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from './navbar'
import ConfigureAmplifyClientSite from "./components/configureAmplifyClientSite";


const inter = Inter({subsets: ['latin']})

export default function Layout({children}) {
    return (
        <html className="h-full" lang="en">
        <body className={inter.className}>
        <Navbar/>
        <div className="min-w-full">
            <ConfigureAmplifyClientSite/>
            <main className="">{children}</main>
        </div>
        </body>
        </html>
    )
}