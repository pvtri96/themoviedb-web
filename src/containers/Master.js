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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"  />
      <style dangerouslySetInnerHTML={{ __html: vendorsheet }} />
      {/* Import Global stylesheet */}
      <title>The Movie DB</title>
    </Head>
    {/* End customize head tag*/}
    {/* Page body */}
    <div>
      <Header></Header>
      {/* Import Local stylesheet */}
      {/* Use some bootstrap css classes */}
      <div className="p-5">
        <div className="container">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

export default Master;
