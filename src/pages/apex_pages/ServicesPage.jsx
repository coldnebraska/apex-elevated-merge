import Package from '../../components/Package'
import Faq from '../../components/Faq'

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

          <Faq section='tint' />
        </div>
      </div>

      <div id='ppf'>
        <h1 id='services-shadow'>PPF</h1>
        <h1>YOUR <span id="highlight">PAINT PROTECTION FILM</span> SOLUTION</h1>
        <p id='sp-header-text'>Welcome to the Paint Protection Film (PPF) service page of Apex Auto Shield, the premier auto detail company in Leander, Texas. We specialize in safeguarding your vehicle’s paintwork from the harsh realities of daily driving. With our expertise and the use of superior products like XPEL and STEK, we are poised to deliver top-notch services that provide the best protection for your car’s exterior, ensuring it looks as good as new for years to come. Scroll below to explore our range of PPF packages tailored to meet your car’s specific protection needs.</p>
        
        <Package packageName='ppf' />

        <div className='learn-more'>
          <h1>WHY <span id='highlight'>PAINT PROTECTION FILM?</span> (PPF)</h1>

          <Faq section='ppf' />
        </div>
      </div>

      <div id='coating'>
        <h1 id='services-shadow'>COATING</h1>
        <h1>ULTIMATE <span id="highlight">CERAMIC COATING</span> ARMOR</h1>
        <p id='sp-header-text'>Experience an unmatched blend of style, comfort, and UV protection with Apex Auto Shield’s XPEL Window Tinting services. Leveraging the high-grade, advanced technology of XPEL window films, we are committed to enhancing your driving experience while safeguarding your vehicle’s interiors. Our professional team of detailers are extensively trained, ensuring the precise application of XPEL window tint for a sleek finish and long-lasting protection.</p>
        
        <Package packageName='coating' />

        <div className='learn-more'>
          <h1>WHY <span id='highlight'>CERAMIC COATING?</span></h1>

          <Faq section='coating' />
        </div>
      </div>

      <div id='detailing'>
        <h1 id='services-shadow'>DETAILING</h1>
        <h1>COMPREHENSIVE <span id="highlight">DETAILING SOLUTIONS</span> FOR YOUR VEHICLE</h1>
        <p id='sp-header-text'>Experience an unmatched blend of style, comfort, and UV protection with Apex Auto Shield’s XPEL Window Tinting services. Leveraging the high-grade, advanced technology of XPEL window films, we are committed to enhancing your driving experience while safeguarding your vehicle’s interiors. Our professional team of detailers are extensively trained, ensuring the precise application of XPEL window tint for a sleek finish and long-lasting protection.</p>
        
        <Package packageName='detailing' />

        <div className='learn-more'>
          <h1>THE <span id='highlight'>APEX AUTO SHIELD</span> DIFFERENCE</h1>

          <Faq section='detailing' />
        </div>
      </div>
    </>
  )
}
