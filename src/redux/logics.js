import { MovieListLogic} from './movies/movieList';
import { MovieLogic } from './movies/movie';

export default [
  ...MovieListLogic,
  ...MovieLogic
];
