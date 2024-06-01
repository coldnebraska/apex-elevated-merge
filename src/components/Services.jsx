import { useState } from 'react'

export default function Services() {
  const [active, setActive] = useState('ppf')

  return (
    <div className='services-display'>
      <div key={1} className="service-img" style={active == 'ppf' ? {width: '40%'} : {width: '20%'}} onMouseEnter={() => setActive('ppf')}>
        <a href='/services#ppf'>
          <div className="blur" style={active == 'ppf' ? {filter: 'blur(0px)'} : {}}>
            <img src='/assets/servicesImages/ppf.jpg' />
          </div>
          <h1 className='rotate'>Paint Protection</h1>
        </a>
      </div>

      <div key={2} className="service-img" style={active == 'detailing' ? {width: '40%'} : {width: '20%'}} onMouseEnter={() => setActive('detailing')}>
        <a href='/services#detailing'>
          <div className="blur" style={active == 'detailing' ? {filter: 'blur(0px)'} : {}}>
            <img src='/assets/servicesImages/detailing.jpg' />
          </div>
          <h1 className='rotate'>Detailing</h1>
        </a>
      </div>

      <div key={3} className="service-img" style={active == 'correction' ? {width: '40%'} : {width: '20%'}} onMouseEnter={() => setActive('correction')}>
        <a href='/services#coating'>
          <div className="blur" style={active == 'correction' ? {filter: 'blur(0px)'} : {}}>
            <img src='/assets/servicesImages/correction.jpg' />
          </div>
          <h1 className='rotate'>Correction</h1>
        </a>
      </div>

      <div key={4} className="service-img" style={active == 'tint' ? {width: '40%'} : {width: '20%'}} onMouseEnter={() => setActive('tint')}>
        <a href='/services#tint'>
          <div className="blur" style={active == 'tint' ? {filter: 'blur(0px)'} : {}}>
            <img src='/assets/servicesImages/window_tint.jpg' />
          </div>
          <h1 className='rotate'>Window Tint</h1>
        </a>
      </div>
    </div>
  )
}
