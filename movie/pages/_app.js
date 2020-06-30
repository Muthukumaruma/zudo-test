import React from "react";
import App from "next/app";
import Head from "next/head";
import NETWORK from '../components/utls/network'
import "../sass/styles.scss"
class MovieApp extends App {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }

    //server side rendering
    static async getInitialProps({ Component, ctx, router }) {
      
      const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

      NETWORK.defaults.headers.common["cookie"] = ctx.req.headers.cookie
      ? ctx.req.headers.cookie
      : ""; //set the browser cooke from server 
      
      if(!process.browser){
        pageProps.metaData = ctx.req.metaData ? ctx.req.metaData : {};
        try{
          let geners = await NETWORK.get("genre/movie/list")
          pageProps.geners = geners.data.genres ? geners.data.genres : undefined
        }catch(e){
          console.log(e)
        }
        
        
        return { pageProps }
      }
    }

    render() {
        
        const { Component, pageProps, router } = this.props;
        const queryParams = router.query;
        return(
            <>
            <Head>
                <title>Movie App</title>
            </Head>
            <Component {...pageProps} />
            </>
        )
    }

}
export default MovieApp