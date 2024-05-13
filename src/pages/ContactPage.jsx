import Map from '../components/Map'

export default function ContactPage() {
  return (
    <div className="page-layout-1">
      <div className="top">
        <div className="info-bar">
          <div className="info">
            <h4>Phone:</h4>
            <p>(512)346-2992</p>
          </div>

          <div className="bar"></div>

          <div className="info">
            <h4>Address:</h4>
            <p>6102 Spicewood Springs Road, Austin, TX 78759</p>
          </div>

          <div className="bar middle-bar"></div>

          <div className="info">
            <h4>Email:</h4>
            <p>scschool@flash.net</p>
          </div>

          <div className="bar"></div>

          <div className="info">
            <h4>Hours:</h4>
            <p>7:30am to 5:30pm</p>
          </div>
        </div>
      </div>

      <div className="contact-bottom">
        <Map />

        <div className="contact-form">
          <h2>Schedule a visit or ask a question!</h2>
          <div className="contact-info">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
          </div>
          <div className="msg-details">
            <input placeholder="Subject"></input>
            <textarea placeholder="Message"></textarea>
          </div>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}
