import { Button, ButtonGroup, PageHeader, PageHeaderSetting, PageHeaderDetails, PageHeaderHeading, ProgressSteps, ProgressStepCurrent, ProgressStepIncomplete, ProgressStepSeparator, PageHeaderKeyword, PageHeaderParagraph, Form, FormControl, Label, input1, input2, input3, input4, Input } from '@twilio-paste/core';
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
                        <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
                        <ProgressStepSeparator />
                        <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
                        <ProgressStepSeparator />
                        <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
                        <ProgressStepSeparator />
                        <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
                        <ProgressStepSeparator />
                        <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
                        </ProgressSteps>
                    </PageHeaderSetting>
                    <PageHeaderDetails>
                        <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
                        <PageHeaderHeading>Verb heading</PageHeaderHeading>
                        <PageHeaderParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
                        faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
                        </PageHeaderParagraph>
                    </PageHeaderDetails>
                    </PageHeader>
                    <Box display="flex" flexDirection="column" rowGap="space130">
                    <Box>
                        <Form>
                        <FormControl>
                            <Label htmlFor={input1}>Label</Label>
                            <Input type="text" id={input1} name="input1" />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor={input2}>Label</Label>
                            <Input type="text" id={input2} name="input2" />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor={input3}>Label</Label>
                            <Input type="text" id={input3} name="input3" />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor={input4}>Label</Label>
                            <Input type="text" id={input4} name="input4" />
                        </FormControl>
                        </Form>
                    </Box>
                    <Box display="flex" justifyContent="end">
                        <ButtonGroup>
                        <Button variant="secondary">Cancel or Close</Button>
                        <Button variant="primary">
                            Next <ArrowForwardIcon decorative />
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