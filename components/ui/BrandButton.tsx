import Link from 'next/link'
import React from 'react'
type BrandButtonType = {
    location: string,
    button: string,

}
const BrandButton = ({ location, button }: BrandButtonType) => {
    return (
        <div className={`flex w-full justify-${location}`}>
            <div className={`border-5 rounded-full border-r border-t border-black bg-brandYellow px-5 lg:px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out`}>
                <Link href="/contact" className='text-lg lg:text-xl font-bold'>{button}</Link>
            </div>
        </div>
    )
}

export default BrandButton
