import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import Bar from './Bar/Bar';
import MeasureTable from './MeasureTable';


const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: '#01579b' },
    secondary: { main: '#ffc107' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Bar />
      <Toolbar />
      <Container>
        <Box my={2}>
          <Paper>
            <MeasureTable />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
