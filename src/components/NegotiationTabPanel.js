import { Button, ButtonGroup, PageHeader, PageHeaderSetting, PageHeaderDetails, PageHeaderHeading, ProgressSteps, ProgressStepCurrent, ProgressStepIncomplete, ProgressStepSeparator, PageHeaderKeyword, PageHeaderParagraph, Form, FormControl, Label, input1, input2, Input } from '@twilio-paste/core';
import { ArrowForwardIcon } from '@twilio-paste/icons/esm/ArrowForwardIcon';
import { TabPanel } from '@twilio-paste/core/tabs';
import { Box } from '@twilio-paste/core/box';

function NegotiationTabPanel () {
    return (
        <>
            <TabPanel borderLeft="solid 1px #ddd" borderRight="solid 1px #ddd" borderBottom="solid 1px #ddd" padding="space60">
                <Box>
                <Box paddingBottom="space160">
                    <PageHeader>
                    <PageHeaderSetting>
                        <ProgressSteps>
                        <ProgressStepCurrent as="div">Confirmação de Dados</ProgressStepCurrent>
                        <ProgressStepSeparator />
                        <ProgressStepIncomplete as="div">Opções</ProgressStepIncomplete>
                        <ProgressStepSeparator />
                        <ProgressStepIncomplete as="div">Forma de Pgto</ProgressStepIncomplete>
                        <ProgressStepSeparator />
                        <ProgressStepIncomplete as="div">Finalização</ProgressStepIncomplete>
                        </ProgressSteps>
                    </PageHeaderSetting>
                    <PageHeaderDetails>
                        <PageHeaderKeyword>Negociação</PageHeaderKeyword>
                        <PageHeaderHeading>Confirmação</PageHeaderHeading>
                        <PageHeaderParagraph>
                        Confirme os dados com o cliente para assegurar que estamos falando com a pessoa correta.
                        </PageHeaderParagraph>
                    </PageHeaderDetails>
                    </PageHeader>
                    <Box display="flex" flexDirection="column" rowGap="space130">
                    <Box>
                        <Form>
                        <FormControl>
                            <Label htmlFor={input1}>RG</Label>
                            <Input type="text" id={input1} name="input1" />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor={input2}>CPF</Label>
                            <Input type="text" id={input2} name="input2" />
                        </FormControl>
                        </Form>
                    </Box>
                    <Box display="flex" justifyContent="end">
                        <ButtonGroup>
                            <Button variant="secondary">Reiniciar</Button>
                            <Button variant="primary">
                                Próximo Passo <ArrowForwardIcon decorative />
                            </Button>
                        </ButtonGroup>
                    </Box>
                    </Box>
                </Box>
                </Box>
            </TabPanel>
        </>
    );
};

export default NegotiationTabPanel;