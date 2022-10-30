import { useNavigate } from "react-router-dom"


export default function Navbar(){
  const navigate = useNavigate()
  
  return (
    <header className="appHeader">
      <h1 onClick={()=>navigate('/')}>VU's repos</h1>
      <nav>
        <ul>
          <li>night</li>
          <li>tEB</li>
          <li>no page</li>
        </ul>
      </nav>
    </header>
  )
}