import React, { Component } from 'react';
import {Card, CardImg,CardSubtitle,
  Row, Col,CardText,

   CardBlock} from 'reactstrap';
import Link from 'next/link';
import FontAwesome from 'react-fontawesome';
import stylesheet from 'styles/style.scss';
import MoviesService from '../../services/movies/moviesService';

// const MovieShowing = (props) => {
//   let movie = props.movie;
//   return (

//       <Card style={{marginBottom: '25px', boxShadow: '1px 1px 5px #ccc', border:'none'}}>
//         <Row>
//           <Col md="4" >
//             <Link href={`/movie-detail?id=${movie.id}`}>
//               <CardImg  width="100%" height="235px" src={process.env.MOVIE_IMG_URL +
//               movie.poster_path} alt={movie.title} />
//             </Link>
//           </Col>

//           <Col >
//             <CardBlock style={{ borderBottom: '1px solid #3f3f3f'}}>
//               <h5 style={{marginBottom: '15px'}}>
//                 <Link href={`/movie-detail?id=${movie.id}`}>
//                   <a style={{textDecoration: 'none'}}>
//                     {movie.title.length > 23 ?
//                       movie.title.substring(0, 23)+ ' ...' :
//                       movie.title
//                     }
//                 </a>
//                 </Link>
//                 <span style={{float:'right'}}>
//                   {movie.vote_average} 	{' '}
//                   <FontAwesome
//                     name='star'
//                     size='1x'
//                   />
//                 </span>
//               </h5>
//               <CardSubtitle>
//                 <FontAwesome
//                   name="calendar"
//                   size='1x'
//                 /> 	&nbsp;
//                 {new Date(movie.release_date).getFullYear()}

//               </CardSubtitle>
//               <br />
//               <CardText>
//                 {movie.overview.length > 120 ?
//                   movie.overview.substring(0, 120)+ ' ...':
//                   movie.overview
//                 }
//               </CardText>

//             </CardBlock>


//               <Col style={{ backgroundColor: '#ccc'}}>
//                 lalal
//               </Col>

//           </Col>
//         </Row>


//       </Card>
//   );
// };

const lengthTitle = 5;
const lengthOverview = 25;


const Movie = (props) => {
  let movie = props.movie;
  let genres = props.genres;
  return (

    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="content-movie">
        <div className="img">
          <Link href={`/movies/movie-detail?id=${movie.id}`}>
            <a>
              <img  width="100%" height="278px" src={process.env.MOVIE_IMG_URL +
              movie.poster_path} alt={movie.title} />

              <div className="meta">
                <FontAwesome
                  name="heartbeat"
                  style={{ fontSize: '25px', color: '#c0392b'}}
                />
              </div>
            </a>
          </Link>


        </div>

        <div className="content">
          <div className="info" >
            <div className="title">
              <Link href={`/movies/movie-detail?id=${movie.id}`}>
                <a className="link_title">
                  {MoviesService.reduceWordsText(movie.title,lengthTitle)}
                </a>
              </Link>

              <span style={{float:'right'}}>
                {movie.vote_average.toFixed(1)} 	{' '}
                <FontAwesome
                  name="star"
                />
              </span>
            </div>

            <div className="release_day">
              <FontAwesome
                name="calendar"
              /> 	&nbsp;
              {new Date(movie.release_date).getFullYear()}

              <span className="genres">
                <i>{MoviesService.reducerLengthText(genres, 35)}</i>
              </span>
            </div>

            <div className="overview">
              {MoviesService.reduceWordsText(movie.overview,lengthOverview)}
            </div>
          </div>



          <div className="more_info">
            <Link href={`/movies/movie-detail?id=${movie.id}`}>
              <a >
                More info
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
