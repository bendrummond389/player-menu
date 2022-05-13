import React, { createContext, useContext, useEffect, useState } from "react";


const ImageContext = createContext();

export function useImage() {
  return useContext(ImageContext);
}

export function ImageProvider({ children }) {
  const [imageUrl, setImageUrl] = useState(null);

  async function uploadImage(image, userId) {

  }

  async function loadImage(userId) {

  }

  function removeImage() {

  }

  const value = {
    imageUrl,
    uploadImage,
    loadImage,
    removeImage,
  };
  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
}
