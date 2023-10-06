import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
interface page {
    pageTitle: string,
    pageUrl: string,
}
const pages: page[] = [
    {
        pageTitle: "Home",
        pageUrl: "/",
    },
    {
        pageTitle: "News",
        pageUrl: "/new",
    },
    {
        pageTitle: "Contact",
        pageUrl: "/contact",
    }
];

export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const navigate = useNavigate();
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);

    };


    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#9352b3", fontFamily: 'Quicksand, sans-serif !important' }}>
            <Container maxWidth={false} >
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <LiveTvIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        style={{ fontFamily: 'Quicksand, sans-serif !important' }}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,

                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ChalsMoviex
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.pageTitle} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" onClick={() => { navigate(page.pageUrl) }}>{page.pageTitle}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <LiveTvIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        style={{ fontFamily: 'Quicksand, sans-serif !important' }}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ChalsMoviex
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', transform: 'translateX(-80px)', color: "#000" }}>
                        {pages.map((page) => (
                            <Link key={page.pageTitle} to={page.pageUrl} style={{ textDecoration: 'none' }}>
                                <Button
                                    style={{ fontFamily: 'Quicksand, sans-serif !important' }}
                                    key={page.pageTitle}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#343a40', display: 'block' }}
                                >
                                    {page.pageTitle}
                                </Button>
                            </Link>
                        ))}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    )
}
