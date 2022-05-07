import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import { fetchPosts } from "src/redux/actions/posts";
import { getPosts } from "src/redux/reducers/posts/selectors.js";

import { TITLE } from "src/constants/productName.js";

import { Box, Container, Grid, TablePagination } from "@mui/material";
import { PostsToolbar } from "../components/posts/posts-toolbar";
import { PostsCard } from "../components/posts/posts-card";
import { DashboardLayout } from "../components/dashboard-layout";

const Posts = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(getPosts);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Posts | {TITLE}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <PostsToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {list.slice(page * limit, page * limit + limit).map((post) => (
                <Grid item key={post.id} lg={4} md={6} xs={12}>
                  <PostsCard post={post} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <TablePagination
              component="div"
              count={list.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[6, 12, 24]}
              labelRowsPerPage="Posts per page:"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Posts.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Posts;
