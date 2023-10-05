import { Container, Grid } from '@mui/material';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function NotFound() {
    return (
        <>
            <Header />
            <section
                className="page-header overlay-gradient"
                style={{
                    height: "80vh",
                    background: "url(https://i0.wp.com/www.karmanhealthcare.com/wp-content/uploads/2017/12/902.jpg?fit=1284%2C652&ssl=1)",
                }}
            >
                <Container>
                    <div className="inner">
                        <main className="page-not-found ptb100">
                            <Container >
                                <Grid container>
                                    <Grid item md={12}>

                                        <h2 style={{ color: "white" }}>404</h2>
                                        <h3 style={{ color: "white" }}>Page Not Found!</h3>

                                        <p style={{ color: "white" }}>We're sorry, but the page you were looking for doesn't exist.</p>



                                    </Grid>
                                </Grid>
                            </Container>
                        </main>
                    </div>
                </Container>
            </section>


            <Footer />
        </>
    )
}
