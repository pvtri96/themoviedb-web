// import Master from '../../src/containers/Master';
// // import Details from '../../src/components/tvshow-details/Details';
// import withRedux from 'next-redux-wrapper';
// import { getStore } from '../../src/redux';
// import React, { Component } from 'react';
// import { detailsAction } from '../../src/redux/detail';
// import TVShowDetails from '../../src/components/details/Details';

// // const TVShowDetails = (props) => (
// //   <Master>
// //     <Details id={ props.url.query.id } />
// //   </Master>
// // );

// class Index extends Component {
//   static async getInitialProps({store, query})
//   {
//     await store.dispatch(detailsAction.fetchDetails(query.id));
//   }

//   render() {
//     return (
//       <Master>
//         <TVShowDetails></TVShowDetails>
//       </Master>
//     );
//   }
// }

// export default withRedux(getStore)(Index);

