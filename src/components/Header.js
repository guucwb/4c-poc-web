import { Box } from '@twilio-paste/core/box';

function Header() {
    return (
        <>
            <Box paddingBottom="space60" display="flex">
                <a href="https://www.amarantehoteis.com.br/" style={{alignItems: 'center', display: 'flex', marginLeft: 'auto'}}>
                    <img src="https://dpms.immunizesystem.com/uploads/company/logos/b5f85bcff262922bdddd67c1df5c2501/logo-4608.png" alt="Grupo Amarante" style={{ height: '75px'}} /> 
                </a>
            </Box>
        </>
    );
};

export default Header;