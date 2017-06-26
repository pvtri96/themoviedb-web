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
      {/* Import Global stylesheet */}
      <title>The Movie DB</title>
    </Head>
    {/* End customize head tag*/}
    {/* Page body */}
    <Header></Header>
    {/* Import Local stylesheet */}
    {/* Use some bootstrap css classes */}
    <div className="body-content">
      {props.children}
    </div>
    <Footer></Footer>
  </div>
);

export default Master;
