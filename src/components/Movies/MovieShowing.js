import React, { Component } from 'react';
import {Card, CardImg,CardSubtitle,
  Row, Col,CardText,

   CardBlock} from 'reactstrap';
import Link from 'next/link';
import FontAwesome from 'react-fontawesome';



const MovieShowing = (props) => {
  let movie = props.movie;
  return (

      <Card style={{marginBottom: '25px', boxShadow: '1px 1px 5px #ccc', border:'none'}}>
        <Row>
          <Col md="4" >
            <CardImg  width="100%" height="235px" src={process.env.MOVIE_IMG_URL +
            movie.poster_path} alt={movie.title} />
          </Col>

          <Col>
            <CardBlock>
              <h5 style={{marginBottom: '15px'}}>
                <Link as={`/movie/detail/id=${movie.id}`} href={`/movieDetail?id=${movie.id}`}>
                  <a style={{textDecoration: 'none'}}>
                    {movie.title.length > 23 ?
                      movie.title.substring(0, 23)+ ' ...' :
                      movie.title
                    }
                </a>
                </Link>
                <span style={{float:'right'}}>
                  {movie.vote_average} 	{' '}
                  <FontAwesome
                    name='star'
                    size='1x'
                  />
                </span>
              </h5>
              <CardSubtitle>
                <FontAwesome
                  name="calendar"
                  size='1x'
                /> 	&nbsp;
                {new Date(movie.release_date).getFullYear()}

              </CardSubtitle>
              <br />
              <CardText>
                {movie.overview.length > 150 ?
                  movie.overview.substring(0, 150)+ ' ...':
                  movie.overview
                }
              </CardText>

            </CardBlock>
          </Col>
        </Row>
      </Card>
  );
};

export default MovieShowing;
