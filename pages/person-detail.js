import React, {Component}from 'react';
import Master from '../src/containers/Master';
import PersonDetail from '../src/components/people/PersonDetail';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../src/redux';
import { personActions } from '../src/redux/person';

// const Detail = props => {
//   return (
//     <Master>
//       <div>
//         <div>
//           <PersonDetail id={props.url.query.id} />
//         </div>
//       </div>
//     </Master>
//   );
// };
class Detail extends Component{
  static async getInitialProps({store, query}) {
    await store.dispatch(personActions.fetchPerson(query.id));
  }
  render(){
    return (
      <Master>
        <div>
          <div>
            <PersonDetail />
          </div>
        </div>
      </Master>
    );
  }
}
export default withRedux(getStore)(Detail);
