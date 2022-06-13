import { Link } from 'react-router-dom'
import logos from '../assets/LOGO.png'

function Header() {
   const logo = <img src={logos} alt="Kasa Logo" />
   return (
      <nav className="header">
         <Link className="header__logo" to="/">
            {logo}
         </Link>
         <Link className="header__link" to="/">
            Accueil
         </Link>
         <Link className="header__link" to="/about">
            A propos
         </Link>
      </nav>
   )
}

export default Header
