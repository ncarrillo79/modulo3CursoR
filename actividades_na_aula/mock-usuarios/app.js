const express = require('express')

const request = new Request({
    url: 'https://randomuser.me/api/?results=30',
    method: 'GET'
  });
  fetch(request);