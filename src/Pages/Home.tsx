import { Button, Container, Dialog, DialogContent, Grid } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import listOfFilms, { Film } from "../../listOfFilm";
import BannerHeader from '../Components/BannerHeader';
import Footer from '../Components/Footer';
import Header from '../Components/Header';




export default function Home() {

    const [openModal, setOpenModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');
    const navigate = useNavigate();

    const handleOpenModal = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setSelectedVideo('');
        setOpenModal(false);
    };
    return (
        <>
            <Header />
            <main>
                {/* Hero unit */}
                <BannerHeader titles="Welcome to ChalsMovieX" />
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {listOfFilms.map((card: Film) => (
                            <Grid item key={card.name} xs={12} sm={12} md={12}>
                                <div className="movie-list-1 mb30">
                                    <div className="listing-container">


                                        <div className="listing-image">


                                            <div className="play-btn">
                                                <a onClick={() => handleOpenModal(card.preview)} className="play-video">
                                                    <i className="fa fa-play"></i>
                                                </a>
                                            </div>
                                            <div className="stars">
                                                <div className="rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>


                                            <img src={card.imageBackdrop} alt="" />
                                        </div>


                                        <div className="listing-content">
                                            <div className="inner">
                                                <h4 className="title">{card.name} ({card.releaseDate})</h4>

                                                <p>{card.details.short}</p>
                                                <Button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        navigate(`/detail/${card.id}`);
                                                    }}
                                                    variant="contained"
                                                    style={{ background: '#9352b3' }}
                                                    className='btn btn-main btn-effect'
                                                >details</Button>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main >
            <Footer />

            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                maxWidth="md"
                fullWidth
            >
                <DialogContent>
                    <iframe
                        width="100%"
                        height="450"
                        src={selectedVideo}
                        title="YouTube Video"

                        allowFullScreen
                    ></iframe>
                </DialogContent>
            </Dialog>


        </>
    )
}
