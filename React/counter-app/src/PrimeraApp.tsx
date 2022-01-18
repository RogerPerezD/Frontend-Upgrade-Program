import React from 'react'
import PropTypes from 'prop-types'


interface Props{
    saludo?: string
}

const PrimeraApp: React.FC<Props> = ( { saludo }) =>{
    return <h1>{ saludo }</h1>
}


PrimeraApp.propTypes = {
    saludo: PropTypes.string
}

PrimeraApp.defaultProps = {
    saludo: 'Hola soy Goku'
  };

export default PrimeraApp;