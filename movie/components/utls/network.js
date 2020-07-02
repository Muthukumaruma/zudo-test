import React, { useContext } from 'react'
import axios from "axios";
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const NETWORK = axios.create({
  baseURL: publicRuntimeConfig.API_URL,
  withCredentials: false,
  params:publicRuntimeConfig.API_KEY

})

// Add a request interceptor
NETWORK.interceptors.request.use(

  function(config) {

    config.headers.common["Authorization"] = `Bearer ${publicRuntimeConfig.ACCESS_TOCKEN}`

    return config;
  },

  function(error) {
    return Promise.reject(error);
  }

);

const apiList = ()=>{
  return{
    "genre/movie/list":"LIST_API",
    "discover/movie/":"MOVIE_API",
  }
}

NETWORK.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
      //collect API error logs
    try {
      let errors = Object.keys(apiList()).filter(function(a) {
        return (error.config.url.indexOf(a) !== -1)
      });
      console.log(errors)

    } catch (error) {

    }


    return Promise.reject(error);
  }
);

export default NETWORK;
