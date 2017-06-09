import React from 'react';
import PropTypes from 'prop-types';
import stylesheet from 'styles/index.scss'
// or, if you work with plain css
// import stylesheet from 'styles/index.css'


const Index = props => {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div>
            Hello NextJS
        </div>
      </div>
    );
};

Index.propTypes = {

};

export default Index;
