import React from 'react'
// Endpoint!
const API = "http://localhost:3000/sushis"

const GET_SUSHI = () => {
   return  fetch(API)
    .then(resp => resp.json())
};

export default { GET_SUSHI }