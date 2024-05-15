import apexLogo from '../assets/images/apex_logo.png'
import Map from './Map'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-col'>
          <img src={apexLogo} />
          <p>Apex Auto Shield, based in Leander, TX, is your one-stop solution for exceptional vehicle care services. We specialize in XPEL window tinting, paint protection film, paint correction, ceramic coating, and meticulous detailing. Enhance and protect your vehicle with Apex Auto Shield. Unveil the brilliance within today.</p>
        </div>

        <div className='footer-col'>
          <h4>Contact Info</h4>
          <h6>Address:</h6>
          <p>607 Leander Dr. Suite 300 Leander, TX 78641</p>
          <h6>Phone:</h6>
          <p>(512)585-9842</p>
          <h6>Email:</h6>
          <p>info@apexautoshieldtx.com</p>
        </div>

        <div className='footer-col'>
          <h4>Location</h4>
          <Map />
        </div>
      </div>
      <p>Copyright © Apex Auto Shield. All Rights Reserved.</p>
    </div>
  )
}
