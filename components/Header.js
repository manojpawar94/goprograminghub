import Link from "next/link";
import { Typography, Box } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
            <Typography 
                variant="h2" 
                component="h1"
                sx={{
                    fontWeight: 'bold',
                    letterSpacing: '-0.5px',
                    mb: 3,
                    mt: 2,
                    textAlign: 'center',
                    '&:hover': { textDecoration: 'underline' }
                }}
            >
                <Link href="/">
                    <a style={{ color: 'inherit', textDecoration: 'none' }}>GoProgrammingHub</a>
                </Link>
            </Typography>
        </Box>
    );
}
