import { Paragraph } from '@twilio-paste/core/paragraph';
import { Box } from '@twilio-paste/core/box';
import { Button, PageHeader, PageHeaderDetails, PageHeaderHeading, PageHeaderInPageNavigation, InPageNavigation, InPageNavigationItem, DescriptionListSet, DescriptionList, DescriptionListTerm, DescriptionListDetails, Table, THead, Tr, Th, TBody, Td, Badge } from '@twilio-paste/core';
import { TabPanel } from '@twilio-paste/core/tabs';
import { Heading } from '@twilio-paste/core/heading';
import { Avatar } from '@twilio-paste/core/avatar';
import { Stack } from '@twilio-paste/core/stack';
import { useUID } from "@twilio-paste/core/uid-library";

function RegistrationDetailsTabPanel (props) {
    console.log(props.task);
    return (    
        <>
            <TabPanel borderLeft="solid 1px #ddd" borderRight="solid 1px #ddd" borderBottom="solid 1px #ddd" padding="space60">
                <Box>
                    <PageHeader size="default">
                        <PageHeaderDetails>
                            <PageHeaderHeading>
                                <Stack orientation="horizontal">
                                    <Avatar size="sizeIcon100" name={props.task?.attributes?.registration?.fullName} />
                                    <Box paddingLeft="space40">{ props.task?.attributes?.registration?.fullName }</Box>
                                </Stack>
                            </PageHeaderHeading>
                        </PageHeaderDetails>
                        <PageHeaderInPageNavigation>
                        <InPageNavigation aria-label={useUID()}>
                            <InPageNavigationItem href="#" currentPage>Dados da Dívida</InPageNavigationItem>
                            <InPageNavigationItem href="#registrationInfo">Dados Cadastrais</InPageNavigationItem>
                            <InPageNavigationItem href="#paymentsHistory">Histórico de Pagamentos</InPageNavigationItem>
                            <InPageNavigationItem href="#lastContacts">Últimos Contatos</InPageNavigationItem>
                        </InPageNavigation>
                        </PageHeaderInPageNavigation>
                    </PageHeader>
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" flexDirection="column" rowGap="space100">
                        <Box>
                            <Heading as="h2" variant="heading20">
                            Dados da Dívida
                            </Heading>
                            <Box display="flex" columnGap="space70" width="size60">
                            <Box width="size30">
                                <DescriptionList>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Credor</DescriptionListTerm>
                                    <DescriptionListDetails>{ props.task?.attributes?.debt?.creditor}</DescriptionListDetails>
                                </DescriptionListSet>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Tipo de Dívida</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.debt?.debtType }</DescriptionListDetails>
                                </DescriptionListSet>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Valor Original</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.debt?.originalValue }</DescriptionListDetails>
                                </DescriptionListSet>
                                </DescriptionList>
                            </Box>
                            <Box width="size30">
                                <DescriptionList>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Status da Dívida</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.debt?.debtStatus }</DescriptionListDetails>
                                </DescriptionListSet>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Data de Vencimento Original</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.debt?.originalDate}</DescriptionListDetails>
                                </DescriptionListSet>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Valor Atual</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.debt?.currentValue}</DescriptionListDetails>
                                </DescriptionListSet>
                                </DescriptionList>
                            </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Heading as="h2" variant="heading20" id="registrationInfo">
                            Dados Cadastrais
                            </Heading>
                            <Box display="flex" columnGap="space70" width="size60">
                            <Box width="size30">
                                <DescriptionList>
                                <DescriptionListSet>
                                    <DescriptionListTerm>CPF</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.registration?.cpf}</DescriptionListDetails>
                                </DescriptionListSet>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Data de Nascimento</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.registration?.dob}</DescriptionListDetails>
                                </DescriptionListSet>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Cidade / Estado</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.registration?.cityState}</DescriptionListDetails>
                                </DescriptionListSet>
                                </DescriptionList>
                            </Box>
                            <Box width="size30">
                                <DescriptionList>
                                <DescriptionListSet>
                                    <DescriptionListTerm>RG</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.registration?.rg}</DescriptionListDetails>
                                </DescriptionListSet>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Endereço / Complemento</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.registration?.address}</DescriptionListDetails>
                                </DescriptionListSet>
                                <DescriptionListSet>
                                    <DescriptionListTerm>Telefone</DescriptionListTerm>
                                    <DescriptionListDetails>{props.task?.attributes?.registration?.phoneNumber}</DescriptionListDetails>
                                </DescriptionListSet>
                                </DescriptionList>
                            </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box display="flex" width="100%" justifyContent="space-between" alignItems="flex-start">
                            <Heading as="h2" variant="heading20" id="paymentsHistory">
                                Histórico de Pagamentos
                            </Heading>
                            </Box>
                            <Box maxWidth="size80">
                            <Paragraph>
                                Abaixo estão os últimos pagamentos realizados por este cliente, seus valores e datas.
                            </Paragraph>
                            </Box>
                            <Table>
                            <THead>
                                <Tr>
                                    <Th>Data de Vencimento</Th>
                                    <Th>Status</Th>
                                    <Th>Data de Pagamento</Th>
                                    <Th></Th>
                                </Tr>
                            </THead>
                            <TBody>
                                <Tr>
                                    <Td>28/09/2024</Td>
                                    <Td><Badge as="span" variant="error">Pendente</Badge></Td>
                                    <Td>-</Td>
                                    <Td><Button variant='secondary'>Ver Detalhes...</Button></Td>
                                </Tr>
                                <Tr>
                                    <Td>28/08/2024</Td>
                                    <Td><Badge as="span" variant="success">Pago</Badge></Td>
                                    <Td>28/08/2024</Td>
                                    <Td><Button variant='secondary'>Ver Detalhes...</Button></Td>
                                </Tr>
                                
                                <Tr>
                                    <Td>28/07/2024</Td>
                                    <Td><Badge as="span" variant="success">Pago</Badge></Td>
                                    <Td>27/07/2024</Td>
                                    <Td><Button variant='secondary'>Ver Detalhes...</Button></Td>
                                </Tr>
                            </TBody>
                            </Table>
                        </Box>
                        <Box>
                            <Box display="flex" width="100%" justifyContent="space-between" alignItems="flex-start">
                            <Heading as="h2" variant="heading20" id="lastContacts">
                                Últimos Contatos
                            </Heading>
                            </Box>
                            <Box maxWidth="size80">
                            <Paragraph>
                                Abaixo estão os contatos recentes deste cliente e seus respectivos canais.
                            </Paragraph>
                            </Box>
                            <Table>
                            <THead>
                                <Tr>
                                    <Th>Data / Hora</Th>
                                    <Th>Canal</Th>
                                    <Th></Th>
                                </Tr>
                            </THead>
                            <TBody>
                                <Tr>
                                    <Td>30/09/2024 10:32</Td>
                                    <Td><Badge as="span" variant="success">WhatsApp</Badge></Td>
                                    <Td><Button variant='secondary'>Ver Detalhes...</Button></Td>
                                </Tr>
                                <Tr>
                                    <Td>27/09/2024 14:22</Td>
                                    <Td><Badge as="span" variant="error">RCS</Badge></Td>
                                    <Td><Button variant='secondary'>Ver Detalhes...</Button></Td>
                                </Tr>
                                <Tr>
                                    <Td>27/09/2024 15:29</Td>
                                    <Td><Badge as="span" variant="neutral">Voz</Badge></Td> 
                                    <Td><Button variant='secondary'>Ver Detalhes...</Button></Td>
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