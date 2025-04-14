import { Avatar, Typography, Box } from '@mui/material';

export default function ArticleAuthor({ name, profilePictureUrl, date }) {
    const prettyDate = new Date(date).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
                alt={name} 
                src={profilePictureUrl} 
                sx={{ width: 40, height: 40 }}
            />
            <Box>
                <Typography variant="subtitle2" fontWeight="bold">{name}</Typography>
                <Typography variant="caption" color="text.secondary">
                    {prettyDate}
                </Typography>
            </Box>
        </Box>
    );
}
