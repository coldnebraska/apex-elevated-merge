import Faq from "../../components/Faq"

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

      <a href="/services#tint" id='selection-btn'>VIEW OUR TINT SELECTION</a>
      
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

      <a href="/services#ppf" id='selection-btn'>VIEW OUR PPF PACKAGES</a>

      <div className="side-by-side">
        <div>
          <h1 id='shadow'>CERAMIC</h1>
          <h1>GLOSSY</h1>
          <h1 id='highlight'>LASTING ARMOR</h1>
          <p>Gift your vehicle the superior protection it merits with XPEL FUSION PLUS, a professionally installed ceramic coating. This hydrophobic coating imparts a glossy, slick finish to your vehicle while offering advanced protection against swirl marks, scratches, chemical stains, and oxidation.</p>
        </div>

        <img src='/assets/xpelPageImages/ceramic_video.png' />
      </div>

      <a href="/services#tint" id='selection-btn'>VIEW OUR TINT SELECTION</a>
      
      <div className='page-divider'>
        <img src='/assets/xpelPageImages/xpel_divider.png' />
      </div>

      <div className='learn-more'>
        <h1>LEARN MORE ABOUT <span id='highlight'>XPEL</span></h1>

        <Faq section='xpel' />
      </div>
    </div>
  )
}
