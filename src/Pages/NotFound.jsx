import notFoundImage from '../asset/photos/404.png'

function NotFound() {
  return (
    <div className="notfound-container">
      <img src={notFoundImage} alt="404" className="notfound-image" />
    </div>
  )
}

export default NotFound
