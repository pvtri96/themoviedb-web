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
import { connect } from 'react-redux';
import { menuSelector } from '../../redux/menu';


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
        <ContentHeader  isServer={this.props.isServer} />
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

const mapStateToProps = (state) => {
  return {
    menu: menuSelector(state).title
  }
}

export default connect(mapStateToProps, undefined)(DetailShowing);
