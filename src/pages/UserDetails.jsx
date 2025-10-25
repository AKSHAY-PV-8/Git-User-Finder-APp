import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const {username} = useParams();
    const [user, setUser] = useState();

    useEffect( () => {
        const fetchUserDetail = async () =>{
            try{
                const res = await axios.get(`https://api.github.com/users/${username}`)
                setUser(res.data);
                console.log("fetch", res.data)
                
            }catch(error){
                console.error(error)
            }
        }

        fetchUserDetail();
    },[username])

  return (
    <div className='bg-black w-full h-dvh text-white flex justify-center '>
      {user? 
      <div className="w-[200px] h-[200px] border flex-col flex items-center justify-center relative top-30">
        <h1>{user.login}</h1>
        <img src={user.avatar_url} alt="" className='w-30 rounded-[50%]'/>
      </div>: ""}
    </div>
  )
}

export default UserDetails
