console.log('The script.js loaded!');

const dinoNames = async () => {
   try {
      const data = await fetch('/api/v1/dinosaurs/names');
      const name = await data.json();
      const dinoName = name[0].join(' ');
      document.querySelector('#dinoName').textContent = dinoName;
      document.querySelector('#dinoName').style.display = 'block';
      // console.log(name[0].join(' '));
   } catch (error) {
      console.log(error);
   }
};

const dinoImages = async () => {
   try {
      const data = await fetch('/api/v1/dinosaurs/images');
      const image = await data.json();
      const img = document.querySelector('#dinoImage');
      const dinoImageData = image.value[Math.floor(Math.random() * 10)];
      const dinoImage = dinoImageData.thumbnailUrl;
      const dinoImageAlt = dinoImageData.name;
      // console.log(image.value[Math.floor(Math.random() * 10)].thumbnailUrl);
      img.src = dinoImage;
      img.alt = dinoImageAlt;
      document.querySelector('#dinoImage').style.display = 'block';
   } catch (error) {
      console.log(error);
   }
};
document.querySelector('#dinobtn').addEventListener('click', () => {
   document.querySelector('#dinoName').style.display = 'none';
   document.querySelector('#dinoImage').style.display = 'none';
   dinoImages();
   dinoNames();
});
// dinoNames('/api/v1/names');

// https://www.youtube.com/watch?v=wYALykLb5oY

// console.log(Math.floor(Math.random() * 10));
