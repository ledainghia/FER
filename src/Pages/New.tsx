import { Card, CardContent, Container, Grid, Typography, CssBaseline } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import BannerHeader from '../Components/BannerHeader';


interface movie {
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    backdrop_path: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    popularity: number,

}
const API_KEY = 'e951543ab2730dd170b61fb35d3b7652';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
export default function New() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching upcoming movies:', error);
            });
    }, []);
    return (
        <>
            <Header />
            <BannerHeader titles="News" />
            <Container sx={{ marginTop: "30px", marginBottom: "30px" }}>
                <Grid container spacing={3}>
                    {movies.map((movie: movie) => (
                        <Grid item key={movie.id} xs={12} sm={12} md={12}>
                            <Card sx={{

                                boxShadow: 2,
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}>
                                <CardContent>
                                    <div className="celebrity-list-1">
                                        <div className="celeb-container">
                                            <div className="celebrity-image">
                                                <img src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`} alt="" />
                                            </div>
                                            <div className="celebrity-content">
                                                <div className="inner">
                                                    <Typography variant="h6" gutterBottom className='title'>
                                                        {movie.title}
                                                    </Typography>
                                                    <p>{movie.overview}</p>
                                                    <CssBaseline />
                                                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
                                                        Release Date: {movie.release_date}
                                                    </Typography>

                                                    <Typography variant="body2" color="textSecondary">
                                                        Vote average: {movie.vote_count}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Popularity: {movie.popularity}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container >

            <Footer></Footer>
        </>
    )
}
