// Write your JS code here
import './index.css'

const About = () => {
  const img = 'https://assets.ccbp.in/frontend/react-js/about-blog-img.png'
  const altText = 'about'

  return (
    <div className="category-container">
      <img src={img} alt={altText} className="img-styling" />
      <h1>About</h1>
      <p>I love to create! I am a web developer</p>
    </div>
  )
}
export default About
