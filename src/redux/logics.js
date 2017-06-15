import { MoviesLogic } from './movie';
import {DetailsLogic} from './details';

export default [
  ...MoviesLogic,
  ...DetailsLogic
];
