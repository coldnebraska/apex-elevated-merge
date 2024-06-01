export default function XpelPage() {
  return (
    <div className='xpel-page'>
      <div className="xpel-header">
        <img src='/assets/xpelPageImages/xpel_logo.jpg' />
        <p>Welcome to Apex Auto Shield, your leading choice for exceptional vehicle protection in Austin and Leander, TX. As an authorized dealer for XPEL, a prominent name in the automotive protection industry, we’re proud to bring you a wide range of their top-tier products.</p>
      </div>

      <div className="side-by-side">
        <div>
          <h1 id='shadow'>TINT</h1>
          <h1>ADVANCED</h1>
          <h1 id='highlight'>HEAT REJECTION</h1>
          <p>Elevate your driving experience while shielding your vehicle’s interior with XPEL PRIME window films. Available in a spectrum of shades, these premium tints offer superior heat rejection, UV protection, and privacy. They also effectively reduce glare, ensuring a safer and more comfortable drive.</p>
        </div>

        <img src='/assets/xpelPageImages/tint_video.png' />
      </div>

      <button id='selection-btn'>VIEW OUR TINT SELECTION</button>
      
      <div className="side-by-side">
        <img src='/assets/xpelPageImages/ppf_video.png' />

        <div>
          <h1 id='shadow'>PPF</h1>
          <h1>ULTIMATE</h1>
          <h1 id='highlight'>VEHICLE SHIELD</h1>
          <p>Preserve your vehicle’s showroom condition with XPEL ULTIMATE PLUS Paint Protection Film. This self-healing, clear coated film is virtually invisible and guards your vehicle from stone chips, road debris, scratches, and the detrimental effects of the sun.</p>
          <p>As an authorized XPEL installer, our adept technicians guarantee a flawless application for enduring protection and aesthetics. With XPEL’s unbeatable 10-year warranty, your investment is secured against yellowing, staining, cracking, blistering, and delaminating.</p>
        </div>
      </div>

      <button id='selection-btn'>VIEW OUR PPF PACKAGES</button>

      <div className="side-by-side">
        <div>
          <h1 id='shadow'>CERAMIC</h1>
          <h1>GLOSSY</h1>
          <h1 id='highlight'>LASTING ARMOR</h1>
          <p>Gift your vehicle the superior protection it merits with XPEL FUSION PLUS, a professionally installed ceramic coating. This hydrophobic coating imparts a glossy, slick finish to your vehicle while offering advanced protection against swirl marks, scratches, chemical stains, and oxidation.</p>
        </div>

        <img src='/assets/xpelPageImages/ceramic_video.png' />
      </div>

      <button id='selection-btn'>VIEW OUR TINT SELECTION</button>
      
      <div className='page-divider'>
        <img src='/assets/xpelPageImages/xpel_divider.png' />
      </div>

      <div className='learn-more'>
        <h1>LEARN MORE ABOUT <span id='highlight'>XPEL</span></h1>

        <div className="box">
          <div className="expandable">
            <h6 id='highlight'><span id='expand-marker'>+</span> What is XPEL?</h6>
            <p id='hidden'>XPEL is a leading provider of automotive protection products, including window tinting films, paint protection films (PPF), and other car care solutions. Known for its high-quality and advanced technology, XPEL provides top-tier products designed to protect and enhance your vehicle’s appearance.</p>
          </div>

          <div className="expandable">
            <h6 id='highlight'><span id='expand-marker'>+</span> What is XPEL window tint and how does it benefit me?</h6>
            <p id='hidden'>XPEL window tint is a premium window film that provides protection from harmful UV rays, reduces heat, enhances privacy, and adds a sleek aesthetic to your vehicle. It blocks up to 99% of UV rays, helping to keep your car’s interior cool and protected from sun damage.</p>
          </div>

          <div className="expandable">
            <h6 id='highlight'><span id='expand-marker'>+</span> What is XPEL Paint Protection Film (PPF)?</h6>
            <p id='hidden'>XPEL PPF is a clear or colored polyurethane film that is applied to vehicles to protect them from scratches, dents, or swirls caused by road debris, rocks, bug droppings, and other environmental elements. It helps maintain your car’s pristine appearance for a longer period of time.</p>
          </div>
          
          <div className="expandable">
            <h6 id='highlight'><span id='expand-marker'>+</span> How long does XPEL's Products last?</h6>
            <p id='hidden'>The longevity of XPEL products depends on various factors including the specific product, vehicle use, maintenance, and environmental conditions. However, XPEL products are designed to be highly durable. For instance, XPEL’s PPF and window tints come with a manufacturer’s warranty, providing peace of mind for your investment.</p>
          </div>
          
          <div className="expandable">
            <h6 id='highlight'><span id='expand-marker'>+</span> How can I maintain my vehicle after XPEL product application?</h6>
            <p id='hidden'>After application of XPEL products, regular washing helps maintain the product’s appearance and longevity. You can wash your vehicle the same way you would do without the product. However, it’s recommended to wait a week before washing your vehicle after the product has been installed to allow it to fully cure. Always consult with your installer for detailed care instructions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
