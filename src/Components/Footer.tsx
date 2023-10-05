
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer className="footer1 bg-dark" >

            <div className="footer-copyright-area ptb30">
                <Container >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="body2" className="copyright ml-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                All Rights Reserved by <Link to={"/aas"}> &nbsp;Chals</Link>.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>





        </footer>
    );
};

export default Footer;
