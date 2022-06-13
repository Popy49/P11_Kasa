function Error() {
   return (
      <div className="error">
         <div className="error__title">404</div>
         <h1 className="error__subtitle">
            Oups! La page que vous demandez n'existe pas
         </h1>
         <a className="error__backLink" href="/">
            Retourner sr la page d'acceuil
         </a>
      </div>
   )
}

export default Error
