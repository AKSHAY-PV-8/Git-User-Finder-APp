import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { getRepo, getUser } from '../api/github';

const UserDetails = () => {

    const {username} = useParams();
    
    const {data: user, isLoading: userLoading} = useQuery({
        queryKey: ['user', username],
        queryFn: () => getUser(username),
    })
    
    const {data: repo, isLoading: repoLoading} = useQuery({
        queryKey: ['repo', username],
        queryFn: () => getRepo(username)
    })

    if(userLoading || repoLoading){
        return <div className="">Loading ....</div>
    }

    console.log("user", user)
    console.log("repo", repo)
         

  return (
    <div className='bg-black w-full h-dvh text-white flex justify-center '>
      {user? 
      <div className="w-[200px] h-[200px] border flex-col flex items-center justify-center relative top-30">
        <h1 className=''>{user[0].login}</h1>
        <img src={user[0].avatar_url} alt="" className='w-30 rounded-[50%]'/>
      </div>: ""}


      <div className="relative top-10">
        <span className='relative left-10 top-10 font-extrabold'>REPO</span>
        <ul className='relative left-10 top-20'>
        {repo && repo.map((r) => (
            <li key={r.id}>
                <a href={r.html_url}>{r.name}</a>
            </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default UserDetails
