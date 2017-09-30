import React, { Component } from 'react';
import {Row, Table} from 'reactstrap';
import PeopleServices from '../../../../../services/people/PeopleServices';
import PopoverItem from '../PopoverItem';

const renderAsCrew = (valueJob, valueCharacter) => {
  if(valueJob !=null){
    return (
      <span> ... <i>{valueJob}</i></span>
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
          <h5>{array[0].department}</h5>
          {array.map(item => (
            <Table className="tb_movies" key={item.credit_id} >
              <tbody>
                <tr >
                  <th scope = "row" className = "tb_year">
                    {item.release_date && PeopleServices.reduceYear(String(item.release_date), 1)}
                  </th>
                  <td className = "tb_view" >
                    <PopoverItem id={item.credit_id} />
                  </td>
                  <td className = "tb_movie"><b>{item.title}</b>
                    {renderAsCrew(item.job, item.character)}
                  </td>
                </tr>
              </tbody>
            </Table>
          )) }
        </Row>
      );
    }
    else return <div><br /></div>;
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
