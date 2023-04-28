import React, { useState } from 'react'
import { Backdrop, CircularProgress, Button } from '@mui/material'

export default function BackdropLoading() {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  )
}
