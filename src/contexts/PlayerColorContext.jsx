import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from './AuthContext'
const PlayerColorContext = createContext();

export function usePlayerColor() {
  return useContext(PlayerColorContext);
}

export function PlayerColorProvider({ children }) {
  const { currentUser } = useAuth();
  const [playerColorArray, setPlayerColorArray] = useState(["none", "none", "none", "none"]);
  const [loading, setloading] = useState(true);

  async function loadArrayFromServer() {
    const res = await fetch("http://localhost:5000/byId/" + "pd3aJuJgWASwpkEZNO0OBkOGXZ03")
    const data = await res.json()
    setPlayerColorArray(data.colors)
    setloading(false)
  }

  async function updateArrayOnServer() {
    const res = await fetch("http://localhost:5000/" + currentUser.uid, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        id: currentUser.uid,
        colors: playerColorArray,
        url: "http://hello.com"
      })
    })
  }


  useEffect(() => {
    loadArrayFromServer()
  }, [])

  function getColorFromArray(index) {
    return playerColorArray[index];
  }

  function updateColorInArray(index, color) {
    let tempArray = playerColorArray;
    tempArray[index] = color;
    setPlayerColorArray(tempArray);
    updateArrayOnServer()
  }

  const value = {
    playerColorArray,
    getColorFromArray,
    updateColorInArray,
    loading,
  };

  return (
    <PlayerColorContext.Provider value={value}>
      {!loading && children}
    </PlayerColorContext.Provider>
  );
}
