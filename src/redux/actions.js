import { UsersActionCreators } from './Users';
import { PeopleActionCreators } from './People';
import  PeopleActions from './People/actions';

export const INITIAL_STORE = {
  people: {
    ...PeopleActions.INITIAL_STATE
  }
}


export default {
  UsersActionCreators,
  PeopleActionCreators
}
