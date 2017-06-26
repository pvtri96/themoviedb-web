
import React, {Component} from 'react';
import { connect} from 'react-redux';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { movieSelector } from '../../../../redux/movies/movie';
import moviesService from '../../../../services/movies';

class Social extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let reviews = this.props.reviews;
    let review = moviesService.getRandomReview(reviews);
    return (
      <div>
        <div className="d-flex">
          <h4>Social</h4>
          <div className="menu">
            <div className="menu_item active">Reviews {reviews.length}</div>
            <div className="menu_item">Discussions</div>
          </div>
        </div> {/* Social */}

        <div className="grouped">
          <div className="avatar">
            <img width="100" src="https://football-board.de/img/default_user.jpg" alt="user image"/>
          </div> {/* avatar */}

          <div className="info">
            <h4>A review by {review.author}</h4>
            <p><strong>By</strong> {review.author}</p>
            <div >
              <ReactMarkdown source={moviesService.reduceWordsText(review.content,105)} />
              <Link href={review.url}>
                <a className="link"><b>Read more</b></a>
              </Link>
            </div>
          </div>
        </div> { /* grouded */}


        <Link href="#">
          <a className="link"><h5>Read All Reviews</h5></a>
        </Link>
        <br/>
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: movieSelector(state).reviews
  };
};

export default connect(mapStateToProps, undefined)(Social);
