import { Container } from '@mui/material';
interface props {
    titles: string;
}
export default function PageHeader({ titles }: props) {
    return (
        <section
            className="page-header overlay-gradient"
            style={{
                background: "url(https://i0.wp.com/www.karmanhealthcare.com/wp-content/uploads/2017/12/902.jpg?fit=1284%2C652&ssl=1)",
            }}
        >
            <Container>
                <div className="inner">
                    <h2
                        className="title"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            fontFamily: 'Quicksand, sans-serif',
                        }}
                    >
                        {titles}
                    </h2>
                </div>
            </Container>
        </section>
    );
}
