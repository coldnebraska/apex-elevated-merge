import { useState } from 'react'

import ppf from '../assets/images/ppf.jpg'
import tint from '../assets/images/window_tint.jpg'
import detailing from '../assets/images/detailing.jpg'
import correction from '../assets/images/correction.jpg'

export default function Services() {
  const [active, setActive] = useState('ppf')

  return (
    <>
      <div key={1} className="service-img" style={active == 'ppf' ? {width: '40%'} : {width: '20%'}} onMouseEnter={() => setActive('ppf')}>
        <div className="blur" style={active == 'ppf' ? {filter: 'blur(0px)'} : {}}>
          <img src={ppf} />
        </div>
        <h1 className='rotate'>Paint Protection</h1>
      </div>
      <div key={2} className="service-img" style={active == 'detailing' ? {width: '40%'} : {width: '20%'}} onMouseEnter={() => setActive('detailing')}>
        <div className="blur" style={active == 'detailing' ? {filter: 'blur(0px)'} : {}}>
          <img src={detailing} />
        </div>
        <h1 className='rotate'>Detailing</h1>
      </div>
      <div key={3} className="service-img" style={active == 'correction' ? {width: '40%'} : {width: '20%'}} onMouseEnter={() => setActive('correction')}>
        <div className="blur" style={active == 'correction' ? {filter: 'blur(0px)'} : {}}>
          <img src={correction} />
        </div>
        <h1 className='rotate'>Correction</h1>
      </div>
      <div key={4} className="service-img" style={active == 'tint' ? {width: '40%'} : {width: '20%'}} onMouseEnter={() => setActive('tint')}>
        <div className="blur" style={active == 'tint' ? {filter: 'blur(0px)'} : {}}>
          <img src={tint} />
        </div>
        <h1 className='rotate'>Window Tint</h1>
      </div>
    </>
  )
}
