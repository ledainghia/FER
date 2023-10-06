import emailjs from '@emailjs/browser';
import { Button, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import BannerHeader from '../Components/BannerHeader';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);
    const [statusSendMail, setStatusSendMail] = useState(false);
    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current)

            await emailjs.sendForm('service_byuhv7v', 'template_r2w2k6h', form.current, 'J3SfLHOp2KH3Mz6ZM')
                .then((result) => {
                    console.log(result.text);
                    setStatusSendMail(true);
                }, (error) => {
                    console.log(error.text);
                    setStatusSendMail(false);
                });
    };
    return (
        <>
            <Header />
            <CssBaseline />
            <BannerHeader titles="Contact Us" />
            <Container maxWidth="md" sx={{ marginTop: "90px", marginBottom: "70px" }}>


                <main className="contact-page ">
                    <Grid container spacing={4}>
                        <Grid item md={4} sm={12} className="col-md-4 col-sm-12">
                            <h3 className="title">Info</h3>

                            <div className="details-wrapper">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                                <ul className="contact-details">
                                    <li>
                                        <i className="icon-phone"></i>
                                        <strong>Phone:</strong>
                                        <span> <Typography >0977 123456</Typography></span>
                                    </li>

                                    <li>
                                        <i className="icon-globe"></i>
                                        <strong>Web:</strong>
                                        <span><Typography >www.chals.com</Typography></span>
                                    </li>
                                    <li>
                                        <i className="icon-paper-plane"></i>
                                        <strong>E-Mail:</strong>
                                        <span><Typography >chals@gmail.com</Typography></span>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item md={8} sm={12} >
                            <h3 className="title">Contact Form</h3>
                            <form id="" ref={form} action="post" onSubmit={sendEmail}>
                                <div id="contact-result"></div>
                                <div className="form-group">
                                    <input className="form-control input-box" type="text" name="from_name" placeholder="Your Name" autoComplete="off" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control input-box" type="email" name="from_email" placeholder="your-email@gmail.com" autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control input-box" type="text" name="subject" placeholder="Subject" required autoComplete="off" />
                                </div>
                                <div className="form-group mb20">
                                    <textarea className="form-control textarea-box" name="message" required placeholder="Type your message..."></textarea>
                                </div>
                                <div className="form-group "
                                    style={{ display: "flex", alignItems: "center" }}>
                                    <Button style={{ background: "#9352b3", color: "white" }} id="submit" type="submit" >Send message</Button>
                                    {statusSendMail ? <Typography style={{ marginLeft: "10px" }}>Mail of you sent successfully! We will check mail and respone for you soon</Typography> : ""}
                                </div>
                            </form>

                        </Grid>
                    </Grid>
                </main>

            </Container >
            <Footer />
        </>
    )
}
