import React from 'react'

const cardFlipRules = () => {
    return (
        <div className='w-full h-full flex place-content-center'>
            <div className='w-60 bg-transparent cursor-pointer group rounded-2xl perspective-1000'>
                <div className='flex relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180 transform-style-preserve-3d'>
                    <div className='w-full h-full absolute rounded-2xl overflow-hidden p-3 border border-[#c68c4b] bg-[rgba(0,0,0,0.4)]'>
                        <h3 className='text-3xl text-center'>Rules</h3>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, suscipit?</p>
                    </div>
                    <div className='w-full h-full absolute rounded-2xl rotate-y-180 overflow-hidden bg-[#97c100] space-y-5 p-3 bg-opacity-95 backface-hidden  border border-[#c68c4b]'>
                        <h3 className='text-3xl text-center'>Brief List of Rules</h3>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, suscipit?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardFlipRules