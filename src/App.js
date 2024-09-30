import { useState, useEffect } from 'react';
import { Theme } from '@twilio-paste/core/theme';
import { Box } from '@twilio-paste/core/box';
import Header from './components/Header';
import MainTabs from './components/MainTabs';
import './App.css';
import { isEmpty } from 'lodash';

function App() {
  const [task, setTask] = useState({});

  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(window.location.search));
    if (params.task) {
      setTask(JSON.parse(params.task));
      console.log('Task is found=');
      console.log(task);
    } else {
      console.log('Task is not found');
    }
    // eslint-disable-next-line
  }, []);

  return ( 
    <>
      <Theme.Provider theme="twilio">
        <Box padding="space60" className="container">
          { isEmpty(task) ?
            <>
              <Header />
              <MainTabs />
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
