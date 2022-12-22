import React from 'react'
import PropTypes from 'prop-types';

export default function Proptypecheck({name,age}) {
  return (
    <h2> My name is {name} and i am {age}. Checking proptype...</h2>
  )
}
Proptypecheck.propTypes={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}