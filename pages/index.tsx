import React, {useState, useEffect} from 'react';
import {AppBar, Toolbar, Button} from '@mui/material';
import FruchtListe from './fruchtliste';
import Addiere from './addiere';

export default function Index() {
    const [tab, setTab] = useState('tab1');

    return (<>
    <AppBar position="static">
        <Toolbar>
            <Button color="inherit" onClick={() => setTab('tab1')}>
                Tab 1
            </Button>
            <Button color="inherit" onClick={() => setTab('tab2')}>
                Tab 2
            </Button>
            <Button color="inherit" onClick={() => setTab('addition')}>
                Addieren
            </Button>
        </Toolbar>
    </AppBar>

    {tab === 'tab1' && (<><h1>Inhalt Tab 1</h1></> )}
    {tab === 'tab2' && (<><h1><FruchtListe /></h1></> )}
    {tab === 'addition' && (<><h1><Addiere /></h1></> )}

    </>)
}