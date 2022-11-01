import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



export default function RepoIndex(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/repositories/page/1')
  },[])
  return (
    <>
    </>
  )
}