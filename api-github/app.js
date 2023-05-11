/* 
Crea una aplicación Node.js que consuma la API de GitHub y muestre los 10 repositorios
más populares del usuario "google". 
*/

const axios = require('axios');

const username = 'google';
//https://api.github.com/users/google/repos?sort=stars&per_page=10

axios.get(`https://api.github.com/users/${username}/repos?sort=stars&per_page=10`)
  .then(response => {
    const repos = response.data;
    console.log(`Estos son los 10 repositorios más populares de ${username} son:`);
    repos.forEach(rep => {
      console.log(`- ${rep.name} (${rep.stargazers_count} estrellas)`);
    });
  })
  .catch(error => {
    console.error(`Ocurrió un error:`, error.response.data);
  });
