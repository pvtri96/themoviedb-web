
import React, {Component} from 'react';
import { connect} from 'react-redux';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { movieSelector } from '../../../redux/movies/detail';
import moviesService from '../../../service';

class Social extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let reviews = this.props.reviews;
    if( !reviews)
      return (<div></div>);
    // if(reviews.length == 0 )
    //   return (<div>We don't have any reviews for this movie. Would you like to write one?</div>);
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

        {reviews.length !== 0 ?
          <div>
            <div className="grouped">
              <div className="avatar">
                <img width="100" src="../../../../static/image/user-image.png" alt="user image"/>
              </div> {/* avatar */}

              <div className="info">
                <h4>A review by {review.author}</h4>
                <p><strong>By</strong> {review.author}</p>
                <div >
                  <ReactMarkdown source={moviesService.reduceWordsText(review.content,105)} />
                  <Link href={review.url}>
                    <a target="_blank" className="link"><b>Read more</b></a>
                  </Link>
                </div>
              </div>
            </div>

            <a className="link"><h5>Read All Reviews</h5></a>

            <br/>
          </div>
          :
          <div>
            <div className="no_review">We don't have any reviews for this movie. Would you like to write one?</div>
          </div>
        }
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
