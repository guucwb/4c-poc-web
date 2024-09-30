import { Box } from '@twilio-paste/core/box';

function Header() {
    return (
        <>
            <Box paddingBottom="space60" display="flex">
                <a href="https://www.pagoufacil.com.br/" style={{alignItems: 'center', display: 'flex', marginLeft: 'auto'}}>
                    <img src="https://www.pagoufacil.com.br/wp-content/themes/pagoufacil/img/logo-pagoufacil-lp.svg" alt="Pagou Facil" /> 
                    <img src="https://www.pagoufacil.com.br/wp-content/themes/pagoufacil/img/risco.png" alt="" style={{ margin: '0 8px'}} /> 
                    <img src="https://www.pagoufacil.com.br/wp-content/themes/pagoufacil/img/logo-paschoalotto-lp.png" alt="Paschoalotto" />
                </a>
            </Box>
        </>
    );
};

export default Header;