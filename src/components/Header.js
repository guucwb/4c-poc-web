import { Box } from '@twilio-paste/core/box';

function Header() {
    return (
        <>
            <Box paddingBottom="space60" display="flex">
                <a href="https://www.4cdigital.com.br/" style={{alignItems: 'center', display: 'flex', marginLeft: 'auto'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJa7oBBWKZgiLDr2fBLN2Be5CMLTLCUnRag&s" alt="4C Digital" style={{ height: '75px'}} /> 
                </a>
            </Box>
        </>
    );
};

export default Header;