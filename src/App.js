import { useRef, useEffect, useState, } from "react";

export default function useWindowWidth(){
  const[width, setwidth] = useState(window.innerWidth);

  function headleReside(){
    setwidth(window.innerWidth)
  }
  useEffect(function setupListener() {
    window.addEventListener
  })
}