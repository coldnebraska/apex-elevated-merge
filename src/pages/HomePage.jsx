import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import image1 from '../assets/images/homepage_1.jpg'
import image2 from '../assets/images/homepage_2.jpg'
import image3 from '../assets/images/homepage_3.jpg'

export default function HomePage() {
  return (
    <div className="page-layout-1">
      <div className="alerts">
        <h2>Spicewood's 2024 summer camp registration will open on Saturday, February 3rd</h2>
        <h2>11:00 AM - 2:00 PM, at Spicewood Country School and Camp!</h2>
      </div>

      <Carousel>
        <div>
          <img src={image1} className="carousel" />
        </div>

        <div>
          <img src={image2}  className="carousel"/>
        </div>

        <div>
          <img src={image3}  className="carousel"/>
        </div>
      </Carousel>
    </div>
  )
}
