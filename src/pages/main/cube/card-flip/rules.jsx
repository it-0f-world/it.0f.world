import React from 'react'
import { RiCodeSSlashFill } from "react-icons/ri";

const cardFlipRules = () => {
    return (
        <div className='w-full h-full flex place-content-center'>
            <div className='w-60 bg-transparent cursor-pointer group rounded-2xl perspective-1000'>
                <div className='flex relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180 transform-style-preserve-3d'>
                    <div className='w-full h-full absolute rounded-2xl overflow-hidden p-3 border border-[#c68c4b] bg-[rgba(0,0,0,0.4)]'>
                        <div className="relative flex items-center">
                            <RiCodeSSlashFill className="flex-shrink-0 text-3xl" />
                            <h3 className="text-3xl absolute left-1/2 transform -translate-x-1/2">Rules</h3>
                        </div>
                        <p className='pt-2 text-justify text-[12px]'>We develop our software only for latest versions of web-browsers and operating systems at the time of development.</p>
                    </div>
                    <div className='w-full h-full absolute rounded-2xl rotate-y-180 overflow-hidden bg-[#97c100] space-y-5 p-3 bg-opacity-95 backface-hidden  border border-[#c68c4b]'>
                        <h3 className='text-3xl text-center'>List of Rules</h3>
                        <p className='pt-2 text-justify text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, suscipit?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardFlipRules