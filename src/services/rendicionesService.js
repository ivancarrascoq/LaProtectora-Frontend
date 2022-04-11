// import React, { Component } from 'react';

const rendicionesCerradas = [
  {
    id: "1095",
    mes_gasto: "Nov-2021",
    subvencion: "PRO",
    username: "industriallasnieves@protectora.cl",
    attached: true
  },
  {
    id: "1094",
    mes_gasto: "Nov-2021",
    subvencion: "PRO",
    username: "industriallasnieves@protectora.cl",
    attached: true
  },
  {
    id: "1093",
    mes_gasto: "Nov-2021",
    subvencion: "GEN",
    username: "industriallasnieves@protectora.cl",
    attached: false 
  },
  {
    id: "1150",
    mes_gasto: "Ene-2022",
    subvencion: "GEN",
    username: "tecnicolasnieves@protectora.cl",
    attached: true
  },
  {
    id: "1149",
    mes_gasto: "Dic-2021",
    subvencion: "PRO",
    username: "josefinagana@protectora.cl",
    attached: true
  },
  {
    id: "1148",
    subvencion: "MAN",
    mes_gasto: "Dic-2021",
    username: "josefinagana@protectora.cl",
    attached: false
  },
  {
    id: "1147",
    subvencion: "SEP",
    mes_gasto: "Dic-2021",
    username: "josefinagana@protectora.cl",
    attached: false
  },
  {
    id: "1146",
    mes_gasto: "Dic-2021",
    subvencion: "GEN",
    username: "josefinagana@protectora.cl",
    attached: false
  },
  {
    id: "1145",
    mes_gasto: "Nov-2021",
    subvencion: "SEP",
    username: "josefinagana@protectora.cl",
    attached: false
  },
  {
    id: "1144",
    mes_gasto: "Dic-2021",
    subvencion: -"GEN",
    username: "josefinagana@protectora.cl",
    attached: true 
  },
];

const rendicionesAbiertas = [
  {
    id: "1021",
    mes_gasto: "Jun-2021",
    subvencion: "SEP",
    username: "gerenciafepi@protectora.cl",
  },
  {
    id: "901",
    mes_gasto: "Dic-2021",
    subvencion: "GEN",
    username: "tecnicolasnieves@protectora.cl",
  },
  {
    id: "900",
    mes_gasto: "Dic-2021",
    subvencion: "DON",
    username: "miguelcruchaga@protectora.cl",
  },
  { id: "902", mes_gasto: "Dic-2021", subvencion: "GEN", username: "admin" },
  {
    id: "903",
    mes_gasto: "Dic-2021",
    subvencion: "DON",
    username: "tecnicolasnieves@protectora.cl",
  },
  { id: "777", mes_gasto: "Dic-2021", subvencion: "SEP", username: "admin" },
  { id: "744", mes_gasto: "Nov-2020", subvencion: "SEP", username: "admin" },
  {
    id: "388",
    mes_gasto: "Feb-2019",
    subvencion: "SEP",
    username: "tecnicolasnieves@protectora.cl",
  },
  { id: "351", mes_gasto: "Oct-2019", subvencion: "GEN", username: "admin" },
  {
    id: "343",
    mes_gasto: "Ene-2019",
    subvencion: "GEN",
    username: "miguelcruchaga@protectora.cl",
  },
];

const reporteById = [
  
];



export function getRendicionesAbiertas() {
  return rendicionesAbiertas;
}

export function getRendicionesCerradas() {
  return rendicionesCerradas;
}

export function getRendicionCerradaById(id) {
  return rendicionesCerradas.filter(r => r.id === id)
}

export function getRendicionAbiertaById(id) {
  return rendicionesAbiertas.filter(r => r.id === id)
}