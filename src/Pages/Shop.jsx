import React from 'react'
import { Soap2, Soap1, Soap3 } from '../assets'

const Shop = () => {
    return (
        <div>
            <main style={{ backgroundImage: `url(${Soap2})` }} className='w-screen h-screen flex flex-col gap-6 items-center justify-center bg-cover bg-no-repeat text-white'>
                <h1 className='font-bold text-5xl'>Antibacterial Soaps</h1>
                <h2 className=' text-xl mb-72'>Luxurious, Handcrafted Soaps for Every Skin Type</h2>
            </main>

            <div className='px-40'>
                <p className='py-20 text-lg text-justify'>
                    We offer a wide range of pharmaceutical soaps designed for various skin types and concerns. From antibacterial and anti-fungal soaps to soaps enriched with natural oils for moisturizing and soothing properties, we have something for everyone. Our products are ideal for use in homes, hospitals, clinics, and other healthcare settings.
                </p>

                <div className='space-y-20 py-10 mb-20'>
                    <ProductSection productName={"Antibacterial Soaps 1"} productImage={Soap2} imageAlignment='right' productDesc={"Fight off harmful bacteria and keep your skin clean and safe with our antibacterial soap line. Perfect for daily hygiene, especially in environments where cleanliness is critical."} />
                    <ProductSection productName={"Antibacterial Soaps 2"} productImage={Soap3} imageAlignment='left' productDesc={"Fight off harmful bacteria and keep your skin clean and safe with our antibacterial soap line. Perfect for daily hygiene, especially in environments where cleanliness is critical."} />
                    <ProductSection productName={"Antibacterial Soaps 3"} productImage={Soap2} imageAlignment='right' productDesc={"Fight off harmful bacteria and keep your skin clean and safe with our antibacterial soap line. Perfect for daily hygiene, especially in environments where cleanliness is critical."} />
                </div>
            </div>
        </div>
    )
}

export default Shop



const ProductSection = ({ productName, productDesc, productImage, imageAlignment = "right" }) => {
    return (

        imageAlignment === "right" ?

            <div className='flex gap-40'>
                <div className='flex-1 mt-10'>
                    <h2 className='text-3xl font-bold'>{productName}</h2>
                    <p className='mt-3 text-justify text-black/50'>{productDesc}</p>
                </div>

                <div className='w-[40%]'>
                    <img src={productImage} alt={productName} className='rounded-lg' />
                </div>
            </div>
            :
            <div className='flex gap-40'>

                <div className='w-[40%]'>
                    <img src={productImage} alt={productName} className='rounded-lg' />
                </div>

                <div className='flex-1 mt-10'>
                    <h2 className='text-3xl font-bold'>{productName}</h2>
                    <p className='mt-3 text-justify text-black/50'>{productDesc}</p>
                </div>
            </div>

    )
}
