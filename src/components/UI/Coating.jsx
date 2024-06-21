import { useState } from "react"

export default function Coating() {
    const [previousTitle, setPreviousTitle] = useState('level1')

    const [currentPackage, setCurrentPackage] = useState({
        title: 'Level 1',
        id: 'level1',
        text: 'The Level 1 Ceramic Protection package is designed for those who want to experience the benefits of ceramic coating at an accessible price. This package delivers a clean, smooth, and protected surface with our comprehensive hand wash, clay bar treatment, and iron remover application. Finally, we apply a 1-year ceramic coating to shield your vehicle from the elements. This package is a fantastic starting point to enhance your vehicle’s shine and resistance.',
        price: '$599',
        image: '/assets/coatingPackageImages/level1.png',
        info: ['Comprehensive Hand Wash', 'Clay Bar Treatment', 'Iron Remover Application', '1-Year Ceramic Coating', 'Optional Paint Correction']
    })

    const packageList = [
        {
            title: 'Level 1 Coating',
            id: 'level1',
            text: 'The Level 1 Ceramic Protection package is designed for those who want to experience the benefits of ceramic coating at an accessible price. This package delivers a clean, smooth, and protected surface with our comprehensive hand wash, clay bar treatment, and iron remover application. Finally, we apply a 1-year ceramic coating to shield your vehicle from the elements. This package is a fantastic starting point to enhance your vehicle’s shine and resistance.',
            price: '$599',
            image: '/assets/coatingPackageImages/level1.png',
            info: ['Comprehensive Hand Wash', 'Clay Bar Treatment', 'Iron Remover Application', '1-Year Ceramic Coating', 'Optional Paint Correction']
        },
        {
            title: 'Level 2 Coating',
            id: 'level2',
            text: 'Our Level 2 package steps up the protection by including a one-step paint correction and a 4-year ceramic application. This intermediate package not only offers durable paint protection, but also corrects minor paint imperfections. The result is a flawless surface with prolonged protection.',
            price: '$1,299',
            image: '/assets/coatingPackageImages/level2.png',
            info: ['Comprehensive Hand Wash', 'Clay Bar Treatment', 'Iron Remover Application', '4-Year Ceramic Coating', 'One-Step Paint Correction']
        },
        {
            title: 'Level 3 Coating',
            id: 'level3',
            text: 'The Level 3 package is for those seeking the highest level of protection and care for their vehicle. It encompasses everything in Level 2 and extends the ceramic protection to 8 years. The advanced protection maximizes the lifespan and aesthetics of your vehicle’s paintwork, offering you peace of mind.',
            price: '$1,699',
            image: '/assets/coatingPackageImages/level3.png',
            info: ['Comprehensive Hand Wash', 'Clay Bar Treatment', 'Iron Remover Application', '8-Year Ceramic Coating', 'One-Step Paint Correction']
        }
    ]

    return (
        <div className="service-selector">
            <div className="left">
                {packageList.map((packageItem) => {
                    return (
                        <>
                            <h2 key={packageItem.id} style={packageItem.title == 'Level 1 Coating' ? {color: 'var(--important-text)'} : {}} id={packageItem.id} onClick={() => {
                                document.getElementById(packageItem.id).style.color = 'var(--important-text)'
                                setPreviousTitle(packageItem.id)
                                
                                if (previousTitle) {
                                    document.getElementById(previousTitle).style.color = 'white'
                                }
                                
                                setCurrentPackage({
                                    title: packageItem.title,
                                    id: packageItem.id,
                                    text: packageItem.text,
                                    price: packageItem.price,
                                    image: packageItem.image,
                                    info: packageItem.info
                                })
                            }}>{packageItem.title}</h2>

                            <div id="left-divider"></div>
                        </>
                    )
                })}
            </div>

            <div className="middle">
                <h1>{currentPackage.title} Ceramic Coating Package</h1>
                <img src={currentPackage.image} id="package-img" />
                <p>{currentPackage.text}</p>
            </div>

            <div className="right">
                <h1>Starting at</h1>
                <h1 id="highlight">{currentPackage.price}</h1>
                {currentPackage.info.map((info) => {
                    return (
                        <p key={info}>✔ {info}</p>
                    )
                })}
            </div>
        </div>
    )
}