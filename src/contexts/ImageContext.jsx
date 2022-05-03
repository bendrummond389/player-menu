import React, { createContext, useContext, useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { database } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const ImageContext = createContext();

export function useImage() {
  return useContext(ImageContext);
}

export function ImageProvider({ children }) {
  const [imageUrl, setImageUrl] = useState(null);

  async function uploadImage(image, userId) {
    const imageRef = ref(storage, userId);
    await uploadBytes(imageRef, image);
    let url = await getDownloadURL(imageRef);
    setImageUrl(url);
    await setDoc(doc(database, "images", userId), {
      image: url,
    });
  }

  async function loadImage(userId) {
    const imageDoc = await getDoc(doc(database, "images", userId));
    if (imageDoc.exists()){
      setImageUrl(imageDoc.data().image);
      return;
    }
    else{
      setImageUrl(null)
      return;
    };
  }

  function removeImage() {
    setImageUrl(null)
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
