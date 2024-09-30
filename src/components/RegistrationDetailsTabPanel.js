import { Paragraph } from '@twilio-paste/core/paragraph';
import { Box } from '@twilio-paste/core/box';
import { Button, PageHeader, PageHeaderDetails, PageHeaderHeading, PageHeaderInPageNavigation, InPageNavigation, InPageNavigationItem, DescriptionListSet, DescriptionList, DescriptionListTerm, DescriptionListDetails, Table, THead, Tr, Th, TBody, Td } from '@twilio-paste/core';
import { TabPanel } from '@twilio-paste/core/tabs';
import { Heading } from '@twilio-paste/core/heading';
import { useUID } from "@twilio-paste/core/uid-library";

function RegistrationDetailsTabPanel () {
    return (    
        <>
            <TabPanel borderLeft="solid 1px #ddd" borderRight="solid 1px #ddd" borderBottom="solid 1px #ddd" padding="space60">
                <Box>
                <PageHeader size="default">
                    <PageHeaderDetails>
                    <PageHeaderHeading>Object details</PageHeaderHeading>
                    </PageHeaderDetails>
                    <PageHeaderInPageNavigation>
                    <InPageNavigation aria-label={useUID()}>
                        <InPageNavigationItem href="#" currentPage>
                            Nav item
                        </InPageNavigationItem>
                        <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
                        <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
                    </InPageNavigation>
                    </PageHeaderInPageNavigation>
                </PageHeader>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="column" rowGap="space100">
                    <Box>
                        <Heading as="h2" variant="heading20">
                        Heading
                        </Heading>
                        <Box display="flex" columnGap="space70" width="size80">
                        <Box width="size40">
                            <DescriptionList>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            </DescriptionList>
                        </Box>
                        <Box width="size40">
                            <DescriptionList>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            <DescriptionListSet>
                                <DescriptionListTerm>Term</DescriptionListTerm>
                                <DescriptionListDetails>Details</DescriptionListDetails>
                            </DescriptionListSet>
                            </DescriptionList>
                        </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box display="flex" width="100%" justifyContent="space-between" alignItems="flex-start">
                        <Heading as="h2" variant="heading20">
                            Heading
                        </Heading>
                        <Button variant="secondary">Label</Button>
                        </Box>
                        <Box maxWidth="size80">
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
                            faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
                        </Paragraph>
                        </Box>
                        <Table>
                        <THead>
                            <Tr>
                            <Th>Header</Th>
                            <Th>Header</Th>
                            <Th>Header</Th>
                            </Tr>
                        </THead>
                        <TBody>
                            <Tr>
                            <Td>Content</Td>
                            <Td>Content</Td>
                            <Td>Content</Td>
                            </Tr>
                            <Tr>
                            <Td>Content</Td>
                            <Td>Content</Td>
                            <Td>Content</Td>
                            </Tr>
                            <Tr>
                            <Td>Content</Td>
                            <Td>Content</Td>
                            <Td>Content</Td>
                            </Tr>
                        </TBody>
                        </Table>
                    </Box>
                    </Box>
                </Box>
                </Box>
            </TabPanel>
        </>
    );
};

export default RegistrationDetailsTabPanel;