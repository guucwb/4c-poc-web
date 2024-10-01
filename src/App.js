import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { useUID } from '@twilio-paste/core/dist/uid-library';
import { Theme } from '@twilio-paste/core/theme';
import { Box } from '@twilio-paste/core/box';
import { Tabs, TabList, Tab, TabPanels } from '@twilio-paste/core/tabs';

import Header from './components/Header';
import RegistrationDetailsTabPanel from './components/RegistrationDetailsTabPanel';
import NegotiationTabPanel from './components/NegotiationTabPanel';
import KnowledgeBaseTabPanel from './components/KnowledgeBaseTabPanel';
import './App.css';

function App() {
  const [task, setTask] = useState({});
  const selectedId = useUID();

  const fakeTask = { 
    attributes: {
      debt: {
        creditor: "Banco Itaú S/A",
        debtStatus: "Negativada",
        debtType: "Cartão de Crédito",
        originalDate: "25/03/2024",
        originalValue: "R$ 3.542,77",
        currentValue: "R$ 8.253,56"
      },
      registration: {
        fullName: "Gustavo Azevedo Cavalcanti",
        cpf: "197.XXX.XXX-80",
        rg: "240XXXX8-1",
        dob: "04/07/1975",
        cityState: "Guarulhos / SP",
        phoneNumber: "(11) 99280-8313",
        address: "Rua Áustria, 168 - Parque das Nações"
      }      
    }
  };

  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(window.location.search));
    if (params.task) {
      setTask(fakeTask);
      console.log('Task is found=');
      console.log(task);
    } else {
      console.log('Task is not found');
    }
    // eslint-disable-next-line
  }, []);

  document.body.style.height = "100vh";
  document.body.style.overflowY = 'visible';

  return ( 
    <>
      <Theme.Provider theme="twilio">
        <Box padding="space60" className="container">
          { !isEmpty(task) ?
            <>
              <Header />
              <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
                <TabList aria-label="Horizontal product tabs">
                    <Tab id={selectedId}>Dados Cadastrais</Tab>
                    <Tab>Negociação</Tab>
                    <Tab>Base de Conhecimento</Tab>
                </TabList>
                <TabPanels>
                    <RegistrationDetailsTabPanel task={task} />
                    <NegotiationTabPanel task={task} />
                    <KnowledgeBaseTabPanel task={task} />
                </TabPanels>
            </Tabs>
            </>
            :
            <img className="main-logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBkJcmAgPCYXjZWwzk-EGE_wKWO-MIIKEKw&s' alt='logo' />
          }
        </Box>
      </Theme.Provider>
    </>
  );
}

export default App;
