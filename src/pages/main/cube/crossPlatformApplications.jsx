import React from 'react'
import CardFlipReact from './card-flip/react'
import CardFlipOptions from './card-flip/options'
import CardFlipRules from './card-flip/rules'
import { MdDevices, MdSpeed } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { TbResize } from "react-icons/tb";
import { VscGitPullRequestCreate } from "react-icons/vsc";

function crossPlatformApplications() {
  return (
    <div className='flex flex-col grow'>
      <div className=''>
        <h2 className='flex text-2xl gap-2'><MdDevices className='text-3xl' />Cross-platform applications development.</h2>
        <p className=' font-rubik'>Web-sites, desktop computers, mobile phones. Linux (Debian & Arch distributives), Windows, macOS, Android, IOS, HarmonyOS.</p>
      </div>
      <div className='flex grow py-4'>
        <div className='pr-4'>
          <p className='text-justify text-[14px]'>All devices compatible code has become a cornerstone of modern software engineering, allowing developers to create applications that run seamlessly across multiple operating systems (OS) and devices. React Core, which includes React Native  for mobile, React DOM  for web and ElectronJS for desktop development provides a powerful framework for building applications that can be deployed on any platform.</p>
          <ul className='ml-1 py-2'>
            <li className='flex'><IoIosPricetag className='mr-[6px] mt-1'/>Cost Efficiency.</li>
            <li className='flex'><MdSpeed  className='mr-[6px] mt-1'/>Performance Optimization.</li>
            <li className='flex'><TbResize  className='mr-[6px] mt-1'/>Scalability.</li>
            <li className='flex'><VscGitPullRequestCreate  className='mr-[6px] mt-1'/>Unified Developer Experience.</li>
          </ul>
          <p className='text-justify text-[14px]'>One of the primary advantages of React Core is its emphasis on code reusability. By leveraging React's component-based architecture, developers can write a single codebase that works across different platforms with minimal adjustments.</p>
          <p className='text-justify text-[14px]'>React has a massive developer community, leading to a wide range of libraries, tools, and third-party integrations that enhance development speed and functionality across platforms.</p>
          <p className='text-justify text-[14px]'>Our applications can easily integrate with RESTful APIs, GraphQL, Firebase, and various backend services, ensuring smooth data flow and cross-platform synchronization.</p>
        </div>
        <div className='flex gap-2'>
          <CardFlipReact />
          <CardFlipOptions />
          <CardFlipRules />
        </div>
      </div>
      <p className='text-justify'>By leveraging React Core, we can create consistent and performant applications ensuring a superior user experience on any device.</p>
    </div>
  )
}

export default crossPlatformApplications