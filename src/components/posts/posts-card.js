import PropTypes from "prop-types";
import numeral from "numeral";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, Link } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Clock as ClockIcon } from "../../icons/clock";

export const PostsCard = ({ post, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      >
        <Avatar
          alt="Product"
          src="https://img.icons8.com/office/40/000000/twitter.png"
          variant="square"
        />
      </Box>
      <Link
        target="_blank"
        rel="noopener"
        href={post.url}
        color="textPrimary"
        gutterBottom
        variant="h5"
        sx={{
          cursor: "pointer",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Link
      </Link>
      <Typography align="center" color="textPrimary" variant="body1">
        {post.text}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <ClockIcon color="action" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {post.postAt}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <ThumbUpIcon color="action" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {numeral(post.likeCount).format("0a")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

PostsCard.propTypes = {
  post: PropTypes.object.isRequired,
};
