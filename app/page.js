'use client'
import Image from "next/image";
import{useState, useEffect} from 'react'
import { collection, Firestore, getDocs } from "firebase/firestore";
import {Box, Typography, Modal, Stack, TextField} from '@mui/material'
import { firestore } from "./firebase";

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] =  useState(true)
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

  const addItem = async () => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDocs(docRef)

    if (docSnap.exists()) {
      const {quantity} = docSnap.data()
        await setDoc(docRef, {quantity: quantity + 1})
      }

      else {
        await setDoc(docRef, {quantity: 1})
      }
    await updateInventory()
  }

  const removeItem = async () => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDocs(docRef)

    if (docSnap.exists()) {
      const {quantity} = docSnap.data()
      if (quantity === 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, {quantity: quantity - 1})
      }
    }
    await updateInventory()
  }

  useEffect(() => {
    updateInventory()
  }, [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box 
    width="100vw" 
    height="100vh" 
    display="flex"
    justifyContent="center"
    alignItems="center"
    gap={2}
    >
      <Modal open={open} onClose={handleClose}>
        <Box
        position="absolute" 
        top="50%" 
        left="50%" 
        // transform="translate(-50%, -50%)"
        width={400}
        bgcolor="white"
        border="2px solid #000"
        boxShadow={24}
        p={4}
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          transform: "translate(-50%, -50%)",
        }}
        >
          <Typography variant="h6"> Add Item </Typography>
          <Stack width="100%" direction="row" spacing={2}></Stack>
          <TextField></TextField>
        </Box>
      </Modal>
      <Typography variant = "h1">Inventory Management</Typography>
    </Box>
  ) 
}