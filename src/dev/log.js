import React from 'react'
import PropTypes from 'prop-types'

const Log = ({ name, data }) => {
  return (
    <div className="my-4">
      <pre>{name}:</pre>
      <pre className="alert alert-dark">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

Log.propTypes = {
  name: PropTypes.string,
  data: PropTypes.object,
}

Log.default = {
  name: 'Log',
  data: null,
}

export default Log;
