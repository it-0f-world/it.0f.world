import React from 'react';

const CardFlipReact = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            {/* Outer container with perspective */}
            <div className="w-60 h-full bg-transparent cursor-pointer group rounded-2xl perspective-1000"
                style={{ perspective: '1000px' }}
            >
                {/* Card wrapper with 3D transform */}
                <div
                    className="w-full h-full duration-500 transform transition-transform group-hover:rotate-y-180"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Front side */}
                    <div
                        className="w-full h-full absolute rounded-2xl overflow-hidden p-3 border border-[#4fafe3] bg-[rgba(0,0,0,0.4)] backface-hidden"
                        style={{ transform: 'rotateY(0deg)' }}
                    >
                        <h3 className="text-3xl text-center">Core</h3>
                        <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, suscipit?</p>
                    </div>
                    {/* Back side */}
                    <div
                        className="w-full h-full absolute rounded-2xl overflow-hidden p-3 border border-[#4fafe3] bg-[#6b00dd] bg-opacity-95 backface-hidden"
                        style={{ transform: 'rotateY(180deg)' }}
                    >
                        <h3 className="text-3xl text-center">React</h3>
                        <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, suscipit?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFlipReact;