import React from 'react'
import {useNavigate} from "react-router-dom"

const UserCard = ({user}) => {
    const navigate = useNavigate() 
  return (
    <div>
        <div className='text-amber-300 z-10 font-500 relative top-30 text-center border rounded-[20px] hover:bg-yellow-200'
        onClick={() => navigate(`/detailsPage/${user.login}`)}>{user.login}</div>
    </div>
  )
}

export default UserCard
