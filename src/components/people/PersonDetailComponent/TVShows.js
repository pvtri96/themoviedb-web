import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import stylesheet from '../../people/People.scss';
import { personSelector } from '../../../redux/person';
import PeopleServices from '../../../../services/PeopleServices';

class TVShows extends Component {
  constructor(props){
    super(props);
  }

  renderCrew(array){
    let renderCrew;
    if(array.length != 0){
      renderCrew =(
        <Row className="per_movies_content">
          <h5>{array[0].department}</h5>
          {array.map(item => (
            <div key={item.credit_id}>
              <Table className="tb_movies" key={item.credit_id}>
                <tbody>
                  <tr >
                    <th scope = "row" className = "tb_year">{PeopleServices.reduceYear(String(item.first_air_date), 1)}</th>
                    <td className = "tb_view" ><FontAwesome name = 'dot-circle-o' /></td>
                    <td className = "tb_movie"><b>{item.name}</b> - (<i>{item.episode_count} episode</i>) as <i>{item.character}</i></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )) }
        </Row>
      );
      return renderCrew;
    }
  }

  render(){
    console.log(this.props.tv_credits);
    let tv_credits = this.props.tv_credits;
    let tv_credits_sort_des = PeopleServices.sortByKey(tv_credits.cast,"first_air_date");
    let tv_credits_cast = tv_credits_sort_des.reverse();

    //production
    let crew = PeopleServices.splitArray(tv_credits.crew, "Crew");
    let direct = PeopleServices.splitArray(tv_credits.crew, "Directing");
    let write = PeopleServices.splitArray(tv_credits.crew, "Writing");

    //render each array of department
    let crewRender = this.renderCrew(crew);
    let directingRender = this.renderCrew(direct);
    let writingRender = this.renderCrew(write);

    return (
      <div className="per_movies">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <Row className="per_movies_content">
          {tv_credits_cast.map(item => (
            <Table className="tb_movies" key={item.credit_id}>
              <tbody>
                <tr >
                  <th scope = "row" className = "tb_year">{PeopleServices.reduceYear(String(item.first_air_date), 1)}</th>
                  <td className = "tb_view" ><FontAwesome name = 'dot-circle-o' /></td>
                  <td className = "tb_movie"><b>{item.name}</b> - (<i>{item.episode_count} episode</i>) as <i>{item.character}</i></td>
                </tr>
              </tbody>
            </Table>
          )) }
        </Row>
        {crewRender}
        {directingRender}
        {writingRender}
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
