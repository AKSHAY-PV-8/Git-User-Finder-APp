import axios from "axios"


export const getUser = async (username) => {
    const res = await axios(`https://api.github.com/search/users?q=${username}`)
    return res.data.items
}

export const getRepo = async (username) => {
    const res = await axios(`https://api.github.com/users/${username}/repos`)
    return res.data;
}