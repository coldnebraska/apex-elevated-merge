import Services from '../../components/Services'
import ServiceLinks from '../../components/ServiceLinks'

export default function HomePage() {
  return (
    <div>
      <Services />

      <div className="side-by-side">
        <div>
          <h1 id='shadow'>ABOUT</h1>
          <h1>PROTECTING YOUR</h1>
          <h1 id='highlight'>INVESTMENT</h1>
          <p>Welcome to Apex Auto Shield, where meticulous attention to detail meets cutting-edge technology in automotive care. Based in Leander, TX, we offer a comprehensive range of services, including window tinting, paint protection film, paint correction, ceramic coating, and detailing. With extensive expertise in the field, we are committed to enhancing the appearance and extending the life of your vehicle, using only the highest-quality products in the industry. Our customer-centric approach ensures an exceptional service experience, tailored to your unique needs. Join the Apex Auto Shield family and let us take your vehicle to the apex of aesthetic appeal and protection.</p>
        </div>

        <div className='sbs-img'>
          <img src='/assets/homepageImages/homepage_about.png' id='about-logo' />
          <img src='/assets/homepageImages/apex_orange_logo.png' id='logo-overlay' />
        </div>
      </div>

      <div className='services-header'>
        <h1>SERVICES</h1>
        <h4>THE <span id='highlight'>PROTECTION</span> YOU NEED</h4>
        <button>GET FREE QUOTE</button>
      </div>

      <ServiceLinks />
    </div>
  )
}
