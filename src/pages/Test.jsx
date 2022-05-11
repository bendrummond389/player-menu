import React from "react";

import axios from "axios";
import { Box, Button } from "@mui/material";
import { async } from "@firebase/util";

export default function Test() {
  const fetchData = async (id) => {
    try {
      const res = await fetch("http://localhost:5000/byId/" + id);
      const data = res.json();
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  fetchData(123).then(data => console.log(data.colors[3]))

  // const displayData = async (id) => {
  //   const data = await fetchData(id);

  //   return data.colors;
  // };
  return( <div>
    
    </div>);
}
