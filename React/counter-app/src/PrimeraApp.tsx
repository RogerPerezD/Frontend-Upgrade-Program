import React from 'react'
import PropTypes from 'prop-types'


interface Props{
    name?: string
}

const PrimeraApp: React.FC<Props> = ( { name }) =>{
    return <h1>Hola Mundo { name }</h1>
}


PrimeraApp.propTypes = {
    name: PropTypes.string
}

PrimeraApp.defaultProps = {
    name: 'Roger'
  };

export default PrimeraApp;