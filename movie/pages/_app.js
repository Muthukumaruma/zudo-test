import React from "react";
import App from "next/app";
import Head from "next/head";
import "../sass/styles.scss"
class TVFApp extends App {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
      if (process.browser) {
        //this.onPageStart();
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
export default TVFApp