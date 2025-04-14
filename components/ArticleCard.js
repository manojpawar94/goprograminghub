import Link from "next/link";
import ArticleAuthor from "./ArticleAuthor";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components for truncated text
const TruncatedTitle = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: theme.spacing(1),
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

const TruncatedExcerpt = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginBottom: theme.spacing(0),
  color: theme.palette.text.secondary,
}));

export default function ArticleCard({ post }) {
  return (
    <Card
      sx={{ minWidth: "100%", borderRadius: "16px", padding: "8px 16px" }}
      key={post.slug}
    >
      <CardContent>
        <TruncatedTitle variant="h5" component="h2">
          <Link href={post.permalink}>
            <a style={{ textDecoration: "none", color: "inherit" }}>
              {post.title}
            </a>
          </Link>
        </TruncatedTitle>
        <Box>
          <ArticleAuthor
            name={post.author.name}
            profilePictureUrl={post.author.profilePictureUrl}
            date={post.createdAt}
          />
        </Box>
        <TruncatedExcerpt variant="body1">{post.excerpt}</TruncatedExcerpt>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          component="a"
          href={post.permalink}
        >
          Read more →
        </Button>
      </CardActions>
    </Card>
  );
}
