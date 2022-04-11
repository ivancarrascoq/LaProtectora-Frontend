// import React, { Component } from 'react';
import React from 'react';
// import { Router, Switch, Route, Link, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getRendicionAbiertaById } from '../services/rendicionesService';

// class RendicionesC extends Component {

const RendicionesA = () => {
    // const params = useParams();
    // const id = params.id;
    const { id } = useParams();
    // const id = params.id;
    // console.log('test', id);
    const rendicion = getRendicionAbiertaById(id);
    console.log(rendicion);
    return (
        <React.Fragment>
            <h1>Rendiciones Abiertas - { id }</h1> 
            
            {/* { rendicion.id } */}
            {/* { rendicion. } */}
            
        </React.Fragment> 
    );
}
 
export default RendicionesA;