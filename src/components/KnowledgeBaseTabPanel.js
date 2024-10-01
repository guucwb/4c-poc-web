import { ArtificialIntelligenceIcon } from '@twilio-paste/icons/esm/ArtificialIntelligenceIcon';
import { SendIcon } from '@twilio-paste/icons/esm/SendIcon';
import { LockIcon } from '@twilio-paste/icons/esm/LockIcon';
import { PaymentIcon } from '@twilio-paste/icons/esm/PaymentIcon';
import { CalendarIcon } from '@twilio-paste/icons/esm/CalendarIcon';
import { TaskIcon } from '@twilio-paste/icons/esm/TaskIcon';
import { CreditCardIcon } from '@twilio-paste/icons/esm/CreditCardIcon';
import { ChatComposerContainer, ChatComposer, ChatComposerActionGroup } from '@twilio-paste/core/chat-composer';
import { Button, ButtonGroup } from '@twilio-paste/core';
import { TabPanel } from '@twilio-paste/core/tabs';
import { Heading } from '@twilio-paste/core/heading';
import { Box } from '@twilio-paste/core/box';

function KnowledgeBaseTabPanel() {

    return (
        <>
            <TabPanel id='baseConhecimento' borderLeft="solid 1px #ddd" borderRight="solid 1px #ddd" borderBottom="solid 1px #ddd" padding="space60">
                <Box>
                <Box display="flex" flexDirection="column" alignItems="center" rowGap="space40" width="100%" padding="space130">
                    <ArtificialIntelligenceIcon decorative size="sizeIcon100"/>
                    <Heading as="h6" variant="heading10">Como posso te ajudar?</Heading>
                    <Box width="100%">
                    <ChatComposerContainer variant="contained">
                    <ChatComposer
                        ariaLabel="Caixa de texto para dúvidas"
                        placeholder="Digite aqui a sua dúvida"
                        config={{
                        namespace: "customer-chat",
                        onError: (e) => {
                            throw e;
                        },
                        }}
                    />
                    <ChatComposerActionGroup>
                        <Button variant="primary_icon" size="reset">
                        <SendIcon decorative={false} title="Enviar mensagem" />
                        </Button>
                    </ChatComposerActionGroup>
                    </ChatComposerContainer>
                    </Box>
                </Box>
                <ButtonGroup justifyContent="center">
                    <Button variant="secondary" size="rounded_small"><CreditCardIcon decorative />Quais são os critérios para definir as condições de pagamento?</Button>
                    <Button variant="secondary" size="rounded_small"><LockIcon decorative />Como lidar com vítimas de fraude?</Button>
                    <Button variant="secondary" size="rounded_small"><PaymentIcon decorative />Como lidar com quem não tem condições de pagar?</Button>
                    <Button variant="secondary" size="rounded_small"><CalendarIcon decorative />Como tratar prazos muito longos?</Button>
                    <Button variant="secondary" size="rounded_small"><TaskIcon decorative />Como gerar relatórios sobre as negociações?</Button>
                </ButtonGroup>
                </Box>
            </TabPanel>
        </>
    );
};

export default KnowledgeBaseTabPanel;