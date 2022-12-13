// Write your JS code here
import './index.css'

const NotFound = () => {
  const img = 'https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'
  const altText = 'not found'

  return (
    <div className="category-container">
      <img src={img} alt={altText} className="img-styling" />
      <h1>Not Found</h1>
    </div>
  )
}

export default NotFound
