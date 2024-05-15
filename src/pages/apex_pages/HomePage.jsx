import Services from '../../components/Services'
import ServiceLinks from '../../components/ServiceLinks'

import aboutImg from '../../assets/images/homepage_about.png'
import aboutLogo from '../../assets/images/apex_orange_logo.png'

export default function HomePage() {
  return (
    <div>
      <Services />

      <div className="about">
        <div className='about-text'>
          <h1 id='shadow'>About</h1>
          <h1>PROTECTING YOUR</h1>
          <h1 id='highlight'>INVESTMENT</h1>
          <p>Welcome to Apex Auto Shield, where meticulous attention to detail meets cutting-edge technology in automotive care. Based in Leander, TX, we offer a comprehensive range of services, including window tinting, paint protection film, paint correction, ceramic coating, and detailing. With extensive expertise in the field, we are committed to enhancing the appearance and extending the life of your vehicle, using only the highest-quality products in the industry. Our customer-centric approach ensures an exceptional service experience, tailored to your unique needs. Join the Apex Auto Shield family and let us take your vehicle to the apex of aesthetic appeal and protection.</p>
        </div>

        <div className='homepage-about-img'>
          <img src={aboutImg} id='about-logo' />
          <img src={aboutLogo} id='logo-overlay' />
        </div>
      </div>

      <ServiceLinks />
    </div>
  )
}
