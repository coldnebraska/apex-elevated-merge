import { useState } from 'react'

export default function ServiceLinks() {
  const [active, setActive] = useState('')

  const top = [
    {
      id: 'window-tint',
      title: 'WINDOW TINTING',
      text: 'PROTECTION MEETS STYLE',
      img: '/assets/serviceLinkImages/range_rover.jpg',
      to: '/services#tint'
    },
    {
      id: 'paint-protection',
      title: 'PAINT PROTECTION',
      text: 'SHIELD AGAINST DAMAGE',
      img: '/assets/serviceLinkImages/porsche_gt3.jpg',
      to: '/services#ppf'
    },
    {
      id: 'ceramic-coating',
      title: 'CERAMIC COATING',
      text: 'RESTORE AND REVITALIZE',
      img: '/assets/serviceLinkImages/lamborghini_duo.jpg',
      to: '/services#coating'
    }
  ]

  const bottom = [
    {
      id: 'detailing',
      title: 'DETAILING',
      text: "REVIVE YOUR VEHICLE'S SHINE",
      img: '/assets/serviceLinkImages/lamborghini.jpg',
      to: '/services#detailing'
    },
    {
      id: 'xpel',
      title: 'XPEL',
      text: 'ADVANCED VEHICLE ARMOR',
      img: '/assets/serviceLinkImages/bmw.jpg',
      to: '/xpel'
    },
    {
      id: 'car-wash',
      title: 'CAR WASH',
      text: 'CLEANLINESS REIMAGINED',
      img: '/assets/serviceLinkImages/porsche_gts.jpg',
      to: '/services#detailing'
    }
  ]

  return (
    <div className='service-links'>
      <div className="top">
        {top.map((service) => {
          return (
            <a href={service.to} key={1} className='top-img' style={active == service.id ? {width: '50%'} : {width: '33.3%'}} onMouseEnter={() => setActive(service.id)}>
              <img src={service.img} />
              <div className="text-overlay">
                <h1>{service.title}</h1>
                <p>{service.text}</p>
              </div>
            </a>
          )
        })}
      </div>

      <div className="bottom">
        {bottom.map((service) => {
          return (
            <a href={service.to} key={1} className='bottom-img' style={active == service.id ? {width: '50%'} : {width: '33.3%'}} onMouseEnter={() => setActive(service.id)}>
              <img src={service.img} />
              <div className="text-overlay">
                <h1>{service.title}</h1>
                <p>{service.text}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
