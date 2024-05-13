import footerImg from '../assets/images/footer_peacock.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="info">
          <p>6102 Spicewood Springs Road, Austin, TX 78759</p>
          <p>(512) 346 - 2992  •  scschool@flash.net</p>
        </div>
        <div className="img">
          <img src={footerImg} alt='a peacock' />
        </div>
      </div>
      <p>© 2017 Spicewood Country School. All rights reserved. </p>
    </div>
  )
}
