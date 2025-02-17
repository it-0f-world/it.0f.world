import React from 'react'
import style from './cube.module.css'
import CardFlipReact from './card-flip/react'
import CardFlipOptions from './card-flip/options'
import CardFlipRules from './card-flip/rules'

function crossPlatformApplications() {
  return (
    <div className='flex flex-col grow'>
      <div className={style.slogan}>
        <h2 className={style.header}>Cross-platform applications development.</h2>
        <p>Web-sites, desktop, mobile. For all most useful operating systems - Linux, Windows, Android, IOS, HarmonyOS.</p>
      </div>
      <div className='flex grow py-4'>
        <div className='pr-4'>
          <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur modi reiciendis quae autem architecto maiores ea maxime debitis. Aperiam dolor, mollitia officiis ea laborum, est consequuntur illo quasi tempore enim magni! Aperiam, neque.</p>
          <ul className='ml-4 py-2'>
            <li className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          <p className='text-justify'>Ab quia quisquam, nostrum sunt laboriosam qui possimus. Tempore repudiandae nihil blanditiis maxime corporis quibusdam.</p>
        </div>
        <div className='flex gap-2'>
          <CardFlipReact />
          <CardFlipOptions />
          <CardFlipRules />
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam omnis, eligendi fuga unde vel praesentium?</p>
    </div>
  )
}

export default crossPlatformApplications