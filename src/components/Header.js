import { Box } from '@twilio-paste/core/box';

function Header() {
    return (
        <>
            <Box paddingBottom="space60" display="flex">
                <a href="https://bradesco.com.br/" style={{alignItems: 'center', display: 'flex', marginLeft: 'auto'}}>
                    <img src="https://static.wixstatic.com/media/2931e1_d77866e0ed1847afb9cbe19df3bcb92e~mv2.png/v1/fill/w_560,h_322,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bradesco.png" alt="Intervalor" style={{ height: '75px'}} /> 
                </a>
            </Box>
        </>
    );
};

export default Header;