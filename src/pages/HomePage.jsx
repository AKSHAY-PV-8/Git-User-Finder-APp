import { useState } from "react"
import SearchBar from "../components/SearchBar"
import axios from "axios"
import UserCard from "../components/UserCard";


const HomePage = () => {

  const [users, setUser] = useState([]);

  const handlesearch = async (query) => {

    try{
      const res = await axios.get(`https://api.github.com/search/users?q=${query}`)
      setUser(res.data.items)
      console.log(res.data.items)
    }catch(error){
      console.error(error)
    }
  }
  return (
    <div className="bg-black w-full h-dvh overflow-hidden flex flex-col">
      <h1 className="text-white font-medium text-[40px] text-center relative top-10">GIT USER FINDER</h1>
      <SearchBar onSearch={handlesearch}/>
      <div className="">
        {users.map(user =>(

          <UserCard key={user.id} user={user}/>
                                                 
        ) )}
      </div>
    </div>
  )
}
                 
export default HomePage
  