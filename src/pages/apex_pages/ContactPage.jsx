import cadillac from '../../assets/contactImages/cadillac.png'
import { Icon } from "@iconify/react"

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1 id='shadow-main'>C O N T A C T</h1>
      <div className="side-by-side">
        <img src={cadillac} id='z-index' />

        <div>
          <h1 id='highlight'>GET IN TOUCH</h1>
          <p>We look forward to protecting and preserving your ride, for a service that will last. Get in touch with one of our service pros today to schedule your detail or to have any questions answered.</p>
          
          <div className='icons'>
            <a href='https://www.facebook.com' target='_blank'>
              <Icon icon='bxl:facebook' id='icon' />
            </a>

            <a href='https://instagram.com' target='_blank'>
              <Icon icon='bxl:instagram' id='icon' />
            </a>
          </div>
        </div>
      </div>

      <div className='info'>
        <div>
          <h1 id='highlight'>Phone</h1>
          <p>(512)585-9842</p>
        </div>

        <div>
          <h1 id='highlight'>Address</h1>
          <p>607 Leander Dr. Suite 300 Leander, TX 78641</p>
        </div>

        <div>
          <h1 id='highlight'>Email</h1>
          <p>info@apexautoshieldtx.com</p>
        </div>
      </div>

      <div className="contact-form">
        <div className="contact-row">
          <p>Name</p>
          <div className='name'>
            <input placeholder='First'></input>
            <input placeholder='Last'></input>
          </div>
        </div>

        <div className="phone">
          <p>Phone</p>
          <input placeholder='(123) 456-7890'></input>
        </div>

        <div className="email">
          <p>Email</p>
          <input placeholder='john@smith.com'></input>
        </div>

        <div className='contact-row'>
          <div className="vehicle">
            <div>
              <p>Vehicle Year</p>
              <input placeholder='2024'></input>
            </div>

            <div>
              <p>Vehicle Make</p>
              <input placeholder='Chevrolet'></input>
            </div>

            <div>
              <p>Vehicle Model</p>
              <input placeholder='Corvette'></input>
            </div>
          </div>
        </div>

        <div className="contact-row">
          <p>Select Your Service</p>
          <select>
            <option>Window Tint</option>
            <option>Paint Protection Film</option>
            <option>Ceramic Coating</option>
            <option>Detailing</option>
          </select>
        </div>

        <div className="contact-row">
          <p>Message</p>
          <textarea></textarea>
        </div>

        <button>Submit</button>
      </div>
    </div>
  )
}
