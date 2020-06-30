import React from 'react';
import GenereList from './jeners/list'
import Info from './info'
import Area from './area/area'
import Movie from './movie/movie'
import Page from './pagination/page'
import '../sass/components/_movie.scss';
const Helper = (props)=>{
    
    return(
        <>
            <div className="wrapper">
                <Info details = {props.details} />
                <GenereList geners = {props.geners} pageNo ={props.details.pageNo} updateState={props.updateState}/>   
                <Area pageNo ={props.details.pageNo} updateState={props.updateState} id={props.details.selectedGenerID} />
                <Movie movie={props.details.selectedMove} updateState={props.updateState} pageNo ={props.details.pageNo}/>
                <Page details = {props.details} updateState={props.updateState} pageNo ={props.details.pageNo} geners = {props.geners} />
            </div>
        </>
    )
}

export default Helper