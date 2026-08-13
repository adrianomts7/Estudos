import { useState, useEffect } from "react";

export default function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function() {
    const stored = JSON.parse(localStorage.getItem(key));
    return !stored ? initialState : stored;
  });

  
  useEffect(function() {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])

  return [value, setValue];
}