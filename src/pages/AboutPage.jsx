import flowerImg from '../assets/images/flowers.png'

export default function AboutPage() {
  return (
    <div className="page-layout-1">
      <div className="top">
        <p>Spicewood Country School was established in 1980 to offer something special in child care. Its unique settings, with grazing horses on the grounds, creates the atmosphere of a friendly farm while close to the heart of city life.</p>
        <p>The program was designed to meet the needs of the whole child, through the areas of human development – intellectual, emotional, physical, and social – and to ready them in these areas for entrance into public and private schools.</p>
        <p>Experiences with animals, music, Spanish and an outdoor learning program, enhance an excellent curriculum of planned units and themes that are changed yearly. Spicewood has truly had a positive impact on the learning and self-esteem of thousands of Austin's children, and stays full by the recommendation of their proud parents.</p>
      </div>
      <div className="bottom">
        <div className="facilities">
          <h5>Our facilities include:</h5>
          <ul>
            <li>9 acres of beautiful hill country</li>
            <li>4,000 square feet of charming classrooms</li>
            <li>Fully equipped, shaded playground and picnic areas</li>
            <li>Fenced swimming pool</li>
            <li>Barnyard animals</li>
            <li>Sports field</li>
            <li>Room to explore and fish on the banks of Bull Creek</li>
          </ul>
        </div>
        <img id='flower-img' src={flowerImg} />
      </div>
    </div>
  )
}
