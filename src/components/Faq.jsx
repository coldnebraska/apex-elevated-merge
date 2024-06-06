import { useState } from "react"

export default function Faq({ section }) {
    switch (section) {
        case 'tint':
            const tintList = [
                {
                    id: 0,
                    title: 'Increased Privacy',
                    text: 'In today’s world, privacy is a valued commodity. Window tinting acts as a barrier, obscuring the view into your vehicle’s interior from the outside. This added layer of privacy can help deter potential thieves who may be tempted by visible belongings inside your car. Furthermore, it provides a more discreet, personal space for occupants, making every journey more comfortable and secure.'
                },
                {
                    id: 1,
                    title: 'UV Protection',
                    text: 'The Texas sun’s ultraviolet rays are not only harmful to our skin but can also damage the interior of your vehicle over time, causing upholstery to fade and crack. High-quality window tinting can block up to 99% of these harmful rays, acting as a protective shield for both your vehicle’s interior and the occupants inside. By protecting your car from UV damage, window tinting can also help maintain the value of your vehicle.'
                },
                {
                    id: 2,
                    title: 'Improved Comfort',
                    text: 'Texas can have some of the hottest summer days, and there’s nothing worse than stepping into an overheated car. Window tints can dramatically reduce the heat inside your vehicle by blocking a significant portion of the sun’s heat energy. This leads to a more comfortable ride, less reliance on air conditioning, and improved fuel efficiency.'
                },
                {
                    id: 3,
                    title: 'Glare Reduction',
                    text: 'Driving with the sun or bright headlights causing a glare can be both irritating and dangerous. Window tinting helps mitigate this issue by reducing the harsh glare that can cause eye strain during driving. Whether it’s the bright Austin sun or an approaching vehicle’s headlights at night, tinted windows can provide a safer, more comfortable driving experience.'
                },
                {
                    id: 4,
                    title: 'Enhanced Aesthetics',
                    text: 'Beyond the practical benefits, window tinting adds a touch of elegance and sophistication to your vehicle. It enhances the exterior look of your car, giving it a sleek, stylish appeal. Whether you prefer a subtle enhancement or a standout transformation, window tinting can provide that desired aesthetic upgrade, making your vehicle a reflection of your personal style.'
                },
            ]
            const [toggleTint, setToggleTint] = useState({
                0: true
            })

            function toggleTintFunction(id) {
                setToggleTint({
                    ...toggleTint,
                    [id]: !toggleTint[id]
                })
            }

            return (
                <div className="box">
                    {tintList.map((item) => {
                        return (
                            <div className="expandable">
                                <h6 id='highlight' onClick={() => {
                                    toggleTintFunction(item.id)
                                }}>
                                {toggleTint[item.id] ? <span id='expand-marker'>-</span> : <span id='expand-marker'>+</span>} {item.title}
                                </h6>
                                {toggleTint[item.id] ? <p>{item.text}</p> : <></>}
                            </div>
                        )
                    })}
                </div>
            )
        case 'ppf':
            const ppfList = [
                {
                    id: 0,
                    title: 'What is Paint Protection Film? (PPF)',
                    text: 'Paint Protection Film, often referred to as PPF, is a thin layer of thermoplastic urethane applied to your vehicle’s exterior to protect the paint from scratches, chips, and other damage from environmental factors and road debris.'
                },
                {
                    id: 1,
                    title: 'Why should I consider getting PPF for my vehicle?',
                    text: 'PPF provides a highly effective defense against a range of potential damage, including rock chips, minor scratches, UV exposure, and bird droppings. It helps maintain the aesthetics of your car, prolongs the lifespan of your paintwork, and can enhance your vehicle’s resale value.'
                },
                {
                    id: 2,
                    title: 'What is the difference between XPEL and STEK PPF?',
                    text: 'XPEL is an industry-leading PPF manufacturer known for their high-quality products. XPEL PPF is renowned for its self-healing properties and clarity, while STEK offers both clear and fashion films, allowing for color and texture customization.'
                },
                {
                    id: 3,
                    title: 'How long does PPF last?',
                    text: 'With proper care and maintenance, high-quality PPF like XPEL can last between five to ten years. The lifespan of PPF can vary based on factors such as the quality of the installation, exposure to harsh weather conditions, and how frequently the vehicle is cleaned and maintained.'
                },
                {
                    id: 4,
                    title: 'How do I care for my vehicle once the PPF is applied?',
                    text: 'PPF care is straight forward. You can wash and wax your car as you normally would. However, it’s recommended to wait a week after the PPF application before washing your vehicle. Always use non-abrasive cloths and cleaning products to avoid scratching the film.'
                },
                {
                    id: 5,
                    title: 'Does PPF require professional installation?',
                    text: 'Yes, PPF installation should be done by trained professionals for optimal results. The process requires experience and precision to ensure the film is applied correctly and seamlessly.'
                },
                {
                    id: 6,
                    title: 'How much does PPF cost?',
                    text: 'The cost of PPF depends on several factors, including the coverage area, the type of film used, and the specific make and model of your vehicle. At Apex Auto Shield, we offer a variety of packages to suit different needs and budgets. Please refer to our package descriptions for starting prices, or contact us for a custom quote.'
                },
            ]
            const [togglePpf, setTogglePpf] = useState({
                0: true
            })

            function togglePpfFunction(id) {
                setTogglePpf({
                    ...togglePpf,
                    [id]: !togglePpf[id]
                })
            }

            return (
                <div className="box">
                    {ppfList.map((item) => {
                        return (
                            <div className="expandable">
                                <h6 id='highlight' onClick={() => {
                                    togglePpfFunction(item.id)
                                }}>
                                {togglePpf[item.id] ? <span id='expand-marker'>-</span> : <span id='expand-marker'>+</span>} {item.title}
                                </h6>
                                {togglePpf[item.id] ? <p>{item.text}</p> : <></>}
                            </div>
                        )
                    })}
                </div>
            )
        case 'coating':
            const coatingList = [
                {
                    id: 0,
                    title: 'What is Ceramic Coating?',
                    text: 'Ceramic coating is a liquid polymer that bonds with your vehicle’s paintwork to provide a long-lasting layer of protection. It shields your car against UV damage, chemical stains, and light scratches, and has hydrophobic properties that make cleaning easier and enhance the shine of your vehicle.'
                },
                {
                    id: 1,
                    title: 'How long does Ceramic Coating last?',
                    text: 'Paint correction involves the process of restoring and rejuvenating the paintwork of a vehicle. This involves the elimination of surface imperfections such as swirl marks, fine scratches, bird droppings, and oxidation.'
                },
                {
                    id: 2,
                    title: 'What is Paint Correction?',
                    text: 'XPEL is an industry-leading PPF manufacturer known for their high-quality products. XPEL PPF is renowned for its self-healing properties and clarity, while STEK offers both clear and fashion films, allowing for color and texture customization.'
                },
                {
                    id: 3,
                    title: 'Does my vehicle need paint correction before ceramic coating?',
                    text: 'It is recommended, but not always necessary. Any surface imperfections that exist on your vehicle’s paint will be locked under the ceramic coating and may be more noticeable. Paint correction ensures the paintwork is in the best possible condition before the coating is applied.'
                },
                {
                    id: 4,
                    title: 'Can I wash my car after ceramic coating?',
                    text: 'Yes, you can wash your vehicle after applying ceramic coating. However, it’s recommended to wait at least a week after the application to allow the coating to fully cure.'
                },
                {
                    id: 5,
                    title: 'How much does ceramic coating cost?',
                    text: 'The cost of ceramic coating varies depending on several factors, including the size and condition of your vehicle, and the specific product used. Please contact us for a custom quote.'
                }
            ]
            const [toggleCoating, setToggleCoating] = useState({
                0: true
            })

            function toggleCoatingFunction(id) {
                setToggleCoating({
                    ...toggleCoating,
                    [id]: !toggleCoating[id]
                })
            }

            return (
                <div className="box">
                    {coatingList.map((item) => {
                        return (
                            <div className="expandable">
                                <h6 id='highlight' onClick={() => {
                                    toggleCoatingFunction(item.id)
                                }}>
                                {toggleCoating[item.id] ? <span id='expand-marker'>-</span> : <span id='expand-marker'>+</span>} {item.title}
                                </h6>
                                {toggleCoating[item.id] ? <p>{item.text}</p> : <></>}
                            </div>
                        )
                    })}
                </div>
            )
        case 'detailing':
            const detailingList = [
                {
                    id: 0,
                    title: 'Preservation of Value',
                    text: 'Regular detailing slows down the depreciation of your vehicle by maintaining its aesthetic appeal and mechanical condition. A well-looked-after vehicle will always have a higher resale value.'
                },
                {
                    id: 1,
                    title: 'Improved Safety',
                    text: 'Our services like headlight restoration improve night visibility, while a clean, well-maintained car can also minimize the chances of mechanical failures on the road.'
                },
                {
                    id: 2,
                    title: 'Health Benefits',
                    text: 'A detailed cleaning of your vehicle’s interior helps to eliminate allergens, bacteria, and other harmful particles, providing a healthier environment for you and your passengers.'
                },
                {
                    id: 3,
                    title: 'Aesthetic Appeal',
                    text: 'There’s no denying that a clean, well-maintained car looks better. Whether you’re going for a drive or showing off your vehicle at a car meet, our detailing services will ensure your car always makes a great impression.'
                },
                {
                    id: 4,
                    title: 'Preventative Maintenance',
                    text: 'Our detailing services serve as preventative maintenance, addressing minor issues before they become major problems. Regular detailing can prevent paint damage, fabric staining, and leather cracking, saving you money in the long run.'
                }
            ]
            const [toggleDetailing, setToggleDetailing] = useState({
                0: true
            })

            function toggleDetailingFunction(id) {
                setToggleDetailing({
                    ...toggleDetailing,
                    [id]: !toggleDetailing[id]
                })
            }

            return (
                <div className="box">
                    {detailingList.map((item) => {
                        return (
                            <div className="expandable">
                                <h6 id='highlight' onClick={() => {
                                    toggleDetailingFunction(item.id)
                                }}>
                                {toggleDetailing[item.id] ? <span id='expand-marker'>-</span> : <span id='expand-marker'>+</span>} {item.title}
                                </h6>
                                {toggleDetailing[item.id] ? <p>{item.text}</p> : <></>}
                            </div>
                        )
                    })}
                </div>
            )
    }
}