import React from 'react'
import ReactDOM from 'react-dom/client'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   HashRouter,
} from 'react-router-dom'
import './styles/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <HashRouter>
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/about/" element={<About />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </HashRouter>
   </React.StrictMode>
)
