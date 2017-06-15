import { UsersLogic } from './Users';
import { PeopleLogic } from './People';
import { PersonLogic } from './Person';

export default [
  ...UsersLogic,
  ...PeopleLogic,
  ...PersonLogic
];
