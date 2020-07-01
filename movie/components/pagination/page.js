import React from 'react';

const Page = props=>{
    const paginate=(val)=>{
        if(val==="back"){
            props.updateState(props.pageNo-1)
        }else{
            props.updateState(props.pageNo+1, props.geners[0].id, false, props.geners[0].name)
        }
    }
    return(
        <>
            <div className="page">
                <div className={"page__container " + (props.pageNo === 3 ? 'hide' : "")}>
                    <div className={"page__next pointer " + (props.pageNo === 1 ? 'page__hide' : "")} onClick={(e)=>{paginate('back')}}>BACK</div>
                    <div className="page__indigator">
                        <div className={"page__indigator-dot " + (props.pageNo === 1 ? "active" : "")} ></div>
                        <div className={"page__indigator-dot " + (props.pageNo === 2 ? "active" : "")}></div>
                        <div className={"page__indigator-dot " + (props.pageNo === 3 ? "active" : "")}></div>
                    </div>
                    <div className={"page__previous pointer " + ( props.pageNo === 3 ? 'page__hide' : "") } onClick={(e)=>{paginate('next')}}>NEXT</div>
                </div> 

                <div className={"page__container page__center " + (props.pageNo !== 3 ? 'hide' : '')}>
                    <div className="poinnter" onClick={()=>{props.updateState(1)}}>TRY AGAIN</div>
                </div>        
            </div>
        </>
    )
}

export default Page