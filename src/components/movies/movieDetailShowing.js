import React , { Component }from 'react';
import {Card, CardImg,CardTitle,
  Row, Col,CardText, Button,

   CardBlock} from 'reactstrap';
import PropTypes        from 'prop-types';
import FontAwesome      from 'react-fontawesome';
import { MovieActionCreators } from '../../redux/movies/movie';
import { connect } from 'react-redux';



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

  componentDidMount()
  {
    this.props.onLoad(this.props.id);
  }

  render()
  {
    let movie = this.props.movie;
    return (
      <Card key={movie.id}>
        <Row>
          <Col md="4" >
            <CardImg  width="90%" src={process.env.MOVIE_IMG_URL +
            movie.poster_path} alt={movie.original_title} />
          </Col>

          <Col>
            <CardBlock>
              <CardTitle>
                <h1>{movie.original_title} ({new Date(movie.release_date).getFullYear()})</h1>
              </CardTitle>
              <br />

              <CardText>
                <h3>Overview</h3>
                {movie.overview}
              </CardText>

              <Button onClick={this.goBack} >
                <FontAwesome
                    name='arrow-left'
                    size='1x'
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
  return {
    movie: state.movieDetail.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad : (id) => dispatch(MovieActionCreators.movieDetailFetch(id))
  }
}

MovieDetailShowing.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  goBack: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailShowing);
