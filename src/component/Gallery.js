import React from 'react';
import "../CSS/gallery.css"

// Import your images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/SSEM.jpg';
import image3 from '../assets/logo.png'
import image4 from '../assets/logo.png'

// Import other necessary components and data

const images = [image1, image2, image3,image2]; // Add more images as needed

const Gallery = () => {
  return (
    <div>
      <div className="gallery">
        <h3>Image Gallery</h3>
        <p>here you can find the images from our work in the field:</p>
        <div className="gallery-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Project Image ${index + 1}`} />
            
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
