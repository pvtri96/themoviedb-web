import React from 'react';
import Master from '../src/containers/Master';
import {getStore} from '../src/redux';
import withRedux from 'next-redux-wrapper';
import TVShows from '../src/components/listViews/List';

const Index = () => {
  return (
    <Master>
      <TVShows></TVShows>
    </Master>
  );
};

Index.propTypes = {

};

export default withRedux(getStore)(Index);
// =======
// import Movies from './movies';

// const Index = () => {
//   return (
//     <div>
//       <Movies />
//     </div>
//   );
// };

// export default Index;
// >>>>>>> origin/master
