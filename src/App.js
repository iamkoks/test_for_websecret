import React from 'react';

import { AppStyled } from "./app.styled";
import { GlobalStyle } from "./global-style";
import {Card, Container, Filters} from "./components";
function App() {
    return (
        <AppStyled>
            <GlobalStyle/>
            <Container/>
        </AppStyled>
    );
}

export default App;
