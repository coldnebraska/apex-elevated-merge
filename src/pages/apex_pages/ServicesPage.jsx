import Package from '../../components/Package'

export default function ServicesPage() {
  return (
    <>
      <div className="service-page-nav">
        <h1>Navigate To</h1>

        <div>
          <a href='/services#tint' id='highlight'>Tint</a>
          <a href='/services#ppf' id='highlight'>PPF</a>
          <a href='/services#coating' id='highlight'>Coating</a>
          <a href='/services#detailing' id='highlight'>Detailing</a>
        </div>
      </div>

      <div id='tint'>
        <h1 id='services-shadow'>Tint</h1>
        <h1>YOUR <span id="highlight">GO-TO WINDOW TINTING</span> EXPERTS</h1>
        <p id='sp-header-text'>Experience an unmatched blend of style, comfort, and UV protection with Apex Auto Shield’s XPEL Window Tinting services. Leveraging the high-grade, advanced technology of XPEL window films, we are committed to enhancing your driving experience while safeguarding your vehicle’s interiors. Our professional team of detailers are extensively trained, ensuring the precise application of XPEL window tint for a sleek finish and long-lasting protection.</p>
        
        <Package packageName='tint' />

        <div className='learn-more'>
          <h1>WHY <span id='highlight'>WINDOW TINTING?</span></h1>

          <div className="box">
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Increased Privacy</h6>
              <p id='hidden'>In today’s world, privacy is a valued commodity. Window tinting acts as a barrier, obscuring the view into your vehicle’s interior from the outside. This added layer of privacy can help deter potential thieves who may be tempted by visible belongings inside your car. Furthermore, it provides a more discreet, personal space for occupants, making every journey more comfortable and secure.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> UV Protection</h6>
              <p id='hidden'>The Texas sun’s ultraviolet rays are not only harmful to our skin but can also damage the interior of your vehicle over time, causing upholstery to fade and crack. High-quality window tinting can block up to 99% of these harmful rays, acting as a protective shield for both your vehicle’s interior and the occupants inside. By protecting your car from UV damage, window tinting can also help maintain the value of your vehicle.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Improved Comfort</h6>
              <p id='hidden'>Texas can have some of the hottest summer days, and there’s nothing worse than stepping into an overheated car. Window tints can dramatically reduce the heat inside your vehicle by blocking a significant portion of the sun’s heat energy. This leads to a more comfortable ride, less reliance on air conditioning, and improved fuel efficiency.</p>
            </div>
            
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Glare Reduction</h6>
              <p id='hidden'>Driving with the sun or bright headlights causing a glare can be both irritating and dangerous. Window tinting helps mitigate this issue by reducing the harsh glare that can cause eye strain during driving. Whether it’s the bright Austin sun or an approaching vehicle’s headlights at night, tinted windows can provide a safer, more comfortable driving experience.</p>
            </div>
            
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Enhanced Aesthetics</h6>
              <p id='hidden'>Beyond the practical benefits, window tinting adds a touch of elegance and sophistication to your vehicle. It enhances the exterior look of your car, giving it a sleek, stylish appeal. Whether you prefer a subtle enhancement or a standout transformation, window tinting can provide that desired aesthetic upgrade, making your vehicle a reflection of your personal style.</p>
            </div>
          </div>
        </div>
      </div>

      <div id='ppf'>
        <h1 id='services-shadow'>PPF</h1>
        <h1>YOUR <span id="highlight">PAINT PROTECTION FILM</span> SOLUTION</h1>
        <p id='sp-header-text'>Welcome to the Paint Protection Film (PPF) service page of Apex Auto Shield, the premier auto detail company in Leander, Texas. We specialize in safeguarding your vehicle’s paintwork from the harsh realities of daily driving. With our expertise and the use of superior products like XPEL and STEK, we are poised to deliver top-notch services that provide the best protection for your car’s exterior, ensuring it looks as good as new for years to come. Scroll below to explore our range of PPF packages tailored to meet your car’s specific protection needs.</p>
        
        <Package packageName='ppf' />

        <div className='learn-more'>
          <h1>WHY <span id='highlight'>PAINT PROTECTION FILM?</span> (PPF)</h1>

          <div className="box">
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> What is Paint Protection Film? (PPF)</h6>
              <p id='hidden'>Paint Protection Film, often referred to as PPF, is a thin layer of thermoplastic urethane applied to your vehicle’s exterior to protect the paint from scratches, chips, and other damage from environmental factors and road debris.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Why should I consider getting PPF for my vehicle?</h6>
              <p id='hidden'>PPF provides a highly effective defense against a range of potential damage, including rock chips, minor scratches, UV exposure, and bird droppings. It helps maintain the aesthetics of your car, prolongs the lifespan of your paintwork, and can enhance your vehicle’s resale value.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> What is the difference between XPEL and STEK PPF?</h6>
              <p id='hidden'>XPEL is an industry-leading PPF manufacturer known for their high-quality products. XPEL PPF is renowned for its self-healing properties and clarity, while STEK offers both clear and fashion films, allowing for color and texture customization.</p>
            </div>
            
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> How long does PPF last?</h6>
              <p id='hidden'>With proper care and maintenance, high-quality PPF like XPEL can last between five to ten years. The lifespan of PPF can vary based on factors such as the quality of the installation, exposure to harsh weather conditions, and how frequently the vehicle is cleaned and maintained.</p>
            </div>
            
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> How do I care for my vehicle once the PPF is applied?</h6>
              <p id='hidden'>PPF care is straight forward. You can wash and wax your car as you normally would. However, it’s recommended to wait a week after the PPF application before washing your vehicle. Always use non-abrasive cloths and cleaning products to avoid scratching the film.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Does PPF require professional installation?</h6>
              <p id='hidden'>Yes, PPF installation should be done by trained professionals for optimal results. The process requires experience and precision to ensure the film is applied correctly and seamlessly.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> How much does PPF cost?</h6>
              <p id='hidden'>The cost of PPF depends on several factors, including the coverage area, the type of film used, and the specific make and model of your vehicle. At Apex Auto Shield, we offer a variety of packages to suit different needs and budgets. Please refer to our package descriptions for starting prices, or contact us for a custom quote.</p>
            </div>
          </div>
        </div>
      </div>

      <div id='coating'>
        <h1 id='services-shadow'>COATING</h1>
        <h1>ULTIMATE <span id="highlight">CERAMIC COATING</span> ARMOR</h1>
        <p id='sp-header-text'>Experience an unmatched blend of style, comfort, and UV protection with Apex Auto Shield’s XPEL Window Tinting services. Leveraging the high-grade, advanced technology of XPEL window films, we are committed to enhancing your driving experience while safeguarding your vehicle’s interiors. Our professional team of detailers are extensively trained, ensuring the precise application of XPEL window tint for a sleek finish and long-lasting protection.</p>
        
        <Package packageName='coating' />

        <div className='learn-more'>
          <h1>WHY <span id='highlight'>CERAMIC COATING?</span></h1>

          <div className="box">
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> What is Ceramic Coating?</h6>
              <p id='hidden'>Ceramic coating is a liquid polymer that bonds with your vehicle’s paintwork to provide a long-lasting layer of protection. It shields your car against UV damage, chemical stains, and light scratches, and has hydrophobic properties that make cleaning easier and enhance the shine of your vehicle.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> How long does Ceramic Coating last??</h6>
              <p id='hidden'>With proper care and maintenance, a high-quality ceramic coating can last up to 2-10 years. Its longevity can depend on factors such as the quality of the application, exposure to harsh weather conditions, and how often the vehicle is cleaned and maintained.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> What is Paint Correction?</h6>
              <p id='hidden'>Paint correction involves the process of restoring and rejuvenating the paintwork of a vehicle. This involves the elimination of surface imperfections such as swirl marks, fine scratches, bird droppings, and oxidation.</p>
            </div>
            
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Does my vehicle need paint correction before ceramic coating?</h6>
              <p id='hidden'>It is recommended, but not always necessary. Any surface imperfections that exist on your vehicle’s paint will be locked under the ceramic coating and may be more noticeable. Paint correction ensures the paintwork is in the best possible condition before the coating is applied.</p>
            </div>
            
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Can I wash my car after ceramic coating?</h6>
              <p id='hidden'>Yes, you can wash your vehicle after applying ceramic coating. However, it’s recommended to wait at least a week after the application to allow the coating to fully cure.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> How much does ceramic coating cost?</h6>
              <p id='hidden'>The cost of ceramic coating varies depending on several factors, including the size and condition of your vehicle, and the specific product used. Please contact us for a custom quote.</p>
            </div>
          </div>
        </div>
      </div>

      <div id='detailing'>
        <h1 id='services-shadow'>DETAILING</h1>
        <h1>COMPREHENSIVE <span id="highlight">DETAILING SOLUTIONS</span> FOR YOUR VEHICLE</h1>
        <p id='sp-header-text'>Experience an unmatched blend of style, comfort, and UV protection with Apex Auto Shield’s XPEL Window Tinting services. Leveraging the high-grade, advanced technology of XPEL window films, we are committed to enhancing your driving experience while safeguarding your vehicle’s interiors. Our professional team of detailers are extensively trained, ensuring the precise application of XPEL window tint for a sleek finish and long-lasting protection.</p>
        
        <Package packageName='detailing' />

        <div className='learn-more'>
          <h1>THE <span id='highlight'>APEX AUTO SHIELD</span> DIFFERENCE</h1>

          <div className="box">
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Preservation of Value</h6>
              <p id='hidden'>Regular detailing slows down the depreciation of your vehicle by maintaining its aesthetic appeal and mechanical condition. A well-looked-after vehicle will always have a higher resale value.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Improved Safety</h6>
              <p id='hidden'>Our services like headlight restoration improve night visibility, while a clean, well-maintained car can also minimize the chances of mechanical failures on the road.</p>
            </div>

            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Health Benefits</h6>
              <p id='hidden'>A detailed cleaning of your vehicle’s interior helps to eliminate allergens, bacteria, and other harmful particles, providing a healthier environment for you and your passengers.</p>
            </div>
            
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Aesthetic Appeal</h6>
              <p id='hidden'>There’s no denying that a clean, well-maintained car looks better. Whether you’re going for a drive or showing off your vehicle at a car meet, our detailing services will ensure your car always makes a great impression.</p>
            </div>
            
            <div className="expandable">
              <h6 id='highlight'><span id='expand-marker'>+</span> Preventative Maintenance</h6>
              <p id='hidden'>Our detailing services serve as preventative maintenance, addressing minor issues before they become major problems. Regular detailing can prevent paint damage, fabric staining, and leather cracking, saving you money in the long run.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
