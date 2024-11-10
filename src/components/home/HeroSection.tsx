import heroImage from '@/../public/assets/home/desktop/image-hero.jpg'
import Image from 'next/image'

import '@/app/globals.css'

export default function HeroSection() {
    return(
        <>
        <div className="bg-[#191919] w-full h-auto mb-10 relative z-40">
            <div className="animate-fade-in animate-duration-[1000]
            bg-[url('../components/home/image-header.jpg')]
            h-[620px] bg-y-[-180px] bg-center bg-cover bg-no-repeat
            tab:bg-contain
            tab:bg-[url('../components/home/image-header-tablet.jpg')]
            desk:bg-[url('../components/home/image-hero.jpg')]
            desk:h-[620px] desk:bg-no-repeat desk:bg-[length:1350px_auto] desk:bg-bottom
            max-w-[1400px] m-auto flex items-center 
            justify-center tab:justify-start">

                <div className='text-white desk:w-1/3 px-4 desk:px-0 desk:pl-16 flex flex-col gap-4 desk:items-start desk:text-left items-center text-center'>
                    <p className='font-bold text-gray-400 uppercase tracking-[8px]'>New Product</p>
                    <h1 className='font-bold text-[50px] leading-[60px]'>XX99 MARK II HEADPHONES</h1>
                    <p className='text-gray-400 desk:pr-20'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className='bg-[#D87D4A] btnhover w-1/2 desk:w-1/2 py-3 px-5 mt-4 text-white font-bold  truncate' >SEE PRODUCT</button>    
                </div>
                
                
            </div>
        </div>
        </>
    )
}