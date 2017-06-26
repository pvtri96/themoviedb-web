import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row} from 'reactstrap';
import stylesheet from '../people/People.scss';
import TopHeader from './PersonDetailComponent/TopHeader';
import PersonInf from './PersonDetailComponent/PersonInf';
import PersonContent from './PersonDetailComponent/PersonContent';

class PersonDetail extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <TopHeader />
        <Row className = "per_inf">
          <PersonInf />
          <PersonContent />
        </Row>
      </div>
    );
  }
}
const personConnect = connect()(PersonDetail);

export default personConnect;

