import React, {useState, useEffect} from 'react';
import utls from './utls/utl'
const Info = props=>{
  const [info, setinfo] = useState(props.details.pageInfo[props.details.pageNo])

  useEffect(()=>{
    setinfo(props.details.pageInfo[props.details.pageNo])
  },[props.details.pageNo])

    return (
        <>
            <div className="header">
                {info.header?(
                    <p className="header__genere">{info.header}</p>
                ):(
                    <img className="header__image" src={info.image} alt="images" />
                )}
                
                <h2 className="header__title">{utls.updateString(info.title , props.details.genereTitle)}</h2>
                <p className="header__description">{info.description}</p>
            </div>
        </>
    )
}

export default Info