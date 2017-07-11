import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

//Import stylesheet
import vendorsheet from 'styles/vendor.scss';
// import mastersheet from './MasterLayout.scss';
// If you dont have scss, just import css.
// import vendorsheet from 'styles/vendor.css';
// import mastersheet from './MasterLayout.css';

const Master = (props) => (
  <div>
    {/* Customize head tag of the page */}
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style dangerouslySetInnerHTML={{ __html: vendorsheet }} />
      <link href="https://fonts.googleapis.com/css?family=Vidaloka" rel="stylesheet"/>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity=""
        crossOrigin="anonymous"/>
      <script src="../../static/rgbaster.min.js"></script>
      <script src="../../static/do-it.js"></script>
      {/* Import Global stylesheet */}
      <title>The Movie DB</title>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i&amp;subset=vietnamese" rel="stylesheet"/>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
    </Head>
    {/* End customize head tag*/}
    {/* Page body */}
    <div>
      <Header></Header>
      {/* Import Local stylesheet */}
      {/* Use some bootstrap css classes */}
      <div className="media">
        {props.children}
      </div>
    </div>
    <Footer></Footer>

  </div>


);

export default Master;
