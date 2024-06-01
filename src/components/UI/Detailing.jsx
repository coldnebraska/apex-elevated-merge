import { useState } from "react"

export default function Detailing() {
    const [previousTitle, setPreviousTitle] = useState('fullInterior')

    const [currentPackage, setCurrentPackage] = useState({
        title: 'Full Interior',
        id: 'fullInterior',
        text: 'Our Full Interior Detail package ensures the inside of your vehicle is as stunning and well-protected as the exterior. We meticulously clean and treat every interior surface, resulting in a pristine and comfortable environment for every ride.',
        price: '$249',
        image: '/assets/detailingPackageImages/full_interior.png',
        info: ['Comprehensive Cleaning', 'Upholstery Treatment', 'Carpet Cleaning', 'Detailing of Nooks']
    })

    const packageList = [
        {
            title: 'Full Interior',
            id: 'fullInterior',
            text: 'Our Full Interior Detail package ensures the inside of your vehicle is as stunning and well-protected as the exterior. We meticulously clean and treat every interior surface, resulting in a pristine and comfortable environment for every ride.',
            extra: ['Our comprehensive interior detailing process involves a meticulous cleaning of every nook and cranny. We remove dirt, and stains to reveal the true beauty of your car’s interior.', 'At Apex Auto Shield, we exclusively use high-quality, eco-friendly cleaning products to ensure a deep clean without compromising the integrity of your vehicle’s interior materials.', 'For leather interiors, our specialists employ specialized treatments to clean, condition, and protect your leather surfaces, enhancing their longevity and maintaining a luxurious appearance.', 'Bring your fabric seats and upholstery back to life with our professional cleaning and restoration techniques. Say goodbye to stubborn stains and hello to a fresh, inviting interior.'],
            price: '$249',
            image: '/assets/detailingPackageImages/full_interior.png',
            info: ['Comprehensive Cleaning', 'Upholstery Treatment', 'Carpet Cleaning', 'Detailing of Nooks']
        },
        {
            title: 'Full Exterior',
            id: 'fullExterior',
            text: 'With our Full Exterior Detail package, we rejuvenate your vehicle’s exterior to give it a fresh, just-off-the-lot look. We meticulously clean, polish, and protect every surface, enhancing the overall aesthetics and longevity of your vehicle’s exterior.',
            extra: ['Our service thoroughly cleans wheels and wheel barrels, removing brake dust and grime with specialized, eco-friendly solutions, ensuring a brilliant shine and wheel longevity.', 'We provide a gentle yet effective hand wash using pH-neutral soaps, ensuring a thorough cleaning that preserves your car’s paint and enhances its appearance.', 'Achieve crystal clear visibility with our streak-free window cleaning, using professional-grade cleaners for a spotless and safe driving experience.', 'Our Tire Shine service gives your tires a deep, non-greasy black look, enhancing your vehicle’s aesthetics while protecting the tires from aging and wear.', 'Quick and efficient, our Spray Wax service offers a glossy finish and added protection to your car’s paintwork, ideal for maintaining its shine between detailed wax sessions.'],
            price: '$125',
            image: '/assets/detailingPackageImages/full_exterior.png',
            info: ['Hand Wash', 'Wheel & Tire Cleaning', 'Trim Conditioning']
        },
        {
            title: 'Headlight Restoration',
            id: 'headlight',
            text: 'Over time, your headlights can become cloudy or yellowed, reducing your visibility. Our Headlight Restoration service brings back the clarity and brightness of your headlights, enhancing both the aesthetics of your vehicle and your safety on the road.',
            price: '$99',
            image: '/assets/detailingPackageImages/headlight.png',
            info: ['Removal of Yellowing', 'Elimination of Cloudiness', 'Polishing', 'Sealing']
        },
        {
            title: 'Quick Wash',
            id: 'quickWash',
            text: 'If you’re looking for a quick and effective clean that leaves your vehicle shining, our Car Wash Service is the ideal choice. This service includes an exterior hand wash, hand dry, tire shine, and a complimentary interior vacuum.',
            extra: ['Our Quick Wash Hand Wash service efficiently yet thoroughly cleans your car’s exterior. We use high-quality soaps to gently remove dirt and grime, ensuring your vehicle looks its best without compromising on the quality of cleaning.', 'After washing, we thoroughly hand dry your vehicle to prevent water spots and streaks. This careful attention to detail leaves your car with a smooth, spotless finish, ready to hit the road in style.', 'Quick but comprehensive, our Wheel Cleaning service targets dirt, brake dust, and road grime on your wheels. We use specialized cleaning agents to restore the shine to your wheels, enhancing your car’s overall appearance.', 'Our Interior Vacuum service uses powerful and precise vacumes to quickly and effectively, remove dust, debris, and everyday accumulations from your car’s interior ensuring a cleaner, more pleasant environment inside your vehicle.'],
            price: '$75',
            image: '/assets/detailingPackageImages/quick_wash.png',
            info: ['Exterior Hand Wash', 'Hand Dry', 'Tire Shine', 'Complementary Interior Vacuum']
        }
    ]

    return (
        <div className="service-selector-tall">
            <div className="left">
                {packageList.map((packageItem) => {
                    return (
                        <h1 key={packageItem.id} style={packageItem.title == 'Full Interior' ? {color: 'var(--important-text)'} : {}} id={packageItem.id} onClick={() => {
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
                                extra: packageItem.extra,
                                info: packageItem.info
                            })
                        }}>{packageItem.title}</h1>
                    )
                })}
            </div>

            <div className="middle">
                <h1>{currentPackage.title}</h1>
                <img src={currentPackage.image} id="package-img" />
                <p>{currentPackage.text}</p>
                {currentPackage.extra ? 
                    <h6 id="highlight">Service Includes</h6>
                : <h6></h6>}
                {currentPackage.extra ? 
                    currentPackage.extra.map((extra) => {
                        return (
                            <p>{extra}</p>
                        )
                    })
                : <p></p>}
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