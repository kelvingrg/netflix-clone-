import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../Axios'

function Banner() {
    const [movie, setmovie] = useState()
    let [movieno, setMovieno]= useState(0)
useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[movieno]);
        if(response.data.results.length<movie){
            setMovieno(0)
        }else{
            setmovie(response.data.results[movieno])
        }
       
  
        console.log(movieno)

        
       
        
    })
    
},[])
  return (
    
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    onClick={()=>{
        setMovieno(movieno++)
    }}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.name:""} </h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner