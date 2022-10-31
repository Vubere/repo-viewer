import { useContext } from "react"

import RepoDisplay from "./RepoDisplay"
import Paginations from "./Pagination"

import { PaginationContext } from "../Pages/Repos"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function RepoPaginated(){
  const navigate = useNavigate()
  const {userRepoDetails, itemsPerPage} = useContext(PaginationContext)
  const {page} = useParams()
  const startIndex = (Number(page)*itemsPerPage)-itemsPerPage
  const endIndex = Number(page)*itemsPerPage
  console.log(startIndex, endIndex, page)
  
  if(page==null||page==undefined){
    navigate('/')
  }

  return (
    <section className="repoWindow">
      {userRepoDetails.slice(startIndex, endIndex).map((repo, index) => (
        <RepoDisplay key={repo.id} repoDetails={repo} index={index} />
      ))}
      <Paginations />
    </section>
  );
}