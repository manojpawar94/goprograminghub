import { Grid, Box, Container, Paper } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import RelatedArticle from "./RelatedArticle";
import PostNav from "./PostNav";
import AppHead from "./AppHead";

const postContentStyles = {
  textAlign: "justify",
  fontSize: "1.15rem",
  lineHeight: 1.85,
  color: "text.primary",
  "& p": {
    mb: 3,
    fontSize: "1.15rem",
    lineHeight: 1.85,
  },
  "& a": {
    color: "primary.main",
    textDecoration: "underline",
    "&:hover": {
      color: "primary.dark",
    },
  },
  "& h1": {
    fontSize: "2rem",
    fontWeight: 700,
    mt: 5,
    mb: 3,
    color: "text.primary",
  },
  "& h2": {
    fontSize: "1.75rem",
    fontWeight: 600,
    mt: 4,
    mb: 2.5,
    color: "text.primary",
  },
  "& h3": {
    fontSize: "1.5rem",
    fontWeight: 550,
    mt: 3.5,
    mb: 2,
    color: "text.primary",
  },
  "& h4": {
    fontSize: "1.25rem",
    fontWeight: 500,
    mt: 3,
    mb: 1.5,
    color: "text.primary",
  },
  "& h5": {
    fontSize: "1.1rem",
    fontWeight: 500,
    mt: 2.5,
    mb: 1.5,
    color: "text.primary",
  },
  "& h6": {
    fontSize: "1rem",
    fontWeight: 500,
    mt: 2,
    mb: 1,
    color: "text.primary",
  },
  "& table": {
    width: "100%",
    borderCollapse: "collapse",
    mb: 4,
    border: "1px solid",
    borderColor: "divider",
  },
  "& th": {
    backgroundColor: "action.hover",
    color: "text.primary",
    fontWeight: 600,
    textAlign: "left",
    padding: "0.75rem",
    borderBottom: "2px solid",
    borderColor: "divider",
  },
  "& td": {
    padding: "0.75rem",
    borderBottom: "1px solid",
    borderColor: "divider",
  },
  "& tr:hover": {
    backgroundColor: "action.hover",
  },
  "& tr:last-child td": {
    borderBottom: "none",
  },
};

function PostNavigation({ index, posts }) {
  return (
    <>
      {index !== undefined && posts && <PostNav index={index} posts={posts} />}
    </>
  );
}

export default function PostLayout({
  title,
  post,
  posts,
  index,
  moreLink,
  children,
}) {
  return (
    <>
      <AppHead title={title} />
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 9 }}>
            <SectionHeader title={post?.title || title} centered={false} />

            <Paper sx={{ px: "1rem", pt: "1rem" }}>
              <PostNavigation index={index} posts={posts} />
              {children || (
                <Box
                  sx={postContentStyles}
                  dangerouslySetInnerHTML={{ __html: post?.body }}
                />
              )}

              <PostNavigation index={index} posts={posts} />
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <RelatedArticle articles={posts} moreLink={moreLink} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

/*
Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid sm={3} md={3}>
           
          </Grid>

          <Grid sm={9} md={9}>
           
            {index !== undefined && posts && (
              <PostNav index={index} posts={posts} />
            )}

            <Grid>
              
            </Grid>
            
          </Grid>
        </Grid>
*/
