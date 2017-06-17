import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../src/redux';
import { usersActions, usersSelector } from '../src/redux/users';

class Index extends Component {
  static async getInitialProps ({ store, isServer }) {
    await store.dispatch(usersActions.fetchUsers());
    return { isServer };
  }
  render() {
    return (
      <Master>
        <div>
          <button onClick={ this.props.fetchUsers }>
            Fetch users
          </button>
          <h1>
            { this.props.users.map(({id, name}) => (
              <div key={id}>
                {name}
              </div>
            )) }
          </h1>
        </div>
      </Master>
    );
  }
}

Index.propTypes = {
  fetchUsers: PropTypes.func,
  users: PropTypes.array
};

const mapStateToProps = state => ({
  users: usersSelector(state).list
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => {
    dispatch(usersActions.fetchUsers());
  }
});

export default withRedux(getStore, mapStateToProps, mapDispatchToProps)(Index);
