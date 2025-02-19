import React from 'react';
import { RiReactjsLine } from "react-icons/ri";

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
                        <div className="relative flex items-center py-1">
                            <RiReactjsLine className="flex-shrink-0 text-3xl" />
                            <h3 className="text-3xl absolute left-1/2 transform -translate-x-1/2">Core</h3>
                        </div>
                        <p className='pt-2 text-justify text-[12px]'>Whether you're building a simple utility app or a complex enterprise solution, React provides the flexibility needed to grow your application over time. Features like modular architecture, componentization, and state management ensure that your application remains maintainable and extensible.</p>
                        <p className='pt-1 text-justify text-[12px]'>React Native compiles to native code, ensuring high performance similar to native Swift (iOS) and Kotlin (Android) applications. It uses a bridge to interact with native components, giving it a smooth and responsive feel.</p>
                        <p className='pt-1 text-justify text-[12px]'>We build with React.js Progressive Web Apps (PWAs), which provide app-like experiences on any device without requiring installation from an app store.</p>
                    </div>
                    {/* Back side */}
                    <div
                        className="w-full h-full absolute rounded-2xl overflow-hidden p-3 border border-[#4fafe3] bg-[#6b00dd] bg-opacity-95 backface-hidden"
                        style={{ transform: 'rotateY(180deg)' }}
                    >
                        <h3 className="text-3xl text-center">React</h3>
                        <ul>
                            <li className="pt-2 text-justify text-[12px]"><span className='font-bold'>ReactJS Document Object Model</span> enables the same logic and components to be reused for web applications, ensuring consistency in user experience across platforms.</li>
                            <li className="pt-1 text-justify text-[12px]"><span className='font-bold'>React Native </span>allows developers to share up to 90% of their code between iOS and Android.</li>
                            <li className="pt-1 text-justify text-[12px]"><span className='font-bold'>ElectronJS </span>embeds Chromium and Node.js to enable web developers to create desktop applications.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFlipReact;