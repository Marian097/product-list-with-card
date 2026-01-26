import { useState, useEffect } from "react"
import type { DataApi } from "@/types/Data"


export default function Shop() {
  const [data, setData] = useState< DataApi[]>([]);

  useEffect(() => {
    fetch("/data.json")
    .then(response => response.json())
    .then(setData)
  }, [])
  console.log(data)
  return {
    data
  };
}
