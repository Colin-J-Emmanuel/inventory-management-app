'use client'
import Image from "next/image";
import{useState, useEffect} from 'react'
import { Firestore, getDocs } from "firebase/firestore";
import {Box, Typography} from '@mui/material'
import { firestore } from "./firebase";

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] =  useState(false)
  const [itemName, setitemName] =  useState('')

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc)=>{
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
  }

  useEffect(() => {
    updateInventory()
  }, [])

  return (
    <Box>
      <Typography variant = "h1">Inventory Management</Typography>
    </Box>
  ) 
}
