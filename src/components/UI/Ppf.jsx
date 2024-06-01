import { useState } from "react"

export default function Ppf() {
    const [previousTitle, setPreviousTitle] = useState('frontBumper')

    const [currentPackage, setCurrentPackage] = useState({
        title: 'Front Bumper',
        id: 'frontBumper',
        text: 'Our Bumper Only PPF package focuses solely on safeguarding your vehicle’s front bumper. Using XPEL’s superior paint protection film, we make sure the front line of your vehicle’s defense against chips, scratches, and abrasions remains intact. This is an ideal choice for those seeking a cost-effective solution to protect the most vulnerable area of the car from road damage.',
        price: '$599',
        image: '/assets/tintPackageImages/sunstrip.jpg',
        info: ['Full Front Bumper', 'Purposed Protection', 'Helps Prevent Rock Chips']
    })

    const packageList = [
        {
            title: 'Front Bumper',
            id: 'frontBumper',
            text: 'Our Bumper Only PPF package focuses solely on safeguarding your vehicle’s front bumper. Using XPEL’s superior paint protection film, we make sure the front line of your vehicle’s defense against chips, scratches, and abrasions remains intact. This is an ideal choice for those seeking a cost-effective solution to protect the most vulnerable area of the car from road damage.',
            price: '$599',
            image: '/assets/tintPackageImages/sunstrip.jpg',
            info: ['Full Front Bumper', 'Purposed Protection', 'Helps Prevent Rock Chips']
        },
        {
            title: 'Basic',
            id: 'basic',
            text: 'The Basic Protection package aims at providing a shield to the most exposed parts of your vehicle. We apply XPEL PPF to the hood, mirrors, front bumper, and headlights/fog lights, ensuring these crucial areas remain as good as new for longer. The package offers a balance of protection and cost, providing comprehensive front-facing defense without covering the entire vehicle.',
            price: '$1,699',
            image: '/assets/tintPackageImages/front.jpg',
            info: ['Full Front Bumper', 'Full Hood', 'Headlights / Fog Lights', 'Mirror Caps']
        },
        {
            title: 'Full Front',
            id: 'fullFront',
            text: 'The Full Front Protection package offers an all-encompassing shield for your vehicle’s front end. By covering the hood, mirrors, fenders, front bumper, and headlights/fog lights with top-tier XPEL PPF, we safeguard your vehicle against potential damage from environmental elements and road debris. This package is perfect for those who prioritize comprehensive protection for all front-facing components of their vehicle.',
            price: '$1,999',
            image: '/assets/tintPackageImages/side.jpg',
            info: ['Full Front Bumper', 'Full Hood', 'Full Front Fenders', 'Headlights / Fog Lights', 'Mirror Caps']
        },
        {
            title: 'Track',
            id: 'track',
            text: 'Our Track Pack or Off-Road Protection package is designed for vehicles regularly exposed to aggressive driving conditions. This package covers the hood, mirrors, fenders, front bumper, headlights/fog lights, A-pillars and rocker panels with XPEL’s reliable PPF. It’s a great option for those who need extra protection from the harsh conditions of the track or off-road environments.',
            price: '$2,699',
            image: '/assets/tintPackageImages/deluxe.jpg',
            info: ['Full Front Bumper', 'Full Hood', 'Full Front Fenders & A-Pillars', 'Headlights / Fog Lights', 'Mirror Caps', 'Rocker Panels']
        },
        {
            title: 'Ultimate',
            id: 'ultimate',
            text: 'For those seeking total protection, our Ultimate Protection package is the perfect choice. We meticulously apply XPEL’s premium PPF to every exterior inch of your vehicle. This package provides the ultimate peace of mind, knowing that your vehicle is fully shielded from everyday environmental and road hazards.',
            price: '$5,499',
            image: '/assets/tintPackageImages/windshield.jpg',
            info: ['All Painted Exterior Surfaces', 'Headlights / Tail Lights', 'Fog Lights', 'Mirror Caps']
        },
        {
            title: 'Stealth',
            id: 'stealth',
            text: 'The Stealth Ultimate Protection Package mirrors the coverage of the Ultimate Protection Package but uses XPEL’s Stealth PPF. This unique film not only offers excellent protective qualities but also provides your car with a satin finish for that sleek, stealthy look. Perfect solution for protecting matte paint.',
            price: '$6,499',
            image: '/assets/tintPackageImages/windshield.jpg',
            info: ['XPEL Stealth Film', 'All Painted Exterior Surfaces', 'Headlights / Fog Lights (Ultimate Film)', 'Mirror Caps']
        },
        {
            title: 'Color Change',
            id: 'colorChange',
            text: 'The STEK Fashion Paint Protection Film package combines protective capabilities with personalized styling. With this package, you can customize your vehicle’s appearance with a range of color or accent options while ensuring robust protection with STEK’s high-quality PPF.',
            price: '$6,499',
            image: '/assets/tintPackageImages/windshield.jpg',
            info: ['Customizable Color / Accent', 'High Quality Durable STEK Fashion', 'Express Your Individuality', 'Contact Us For Pricing & Options']
        }
    ]

    return (
        <div className="service-selector">
            <div className="left">
                {packageList.map((packageItem) => {
                    return (
                        <h1 key={packageItem.id} style={packageItem.title == 'Front Bumper' ? {color: 'var(--important-text)'} : {}} id={packageItem.id} onClick={() => {
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
                                image: '/assets/tintPackageImages/sunstrip.jpg',
                                info: packageItem.info
                            })
                        }}>{packageItem.title}</h1>
                    )
                })}
            </div>

            <div className="middle">
                <h1>{currentPackage.title} Package</h1>
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