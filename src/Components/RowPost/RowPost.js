import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import axios from '../../Axios'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
console.log(response.data.results)
if(response.data.results.length!=0){
  setUrlId(response.data.results[0])
}else
{console.log('array empty');}
    })


  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
          movies.map((objectt)=>  
        <img onClick={()=>handleMovie(objectt.id)} className={props.isSmall?"smallposter":'poster'} src={`${imageUrl+objectt.backdrop_path}`} alt="poster" />
          )}

        </div>
      { urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div>
  )
}

export default RowPost