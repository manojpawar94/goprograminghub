import SocialMedia from "./SocialMedia";
import { Container, Grid, Box } from '@mui/material';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Container component="footer" sx={{ textAlign: 'center', mt: 3, mb: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
            <Grid container direction="column" spacing={2}>
                <Grid xs={12}>
                    <Box py={2}>Copyright©️ {currentYear} - GOPROGRAMMINGHUB.COM</Box>
                </Grid>
                <Grid xs={12}>
                    <SocialMedia />
                </Grid>
            </Grid>
        </Container>
    );
}
