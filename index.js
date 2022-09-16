require('dotenv').config();
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 3000;

//Get the dinosaur name from the api

app.get('/api/v1/dinosaurs/names', async (req, res) => {
   try {
      const data = await fetch(
         'https://dinoipsum.com/api?format=json&paragraphs=1&words=2'
      );
      const dinoNames = await data.json();

      res.status(200).json(dinoNames);
   } catch (error) {
      res.status(500).json({ msg: error });
   }
});

//Get the dinosaur images from the api

app.get('/api/v1/dinosaurs/images', async (req, res) => {
   try {
      const url =
         'https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=50';

      const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Key': process.env.API_URI,
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
         },
      };

      const data = await fetch(url, options);
      const dinoImages = await data.json();
      res.status(200).json(dinoImages);
   } catch (error) {
      console.log(error);
   }
});

app.use(express.static('./public'));
app.listen(port, () => {
   console.log(`The server is listening to port: ${port}`);
});
