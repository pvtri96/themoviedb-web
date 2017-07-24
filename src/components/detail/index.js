import React , { Component }from 'react';

import PropTypes        from 'prop-types';
import contentHeader from './style/contentHeader.scss';
import contentWrapper from './style/contentWrapper.scss';
import greyColumn from './style/greyColumn.scss';
import whiteColumn from './style/whiteColumn.scss';

import ContentHeader from './ContentHeader';
import ContentWrapper from './ContentWrapper';
import WhiteColumn from './WhiteColumn';
import GreyColumn from './GreyColumn';


class DetailShowing extends Component
{
  constructor (props) {
    super(props);
  }

  render()
  {
    return (
      <div style={{width: "100%"}}>

        <style dangerouslySetInnerHTML={{ __html: contentHeader }} />
        <ContentHeader isServer={this.props.isServer} />
        {/* contentHeader */}





      </div>
    );
  }
}



export default DetailShowing;
