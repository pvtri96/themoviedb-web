import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import stylesheet from '../../../People.scss';
import { personSelector } from '../../../../../redux/people/person';
import RenderCrew from './TableShow';
import TableShowComponent from './TableShowComponent';


class Movies extends Component {
  constructor(props){
    super(props);
  }

  renderCrew(array){
    return <RenderCrew array={array}/>;
  }
  render(){

    //get list Movies , sort by year
    let know_for = this.props.know_for;
    let know_sort_cast_des = TableShowComponent.renderCastMovies(know_for.cast, "release_date");
    let know_sort_cast = TableShowComponent.renderCrew(know_sort_cast_des);

    let renderProduct = TableShowComponent.renderSubCrewMovie(know_for.crew, "Production", "release_date" );
    let renderDirecting = TableShowComponent.renderSubCrewMovie(know_for.crew, "Directing", "release_date" );
    let renderWriting = TableShowComponent.renderSubCrewMovie(know_for.crew, "Writing", "release_date" );
    let renderCrew = TableShowComponent.renderSubCrewMovie(know_for.crew, "Crew", "release_date" );
    return (
      <div className="per_movies">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        {know_sort_cast}
        {renderProduct}
        {renderDirecting}
        {renderWriting}
        {renderCrew}
      </div>
    );
  }
}

Movies.propTypes = {
  know_for: PropTypes.object,

};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    know_for: personSelector(state).know_for,
  };
};

const MoviesConnect = connect(mapStateToProps, undefined)(Movies);
export default MoviesConnect;
