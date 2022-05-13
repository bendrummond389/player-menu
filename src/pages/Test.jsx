import React from "react";

import axios from "axios";
import { Box, Button } from "@mui/material";
import { async } from "@firebase/util";
import {
  addNewUser,
  updateArrayOnServer,
} from "../helperFunctions/ServerFunctions";

export default function Test() {
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file)
    console.log(base64)

  }

    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error)
        };
        
      });
    };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
    </div>
  );
}
