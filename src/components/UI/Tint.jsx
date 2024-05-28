import { useState } from "react"

import sunstrip from '../../assets/tintPackageImages/sunstrip.jpg'
import front from '../../assets/tintPackageImages/front.jpg'
import side from '../../assets/tintPackageImages/side.jpg'
import deluxe from '../../assets/tintPackageImages/deluxe.jpg'
import windshield from '../../assets/tintPackageImages/windshield.jpg'

export default function Tint() {
    const packageTitles = ['Sunstrip', 'Front Two', 'Standard', 'Deluxe', 'Windshield']
    const [currentTitle, setCurrentTitle] = useState('Sunstrip')
    const [previousTitle, setPreviousTitle] = useState('Sunstrip')

    let currentPackage = {
        title: 'Sunstrip',
        text: 'Our Sunstrip package provides an elegant, stylish look to your vehicle while improving visibility by reducing sun glare. Expertly installed on the top of the windshield of the car, the XPEL window film adds a subtle yet sleek appearance, all the while delivering an improved driving experience.',
        price: '$79',
        image: sunstrip,
        info: ['Greatly reduce sun glare', 'Ceramic tint', 'Top windshield application', 'Excellent heat rejection', 'Provides sleek aesthetic']
    }

    switch (currentTitle) {
        case 'Sunstrip':
            currentPackage = {
                title: 'Sunstrip',
                text: 'Our Sunstrip package provides an elegant, stylish look to your vehicle while improving visibility by reducing sun glare. Expertly installed on the top of the windshield of the car, the XPEL window film adds a subtle yet sleek appearance, all the while delivering an improved driving experience.',
                price: '$79',
                image: sunstrip,
                info: ['Greatly reduce sun glare', 'Ceramic tint', 'Top windshield application', 'Excellent heat rejection', 'Provides sleek aesthetic']
            }
            break;

        case 'Front Two':
            currentPackage = {
                title: 'Front Two',
                text: 'Enhance your vehicle’s style, privacy, and comfort with our Two Front Windows Package. This package includes the professional application of high-quality ceramic tint to the front side windows of your vehicle. The ceramic tint offers superior heat rejection, reduces glare, and blocks harmful UV rays, providing a cooler and more enjoyable driving experience. With increased privacy and a sleek appearance, your vehicle will stand out while you enjoy the benefits of improved comfort and protection from the sun’s harmful rays.',
                price: '$149',
                image: front,
                info: ['Helps reduce sun glare', 'Ceramic tint', 'High quality film', 'Excellent heat rejection', 'Increased privacy and comfort']
            }
            break;

        case 'Standard':
            currentPackage = {
                title: 'Standard',
                text: 'Achieve comprehensive window tinting for your vehicle with our All Around Standard Package. This package includes the professional application of ceramic tint to all side windows, excluding the front windshield and roof. The ceramic tint offers exceptional heat rejection (94%) to keep the interior cooler, reduces glare for improved visibility, and provides privacy for you and your passengers. With its ability to block harmful UV rays, this tint also helps protect your vehicle’s interior from fading and damage caused by sun exposure.',
                price: '$399',
                image: side,
                info: ['Helps reduce sun glare', 'Ceramic tint', 'All 4 side windows', '94% heat rejection', 'Protects interior from fades & cracks', 'Increased privacy and comfort']
            }
            break;

        case 'Deluxe':
            currentPackage = {
                title: 'Deluxe',
                text: 'Experience the ultimate in window tinting with our All Around Deluxe Package. This package offers the same comprehensive coverage as the Standard Package, and includes the front windshield. The ceramic tint used in this package provides maximum privacy, reduced glare, and superior heat rejection, ensuring the utmost comfort and style for you and your passengers. With its exceptional ability to block harmful UV rays, this tint also protects your vehicle’s interior from sun damage, keeping it in pristine condition.',
                price: '$799',
                image: deluxe,
                info: ['Helps reduce sun glare', 'Ceramic tint', 'All 4 side windows', '98% heat rejection', 'Preserve the longevity of your interior', 'Increased privacy and comfort']
            }
            break;

        case 'Windshield':
            currentPackage = {
                title: 'Windshield',
                text: 'Protect yourself from harmful UV rays and reduce heat buildup with our Front Windshield Package. This package includes the professional application of ceramic tint to the front windshield of your vehicle. Our ceramic tint is available in a range of shades, including 5%, 15%, 20%, 30%, 50%, and 70%, allowing you to select the desired tint shade that meets your requirements. With reduced glare, improved visibility, and increased privacy, this package enhances your driving experience while protecting you from the sun’s harmful rays.',
                price: '$399',
                image: windshield,
                info: ['Helps reduce sun glare', 'Ceramic tint', 'Front windshield', 'Superior heat rejection', 'Protects dashboard from fades/cracks', 'Increased privacy']
            }
            break;
    }

    window.onload = function() {
        document.getElementById('Sunstrip').style.color = 'var(--important-text)'
    }

    return (
        <div className="service-selector">
            <div className="left">
                {packageTitles.map((title) => {
                    return (
                        <h1 key={title} id={title} onClick={() => {
                            document.getElementById(title).style.color = 'var(--important-text)'
                            setPreviousTitle(title)

                            if (previousTitle) {
                                document.getElementById(previousTitle).style.color = 'white'
                            }
                            setCurrentTitle(title)
                        }}>{title}</h1>
                    )
                })}
            </div>

            <div className="middle">
                <h1>{currentPackage.title} Package</h1>
                <img src={currentPackage.image} id="package-img" />
                <p>{currentPackage.text}</p>
            </div>

            <div className="right box">
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