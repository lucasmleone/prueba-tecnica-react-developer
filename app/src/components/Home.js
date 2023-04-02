import { Routes, Route, useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    const navigate = useNavigate()

    const handleSeries = ()=>{
        navigate(`/series`)
    }
    const handleMovies= ()=>{
        navigate(`/movies`)
    }

    return <div>
        <div>
            <button onClick={handleSeries}>Series</button>
            <button onClick={handleMovies}>Movies</button>
        </div>
    </div>
}