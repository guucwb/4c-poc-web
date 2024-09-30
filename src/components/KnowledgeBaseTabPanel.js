import { ArtificialIntelligenceIcon } from '@twilio-paste/icons/esm/ArtificialIntelligenceIcon';
import { SendIcon } from '@twilio-paste/icons/esm/SendIcon';
import { ProductMessagingIcon } from '@twilio-paste/icons/esm/ProductMessagingIcon';
import { ProductSendGridIcon } from '@twilio-paste/icons/esm/ProductSendGridIcon';
import { ProductCLIIcon } from '@twilio-paste/icons/esm/ProductCLIIcon';
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
                        ariaLabel="input for sending a message to ai"
                        placeholder="Chat text"
                        config={{
                        namespace: "customer-chat",
                        onError: (e) => {
                            throw e;
                        },
                        }}
                    />
                    <ChatComposerActionGroup>
                        <Button variant="primary_icon" size="reset">
                        <SendIcon decorative={false} title="send chat message to ai" />
                        </Button>
                    </ChatComposerActionGroup>
                    </ChatComposerContainer>
                    </Box>
                </Box>
                <ButtonGroup justifyContent="center">
                    <Button variant="secondary" size="rounded_small"><ProductMessagingIcon decorative />How do I set up SMS?</Button>
                    <Button variant="secondary" size="rounded_small"><ProductSendGridIcon decorative />I’m unable to login to SendGrid due to 2FA</Button>
                    <Button variant="secondary" size="rounded_small"><ProductSendGridIcon decorative />How can I get in touch with SendGrid support?</Button>
                    <Button variant="secondary" size="rounded_small"><ProductCLIIcon decorative />How to uninstall Twilio CLI?</Button>
                    <Button variant="secondary" size="rounded_small"><ProductSendGridIcon decorative />How do I report spam?</Button>
                </ButtonGroup>
                </Box>

            </TabPanel>
        </>
    );
};

export default KnowledgeBaseTabPanel;