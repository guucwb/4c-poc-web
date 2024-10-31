import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';  

import { useUID } from '@twilio-paste/core/dist/uid-library';
import { Theme } from '@twilio-paste/core/theme';
import { Box } from '@twilio-paste/core/box';
import { Tabs, TabList, Tab, TabPanels } from '@twilio-paste/core/tabs';

import Header from './components/Header';
import RegistrationDetailsTabPanel from './components/RegistrationDetailsTabPanel';
import NegotiationTabPanel from './components/NegotiationTabPanel';
import KnowledgeBaseTabPanel from './components/KnowledgeBaseTabPanel';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [noData, setNoData] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const selectedId = useUID();

  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(window.location.search));
    
    if (params.phoneNumber && params.phoneNumber !== "") {
      let tempPhone = params.phoneNumber;
      tempPhone = tempPhone.replace('whatsapp:+', '');
      tempPhone = tempPhone.replace('whatsapp%3A%2B', '');
      setPhoneNumber(tempPhone);
    } else {
      setNoData(true);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (phoneNumber && phoneNumber !== "") {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://paschoalotto-7229.twil.io/getData?key=2XT8P3Y7VL&phoneNumber=' + phoneNumber,
        headers: { 
          'Content-Type': 'application/json', 
        }
      };

      axios.request(config)
        .then((response) => setData(response.data))
        .catch((_err) => { console.log('phone number not found') });
    }
  }, [phoneNumber]);

  document.body.style.height = "100vh";
  document.body.style.overflowY = 'visible';

  return ( 
    <>
      <Theme.Provider theme="twilio">
        <Box padding="space60" className="container">
          { !noData && !isEmpty(data) &&
            <>
              <Header />
              <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
                <TabList aria-label="Horizontal product tabs">
                    <Tab id={selectedId}>Dados Cadastrais</Tab>
                    <Tab>Negociação</Tab>
                    <Tab>Base de Conhecimento</Tab>
                </TabList>
                <TabPanels>
                    <RegistrationDetailsTabPanel data={data} />
                    <NegotiationTabPanel data={data} />
                    <KnowledgeBaseTabPanel data={data} />
                </TabPanels>
            </Tabs>
            </>
          }
          {
            !noData && isEmpty(data) &&
            <>
              <Header />
              <NotFound />
            </>
          }
          { noData && 
            <img className="main-logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJa7oBBWKZgiLDr2fBLN2Be5CMLTLCUnRag&s' alt='logo' />
          }
        </Box>
      </Theme.Provider>
    </>
  );
}

export default App;
