import { useState } from 'react'

import rangeRover from '../assets/serviceLinkImages/range_rover.jpg'
import porsche from '../assets/serviceLinkImages/porsche_gt3.jpg'
import lamboDuo from '../assets/serviceLinkImages/lamborghini_duo.jpg'
import lamboSingle from '../assets/serviceLinkImages/lamborghini.jpg'
import bmw from '../assets/serviceLinkImages/bmw.jpg'
import blackPorsche from '../assets/serviceLinkImages/porsche_gts.jpg'

export default function ServiceLinks() {
  const [active, setActive] = useState('')

  const top = [
    {
      id: 'window-tint',
      title: 'WINDOW TINTING',
      text: 'PROTECTION MEETS STYLE',
      img: rangeRover
    },
    {
      id: 'paint-protection',
      title: 'PAINT PROTECTION',
      text: 'SHIELD AGAINST DAMAGE',
      img: porsche
    },
    {
      id: 'ceramic-coating',
      title: 'CERAMIC COATING',
      text: 'RESTORE AND REVITALIZE',
      img: lamboDuo
    }
  ]

  const bottom = [
    {
      id: 'detailing',
      title: 'DETAILING',
      text: "REVIVE YOUR VEHICLE'S SHINE",
      img: lamboSingle
    },
    {
      id: 'xpel',
      title: 'XPEL',
      text: 'ADVANCED VEHICLE ARMOR',
      img: bmw
    },
    {
      id: 'car-wash',
      title: 'CAR WASH',
      text: 'CLEANLINESS REIMAGINED',
      img: blackPorsche
    }
  ]

  return (
    <div className='service-links'>
      <div className="top">
        {top.map((service) => {
          return (
            <div key={1} className='top-img' style={active == service.id ? {width: '50%'} : {width: '33.3%'}} onMouseEnter={() => setActive(service.id)}>
              <img src={service.img} />
              <div className="text-overlay">
                <h1>{service.title}</h1>
                <p>{service.text}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bottom">
        {bottom.map((service) => {
          return (
            <div key={1} className='bottom-img' style={active == service.id ? {width: '50%'} : {width: '33.3%'}} onMouseEnter={() => setActive(service.id)}>
              <img src={service.img} />
              <div className="text-overlay">
                <h1>{service.title}</h1>
                <p>{service.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
