import { Tabs, TabList, Tab, TabPanels } from '@twilio-paste/core/tabs';
import { useUID } from "@twilio-paste/core/uid-library";

import RegistrationDetailsTabPanel from './RegistrationDetailsTabPanel';
import NegotiationTabPanel from './NegotiationTabPanel';
import KnowledgeBaseTabPanel from './KnowledgeBaseTabPanel';

function MainTabs() {
    const selectedId = useUID();
    return (
        <>
            <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
                <TabList aria-label="Horizontal product tabs">
                    <Tab id={selectedId}>Dados Cadastrais</Tab>
                    <Tab>Negociação</Tab>
                    <Tab>Base de Conhecimento</Tab>
                </TabList>
                <TabPanels>
                    <RegistrationDetailsTabPanel />
                    <NegotiationTabPanel />
                    <KnowledgeBaseTabPanel />
                </TabPanels>
            </Tabs>
        </>
    );
};

export default MainTabs;