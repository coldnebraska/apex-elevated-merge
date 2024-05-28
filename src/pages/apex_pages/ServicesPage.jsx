import Package from '../../components/Package'

export default function ServicesPage() {
  return (
    <>
      <div className="service-page-nav">
        <h1>Navigate To</h1>

        <div>
          <a href='/apex/services/#tint' id='highlight'>Tint</a>
          <a href='/apex/services/#ppf' id='highlight'>PPF</a>
          <a href='/apex/services/#coating' id='highlight'>Coating</a>
          <a href='/apex/services/#detailing' id='highlight'>Detailing</a>
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
              <h6><span id='expand-marker'>+</span> Increased Privacy</h6>
              <p id='hidden'>In today’s world, privacy is a valued commodity. Window tinting acts as a barrier, obscuring the view into your vehicle’s interior from the outside. This added layer of privacy can help deter potential thieves who may be tempted by visible belongings inside your car. Furthermore, it provides a more discreet, personal space for occupants, making every journey more comfortable and secure.</p>
            </div>

            <div className="expandable">
              <h6><span id='expand-marker'>+</span> UV Protection</h6>
              <p id='hidden'>The Texas sun’s ultraviolet rays are not only harmful to our skin but can also damage the interior of your vehicle over time, causing upholstery to fade and crack. High-quality window tinting can block up to 99% of these harmful rays, acting as a protective shield for both your vehicle’s interior and the occupants inside. By protecting your car from UV damage, window tinting can also help maintain the value of your vehicle.</p>
            </div>

            <div className="expandable">
              <h6><span id='expand-marker'>+</span> Improved Comfort</h6>
              <p id='hidden'>Texas can have some of the hottest summer days, and there’s nothing worse than stepping into an overheated car. Window tints can dramatically reduce the heat inside your vehicle by blocking a significant portion of the sun’s heat energy. This leads to a more comfortable ride, less reliance on air conditioning, and improved fuel efficiency.</p>
            </div>
            
            <div className="expandable">
              <h6><span id='expand-marker'>+</span> Glare Reduction</h6>
              <p id='hidden'>Driving with the sun or bright headlights causing a glare can be both irritating and dangerous. Window tinting helps mitigate this issue by reducing the harsh glare that can cause eye strain during driving. Whether it’s the bright Austin sun or an approaching vehicle’s headlights at night, tinted windows can provide a safer, more comfortable driving experience.</p>
            </div>
            
            <div className="expandable">
              <h6><span id='expand-marker'>+</span> Enhanced Aesthetics</h6>
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
      </div>

      <div id='coating'>
        <h1 id='services-shadow'>COATING</h1>
        <h1>ULTIMATE <span id="highlight">CERAMIC COATING</span> ARMOR</h1>
        <p id='sp-header-text'>Experience an unmatched blend of style, comfort, and UV protection with Apex Auto Shield’s XPEL Window Tinting services. Leveraging the high-grade, advanced technology of XPEL window films, we are committed to enhancing your driving experience while safeguarding your vehicle’s interiors. Our professional team of detailers are extensively trained, ensuring the precise application of XPEL window tint for a sleek finish and long-lasting protection.</p>
        
        <Package packageName='coating' />
      </div>

      <div id='detailing'>
        <h1 id='services-shadow'>DETAILING</h1>
        <h1>COMPREHENSIVE <span id="highlight">DETAILING SOLUTIONS</span> FOR YOUR VEHICLE</h1>
        <p id='sp-header-text'>Experience an unmatched blend of style, comfort, and UV protection with Apex Auto Shield’s XPEL Window Tinting services. Leveraging the high-grade, advanced technology of XPEL window films, we are committed to enhancing your driving experience while safeguarding your vehicle’s interiors. Our professional team of detailers are extensively trained, ensuring the precise application of XPEL window tint for a sleek finish and long-lasting protection.</p>
        
        <Package packageName='detailing' />
      </div>
    </>
  )
}
