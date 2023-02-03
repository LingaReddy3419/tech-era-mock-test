import {Link} from 'react-router-dom'
import './index.css'

const Item = props => {
  const {itemDetails} = props
  const {id, name, logoUrl} = itemDetails

  return (
    <Link to={`/courses/${id}`} className="nav-item-link">
      <li className="course-container">
        <img src={logoUrl} alt={name} className="image" />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}
export default Item
