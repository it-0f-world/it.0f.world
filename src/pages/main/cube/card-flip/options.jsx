import React from 'react'
import { RiSettingsLine } from "react-icons/ri";

const cardFlipOptions = () => {
    return (
        <div className='w-full h-full flex place-content-center'>
            <div className='w-60 bg-transparent cursor-pointer group rounded-2xl perspective-1000'>
                <div className='flex relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180 transform-style-preserve-3d'>
                    <div className='w-full h-full absolute rounded-2xl overflow-hidden p-3 border border-[#98c379] bg-[rgba(0,0,0,0.4)]'>
                        <div className="relative flex items-center">
                            <RiSettingsLine className="flex-shrink-0 text-3xl" />
                            <h3 className="text-3xl absolute left-1/2 transform -translate-x-1/2">Options</h3>
                        </div>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, suscipit?</p>
                    </div>
                    <div className='w-full h-full absolute rounded-2xl rotate-y-180 overflow-hidden bg-[#e08600] space-y-5 p-3 bg-opacity-95 backface-hidden  border border-[#98c379]'>
                        <h3 className='text-3xl text-center'>Semantic Access</h3>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, suscipit?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardFlipOptions