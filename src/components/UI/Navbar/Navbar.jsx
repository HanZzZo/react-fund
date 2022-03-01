import {Link} from 'react-router-dom'
//не даем презегружаться сайту каждый раз при переходе между страницами не перезагружался сайт

const Navbar = () => {
    return (
        <div className='navbar'>
      <div className="navbar__links">
        {/* используем компонент Link */}
        <Link to="/about">0 сайт</Link>
        <Link to="/posts">Посты </Link>
      </div>
    </div>
    )
}

export default Navbar