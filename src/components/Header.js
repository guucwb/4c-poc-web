import { Box } from '@twilio-paste/core/box';

function Header() {
    return (
        <>
            <Box paddingBottom="space60" display="flex">
                <a href="https://intervalor.com.br/" style={{alignItems: 'center', display: 'flex', marginLeft: 'auto'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yOSVvWtHRibCgy_z3bmFuE1etAjTaSdd6g&s" alt="Intervalor" style={{ height: '75px'}} /> 
                </a>
            </Box>
        </>
    );
};

export default Header;