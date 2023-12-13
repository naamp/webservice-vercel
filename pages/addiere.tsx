import axios from 'axios';
import React, {useState} from 'react';
import {Button, TextField, Typography, Paper} from '@mui/material';


const Addiere = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [resultat, setResultat] = useState(0);

    // const addition = async() => {
    //     try {
    //         response = await axios.get('/api/')
    //     }
    // }

    return (
        <>
            <Paper elevation={5} style={{padding: '15px', maxWidth: '40px'}}>
                <Typography variant='h5' >Addition</Typography>
                <TextField
                    label="Zahl A"
                    value={a}
                    onChange={(e) => setA(parseInt(e.target.value,10) || 0)}
                    fullWidth
                    margin='normal'>
                </TextField>
                <TextField
                    label="Zahl B"
                    value={b}
                    onChange={(e) => setA(parseInt(e.target.value,10) || 0)}
                    fullWidth
                    margin='normal'>
                </TextField>
                <Button color="primary" onClick={addition}>
                    Addiere
                </Button>
            </Paper>
        </>
)}

export default Addiere;