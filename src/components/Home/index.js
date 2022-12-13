// Write your JS code here
import './index.css'

const Home = () => {
  const img = 'https://assets.ccbp.in/frontend/react-js/home-blog-img.png'
  const altText = 'home'

  return (
    <div className="category-container">
      <img src={img} alt={altText} className="img-styling" />
      <h1>Home</h1>
    </div>
  )
}
export default Home
