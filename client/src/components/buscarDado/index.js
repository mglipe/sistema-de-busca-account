import React, {useState} from "react";
import lup from '../../assets/search.svg';
import './estilo.css';
import Button from '@mui/material/Button'
import  Dialog  from "@mui/material/Dialog";
import  TextField from '@mui/material/TextField'
import  DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import  DialogContentText  from "@mui/material/DialogContentText";
import  DialogTitle  from "@mui/material/DialogTitle";

export default function BuscarDado(){

    const [open, setOpen] = useState(false)

    const handleClickOpen = ()=>{
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    return <section className="container-buscar-dados">
        <div className="container-busca">
            <label>
                <img className="img-busca" src={lup} alt="lupa"/>
                <input className="input-busca" type="text" placeholder="Search for Account"/>
            </label>
        </div>
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Insert Datas</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Insert the datas for to record in database
                    </DialogContentText>
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="account"
                        label="account"
                        fullWidth
                        variant="standard"
                    />
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="email"
                        label="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField 
                        autoFocus
                        margin="dense"
                        id="password"
                        label="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
        <Button variant="outlined" onClick={handleClickOpen}>register account data</Button>
    </section>
}