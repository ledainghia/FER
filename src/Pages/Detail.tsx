import { Container, Grid } from '@mui/material'
import Header from '../Components/Header'
import listOfFilms, { Film } from "../../listOfFilm";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';

export default function Detail() {
    const { id } = useParams<{ id: string }>(); // Lấy ID từ đường dẫn URL
    const [film, setFilm] = useState<Film | null>(null);
    function getFilmById(id: number) {

        const film = listOfFilms.find(film => film.id === id);


        if (film) {
            return film;
        } else {

            return null; // Hoặc có thể trả về một giá trị khác phù hợp với ứng dụng của bạn
        }
    }

    useEffect(() => {

        console.log(id);
        // Chuyển ID thành số nguyên
        if (id) {
            const filmId = parseInt(id);

            setFilm(getFilmById(filmId));
        }
    })
    return (
        <>
            <Header />
            <section className="movie-detail-intro overlay-gradient ptb100"
                style={{
                    background: "url(https://i0.wp.com/www.karmanhealthcare.com/wp-content/uploads/2017/12/902.jpg?fit=1284%2C652&ssl=1)",
                    marginTop: "-200px"
                }}>
            </section >
            <section className="movie-detail-intro2" >
                <div className="container">
                    <Grid container-fluid >
                        <Grid item md={12}>
                            <Grid container >
                                <Grid item xs={6} md={4}>
                                    <div className="movie-poster">
                                        <img src={film?.image} style={{ width: '300px', height: '444px' }} alt="" />

                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play"></i>
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <div className="movie-details">
                                        <h3 className="title">{film?.name}</h3>

                                        <ul className="movie-subtext">
                                            <li>PG-13</li>
                                            <li>{film?.time}</li>
                                            <li>{film?.genre.join(', ')}</li>
                                            <li>{film?.releaseDate}</li>
                                        </ul>



                                        <div className="rating mt10">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <span>Rating: {film?.rating}</span>
                                        </div>
                                    </div>
                                </Grid>
                                <div className="clearfix"></div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className="movie-detail-main ptb100">
                <Container >

                    <Grid container >

                        <Grid item lg={8} md={12}>
                            <div className="inner pr50">


                                <div className="storyline">
                                    <h3 className="title">Storyline</h3>

                                    <p>{film?.storyline}</p>
                                </div>




                            </div>
                        </Grid>




                        <div className="col-lg-4 col-sm-12">
                            <div className="sidebar">


                                <aside className="widget widget-movie-details">
                                    <h3 className="title">Details</h3>

                                    <ul>
                                        <li><strong>Release date: </strong>{film?.releaseDate}</li>
                                        <li><strong>Director: </strong>{film?.director}</li>
                                        <li><strong>Budget: </strong>{film?.budget}</li>
                                        <li><strong>Country: </strong>{film?.country}</li>
                                        <li><strong>Language: </strong>{film?.language}</li>
                                        <li><strong>Production Co: </strong>{film?.studio}</li>
                                    </ul>
                                </aside>

                                <aside className="widget widget-movie-cast">
                                    <h3 className="title">Cast</h3>

                                    <ul className="cast-wrapper">
                                        {film?.cast.map((cast) => (
                                            <li>


                                                <h6 className="name">{cast}</h6>
                                            </li>
                                        ))}

                                    </ul>



                                </aside>


                            </div>
                        </div>

                    </Grid>

                </Container>
            </section>

            <Footer />
        </>
    )
}
