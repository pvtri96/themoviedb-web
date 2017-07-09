import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import stylesheet from '../../../People.scss';
import { personSelector } from '../../../../../redux/people/person';
import PeopleServices from '../../../../../services/people/PeopleServices';
import RenderCrew from './TableShow';
import TableShowComponent from './TableShowComponent';

class TVShows extends Component {
  constructor(props){
    super(props);
  }

  renderCrew(array){
    return <RenderCrew array={array}/>;
  }

  render(){
    //console.log(this.props.tv_credits);
    let tv_credits = this.props.tv_credits;
    let tv_credits_sort_des = TableShowComponent.renderCastTV(tv_credits.cast, "first_air_date");
    let tv_credits_cast = TableShowComponent.renderCrew(tv_credits_sort_des);

    let renderCrew = TableShowComponent.renderSubCrewTV(tv_credits.crew, "Crew", "first_air_date" );
    let renderDirecting = TableShowComponent.renderSubCrewTV(tv_credits.crew, "Directing", "first_air_date" );
    let renderWriting = TableShowComponent.renderSubCrewTV(tv_credits.crew, "Writing", "first_air_date" );
    let rendercreating = TableShowComponent.renderSubCrewTV(tv_credits.crew, "Creator", "first_air_date" );

    return (
      <div className="per_movies">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        {tv_credits_cast}
        {renderCrew}
        {renderDirecting}
        {renderWriting}
        {rendercreating}
      </div>
    );
  }
}

TVShows.propTypes = {
  tv_credits: PropTypes.object,

};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tv_credits: personSelector(state).tv_credits,
  };
};

const TVShowConnect = connect(mapStateToProps, undefined)(TVShows);
export default TVShowConnect;
