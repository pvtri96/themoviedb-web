import {MoviesLogic} from './discover/movie';
import {MovieDetailLogic} from './discover/movieDetail';

export default [
  ...MoviesLogic,
  ...MovieDetailLogic
];
