import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Master from '../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../src/redux';
import { usersActions, usersSelector } from '../src/redux/users';

class Index extends Component {
  static getInitialProps ({ store }) {
    store.dispatch(usersActions.fetchUsers());
  }

  render() {
    return (
      <div>
        <Master>
          <div>
            <div>
              { process.env.APP_NAME }
            </div>
            <button onClick={ this.props.fetchUsers }>
              Fetch users
            </button>
            <h1>
              { this.props.users.map(({id, name}) => (
                <p key={id}>
                  {name}
                </p>
              )) }
            </h1>
          </div>
        </Master>
      </div>
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
