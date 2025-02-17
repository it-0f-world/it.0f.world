import React from 'react'
import style from './cube.module.css'
import CardFlip from './cardFlip'

function crossPlatformApplications() {
  return (
    <div className='flex flex-col grow'>
      <div className={style.slogan}>
        <h2 className={style.header}>Cross-platform applications development.</h2>
        <p>Web-sites, desktop, mobile. For all most useful operating systems - Linux, Windows, Android, IOS, HarmonyOS.</p>
      </div>
      <div className='flex grow pt-4'>
        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur modi reiciendis quae autem architecto maiores ea maxime debitis. Aperiam dolor, mollitia officiis ea laborum, est consequuntur illo quasi tempore enim magni! Aperiam, neque.</p>
        <div className={style.cards}>
          <CardFlip />
        </div>
      </div>
    </div>
  )
}

export default crossPlatformApplications