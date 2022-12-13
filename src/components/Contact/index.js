// Write your JS code here
import './index.css'

const Contact = () => {
  const img = 'https://assets.ccbp.in/frontend/react-js/contact-blog-img.png'
  const altText = 'contact'

  return (
    <div className="category-container">
      <img src={img} alt={altText} className="img-styling" />
      <h1>Contact</h1>
    </div>
  )
}
export default Contact
