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

    } catch (error) {

    }


    return Promise.reject(error);
  }
);

export default NETWORK;
