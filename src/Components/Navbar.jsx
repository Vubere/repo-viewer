import { useNavigate } from "react-router-dom"


import no_page from '../assets/error.svg'

import error from '../assets/no_page.svg'

import github_logo from '../assets/github_logo.png'

export default function Navbar(){
  const navigate = useNavigate()
  
  return (
    <header className="appHeader"
    aria-label="app header">
      <h1 onClick={()=>navigate('/')}
      aria-label="app title, vu's repo"
      tabIndex='1'>
        <img src={github_logo} alt="" />
        vubere</h1>
      <nav>
        <ul>
          <li onClick={()=>navigate('/error')}
          title='Error Page'
          tabIndex='3'><img src={error} alt='error icon'/></li>
          <li onClick={()=>navigate('no-page')}
          title='no page here'
          tabIndex='4'><img src={no_page} alt="no page img" /></li>
        </ul>
      </nav>
    </header>
  )
}