import React , { Component }from 'react';

import PropTypes        from 'prop-types';
import contentHeader from './css/contentHeader.scss';
import contentWrapper from './css/contentWrapper.scss';
import greyColumn from './css/greyColumn.scss';
import whiteColumn from './css/whiteColumn.scss';

import ContentHeader from './ContentHeader';
import ContentWrapper from './ContentWrapper';
import WhiteColumn from './WhiteColumn';
import GreyColumn from './GreyColumn';


class MovieDetailShowing extends Component
{

  render()
  {
    return (
      <div >

        <style dangerouslySetInnerHTML={{ __html: contentHeader }} />
        <ContentHeader />
        {/* contentHeader */}

        <style dangerouslySetInnerHTML={{ __html: contentWrapper }} />
        <ContentWrapper />
        {/* content_wrapper */}

        <div className="column_wrapper d-flex" >

          <style dangerouslySetInnerHTML={{ __html: whiteColumn }} />
          <WhiteColumn />
          {/* white_column  */}

          <style dangerouslySetInnerHTML={{ __html: greyColumn }} />
          <GreyColumn />
        </div> {/* column_wrapper */}



      </div>
    );
  }
}



export default MovieDetailShowing;
