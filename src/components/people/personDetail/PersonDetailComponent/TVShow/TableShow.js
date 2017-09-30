import React, { Component } from 'react';
import {Row, Table} from 'reactstrap';
import PeopleServices from '../../../../../services/people/PeopleServices';
import PopoverItem from '../PopoverItem';

const renderAsCrew = ( valueCharacter, valueEpisode) => {
  if(valueEpisode != null){
    return (
      <span> - (<i>{valueEpisode} episode</i>)</span>
    );
  }
  if(valueCharacter != null || valueCharacter != '' ){
    return (
      <span> as <i>{valueCharacter}</i></span>
    );
  }
  else return <span></span>;
};

class RenderCrew extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  renderCrew(array) {
    if(array.length != 0){
      return (
        <Row className="per_movies_content">
          <div>
            <h5>{array[0].department}</h5>
            {array.map(item => (
              <Table className="tb_movies" key={item.credit_id} >
                <tbody>
                  <tr >
                    <th scope = "row" className = "tb_year">
                      {item.first_air_date && PeopleServices.reduceYear(String(item.first_air_date), 1)}
                    </th>
                    <td className = "tb_view" >
                      <PopoverItem id={item.credit_id} />
                    </td>
                    <td className = "tb_movie"><b>{item.name}</b>
                      {renderAsCrew(item.character, item.episode_count )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            )) }
          </div>
        </Row>
      );
    }
    else return <div></div>;
  }

  render() {
    return (
      <div>
        {this.renderCrew(this.props.array)}
      </div>
    );
  }
}

RenderCrew.propTypes = {

};

export default RenderCrew;
