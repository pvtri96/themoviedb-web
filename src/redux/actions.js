import { UsersActionCreators } from './Users';

import { PeopleActionCreators } from './People';
import  PeopleActions from './People/actions';

import { PersonActionCreators } from './Person';
import  PersonActions from './Person/actions';
export const INITIAL_STORE = {
  people: {
    ...PeopleActions.INITIAL_STATE
  },
  person:{
    ...PersonActions.INITIAL_STATE
  }
}


export default {
  UsersActionCreators,
  PeopleActionCreators,
  PersonActionCreators
}
