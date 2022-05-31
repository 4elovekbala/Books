import { TextField, Button, Icon, Modal, Box, Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";

const Search = () => {
   const [value, setValue] = useState<string>('');
   const [modal, setModal] = useState<boolean>(false);

   const handleChange = (event : React.ChangeEvent<HTMLInputElement>) : void => {
      setValue(event.currentTarget.value);
   }

   const handleClick = (event : React.MouseEvent<HTMLInputElement | HTMLButtonElement>) : void => {
      if(value !== ''){
         console.log(value);
      } else {
         setModal(true);
      }
   }

   const handleClose = () => setModal(false);

   return (
      <Container sx={{
         display : "flex",
         justifyContent: "center",
         alignItems : "stretch",
      }}>
         <TextField
            value={value}
            onChange={handleChange}
            id="outlined-search" label="Search field" type="search" 
            sx={{
               width : 0.8,
            }}
            />
         <>
            <Button variant="contained" onClick={handleClick}
            startIcon={<Icon component={SearchIcon} 
            sx={{
               minWidth : 0.2
            }}
            />}
            >Search</Button>
         </>
         {
            modal && (
               <Modal
                  open={modal}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                  onClose={handleClose}
               >
                  <Box sx={{
                     position: 'absolute' as 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     width: 400,
                     bgcolor: 'background.paper',
                     border: '2px solid #000',
                     boxShadow: 24,
                     p: 4,
                  }}>
                     <h2 id="parent-modal-title">We cannot find, type something</h2>
                  </Box>
               </Modal>
            )
         }
       </Container>
   )
}

export default Search;