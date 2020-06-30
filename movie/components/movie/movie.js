import React from 'react';
import getConfig from 'next/config'

const Movie = (props)=>{
    
 const publicRuntimeConfig = getConfig().publicRuntimeConfig
 
    if(props.pageNo ===3){
        return(
            <>
              <div className="movie-detail">
                  <div className="movie-detail__image-wrapper">
                    <img className="content" src={publicRuntimeConfig.IMG_URL+props.movie.poster_path} />
                  </div>
                  
                  <h3>{props.movie.original_title}</h3>
                  <h3>{props.movie.release_date}</h3>
                  <p>IMDB: {props.movie.vote_average} / 10</p>
                </div>            
                
            </>
        )
    }else{
        return(<></>)
    }
    
}

export default Movie