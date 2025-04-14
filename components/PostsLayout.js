import { Container, Grid, Paper, Pagination, Stack } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import ArticleCard from "./ArticleCard";
import AppHead from "./AppHead";
import SearchBar from "./SearchBar";
import React from "react";

export default function PostsLayout({ title, posts }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const postsPerPage = 9;

  const filteredPosts = searchQuery
    ? posts.filter(
        (post) =>
          post &&
          (post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content?.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  React.useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  return (
    <>
      <AppHead title={title} />
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <SectionHeader title={title} centered={true} />
        <SearchBar onSearch={(query) => setSearchQuery(query)} />

        <Grid container spacing={4}>
          {paginatedPosts.map((post, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <ArticleCard post={post} />
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
