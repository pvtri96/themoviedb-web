import React from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../src/redux';
import usersActionsCreators from '../src/redux/Users/actionCreators';

const Index = props => {
  return (
    <Master>
      <div>
        <div>
          { process.env.APP_NAME }
        </div>
        <button onClick={props.fetchUsers}>
          Fetch users
        </button>
      </div>
    </Master>
  );
};

Index.propTypes = {

};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(usersActionsCreators.fetchUsers());
    }
  };
};

export default withRedux(getStore, null, mapDispatchToProps)(Index);
