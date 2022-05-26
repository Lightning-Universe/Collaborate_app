import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { CopyBlock, dracula } from "react-code-blocks";
import { styled } from "@mui/material/styles";
import Train from './Train';
import ScrollableFeed from 'react-scrollable-feed'

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

function Main() {

  const [logState, setLogState] = React.useState('\nLogs will appear here once training begins.')

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container maxWidth="100%" sx={{ background: 'linear-gradient(to right bottom, #8038d1, #1d1e82)' }}>
        {/* Hero unit */}
        <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 8, pb: 6, display: 'flex' }}>
          <Container sx={{ flex: 1, justifyContent: "center", display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContentNoPadding>
                <Box sx={{ height: "800px", overflowY: 'auto', width: '100%', pb: 0, backgroundColor: '#282a36' }}>
                  <ScrollableFeed>
                    <CopyBlock
                      text={logState}
                      language={"bash"}
                      showLineNumbers={false}
                      wrapLines
                      theme={dracula}
                      customStyle={{ paddingLeft: 20 }}
                    />
                  </ScrollableFeed>
                </Box>
              </CardContentNoPadding>
            </Card>
          </Container>
          {Train({ logState, setLogState })}
        </Container>
        {/* End hero unit */}
        <Container maxWidth="xl"
          component="footer"
        >

        </Container>
        {/* Footer */}
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 4,
            py: [3, 20],
          }}
        >

        </Container>
      </Container>

      {/* End footer */}
    </React.Fragment>
  );
}

export default function App() {
  return <Main />;
}
