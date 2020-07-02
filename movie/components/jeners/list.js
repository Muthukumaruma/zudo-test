import React from 'react';

const GenereList = (props)=>{

    const genereDetail = (genere)=>{
        props.updateState(props.pageNo+1, genere.id, false, genere.name)
    }
 
    return(
        <>
        {props.pageNo ==1?(
          <div className="geners">
            {props.geners && props.geners.map((genere, index)=>(
                <div className="geners__card pointer" key ={index} onClick={()=>{genereDetail(genere)}}>
                    <img src="./images/cinima.jpeg" alt="movie" />
                    {genere.name}
                </div>
                ))}
            </div>    
        ):(
            <></>
        )}
       
            
        </>
    )
}

export default GenereList