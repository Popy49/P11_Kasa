import logos from '../assets/LOGO-dark.png'

function Footer() {
   const logo = <img src={logos} alt="Kasa Logo" />
   return (
      <div className="footer">
         {logo}
         <p>© 2020 Kasa. All rights reserved</p>
      </div>
   )
}

export default Footer
