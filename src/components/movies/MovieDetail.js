import React , { Component }from 'react';
import {Card, CardImg,CardTitle,
  Row, Col,CardText, Button,

  CardBlock} from 'reactstrap';
import PropTypes        from 'prop-types';
import FontAwesome      from 'react-fontawesome';
import { connect } from 'react-redux';
import { movieSelector , movieActions} from '../../redux/movies/movie';

class MovieDetailShowing extends Component
{
  constructor(props)
  {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    window.history.back();
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchMovieDetail(this.props.id);
  }

  render()
  {
    let movieDetail = this.props.movieDetail;
    return (
      <Card key={movieDetail.id}>
        <Row>
          <Col md="4" >
            <CardImg  width="90%" src={process.env.MOVIE_IMG_URL +
            movieDetail.poster_path} alt={movieDetail.original_title} />
          </Col>

          <Col>
            <CardBlock>
              <CardTitle>
                <h1>{movieDetail.original_title} ({new Date(movieDetail.release_date).getFullYear()})</h1>
              </CardTitle>
              <br />

              <CardText>
                <h3>Overview</h3>
                {movieDetail.overview}
              </CardText>

              <Button onClick={this.goBack} >
                <FontAwesome
                  name='arrow-left'
                />
                  &nbsp;&nbsp;Back to List</Button>
            </CardBlock>
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movieDetail: movieSelector(state).detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetail : (id) => dispatch(movieActions.fetchMovieDetail(id))
  };
};

MovieDetailShowing.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  goBack: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailShowing);
