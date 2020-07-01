import React, {useEffect, useState} from 'react';
import NETWORK from '../utls/network';

const Area = (props)=>{

   const [movies, setmovies] = useState({})
   const [loaded, setloaded] = useState(false)
    const movieDetail = (movie)=>{
        props.updateState(props.pageNo+1, false, movie)
    }

    const getDetails = () => {
        
        NETWORK.get(`discover/movie/?with_genres=${parseInt(props.id)}`).then((res=>{
          
            setmovies(res.data.results)
            res.data.results.length>0 && props.updateState(false, false, res.data.results[0])
            setloaded(true)
        }))

    }

    
    useEffect(()=>{ //fetch data only once untill click the gener
        props.id && props.pageNo ===2  && setloaded(false)
        props.id && props.pageNo ===2  && getDetails();

    },[props.id ])
    
    if(props.pageNo ===2){
        return(
            <>
            {loaded?(
              <div className="movie">
                  {movies.length>0 ?(
                      <>
                        {movies.map((movie, index)=>(
                            <div className="movie__card pointer" key ={index} onClick={()=>{movieDetail(movie)}}>
                                {movie.original_title}
                            </div>
                        ))}
                        </>
                  ):(
                      <>
                        <p>No movie found </p>
                      </>
                  )}
                
                </div>    
            ):(
                <>
                    <div className="loader">
                        <img src="./images/spinner.gif" />
                    </div>
                </>
            )}
           
                
            </>
        )
    }else{
        return(<></>)
    }
    
}

export default Area