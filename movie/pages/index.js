import Head from 'next/head'
import React from 'react';
import Helper from '../components/helper'

class Home extends React.Component {
 
  constructor(props) {
    super(props);
    this.state ={
      pageNo:1,
      selectedGenerID:undefined,
      selectedMove: {},
      genereTitle:"",
      pageInfo:{
        1:{
          header:"Movie Night",
          title:"What should we watch tonight?",
          description:"Pick a genere to get started"
        },
        2:{
          image:"./images/cinima.jpeg",
          title:"Awsome, {title} night!",
          description:"choose an era go for a surprice if you're feeling lucky!"
        },
        3:{
          image:"./images/popcorn.png",
          title:"Ok, get the popcorn ready!",
          description:"here what we're watching tonight"
        }
      }

    }
  }


  updateState = (page, genere, movie, title) =>{
    this.setState({
      selectedGenerID: genere ? genere : this.state.selectedGenerID,
      selectedMove: movie ? movie : this.state.selectedMove ,
      pageNo: page ? page : this.state.pageNo,
      genereTitle: title ? title : this.state.genereTitle
    })
  }


  componentDidMount(){
   console.log("Compnent Mounted")
  }

  render() {
    return (
      <div className="container">
          <Helper geners={this.props.geners} details={this.state} updateState={this.updateState}/>
      </div>
    )
  }

}

export default Home
