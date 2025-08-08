// import mysql from 'mysql2';
import express from 'express';
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!!!' });
});


app.post('/api', (req, res) => {
    res.status(200).json({ message: "Welcome to the API", version: "1.0.0", author: "John Mark Francisco" });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});