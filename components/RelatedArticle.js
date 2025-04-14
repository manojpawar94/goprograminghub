import Link from "next/link";
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

export default function RelatedArticle({
  title = "Related Articles",
  articles,
  moreLink,
}) {
  return (
    <Box sx={{ mb: 3, width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <Typography variant="h6" component="h4" sx={{ 
        textAlign: 'center', 
        mb: 1,
        color: 'primary.main'
      }}>
        {title}
      </Typography>
      <List sx={{ p: 0, width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        {articles.slice(0, 25).map((article, index) => (
          <ListItem 
            key={index} 
            sx={{ 
              px: 0,
              '&:hover': { backgroundColor: 'action.hover' }
            }}
          >
            <Link href={article.permalink} passHref>
              <ListItemText 
                primary={article.title} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    textDecoration: 'none',
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main' }
                  }
                }}
              />
            </Link>
          </ListItem>
        ))}
        {moreLink && articles.length > 25 && (
          <ListItem key="MoreLink" sx={{ px: 0 }}>
            <Link href={moreLink} passHref>
              <ListItemText 
                primary="More Articles..." 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    textDecoration: 'none',
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' }
                  }
                }}
              />
            </Link>
          </ListItem>
        )}
      </List>
    </Box>
  );
}
