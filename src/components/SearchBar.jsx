import { useState } from "react"

const SearchBar = ({onSearch}) => {

    const [query, setQuery] = useState("");

    const handelSubmit = (e) => {
      e.preventDefault()
       onSearch(query)
    }

  return (
    <form onSubmit={handelSubmit} className="flex justify-center relative top-[90px]">
        <input type="text" className="bg-white w-[500px] h-[50px] rounded-[20px] border-blue-500 border-2
        placeholder: text-center"
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search User Name"></input>

        <button className="w-[100px] h-[50px] rounded-[20px] border-blue-500 border-2 text-white hover:bg-blue-300">
            Search
        </button>
    </form>
  )
                                                                                                                                                                                                                                                                                                                                    
}

export default SearchBar
