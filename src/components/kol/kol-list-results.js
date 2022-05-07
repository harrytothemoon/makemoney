import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import numeral from "numeral";
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Link,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";

export const KolListResults = ({ kolList, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Posts Count</TableCell>
                <TableCell>Follow Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {kolList
                .slice(page * limit, page * limit + limit)
                .map(({ id, url, followCount, title, description, avatar, postsCount }) => (
                  <TableRow hover key={id}>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Avatar src={avatar} sx={{ mr: 2 }}>
                          {getInitials(title)}
                        </Avatar>
                        <Typography color="textPrimary" variant="body1">
                          {title}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href={url}
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        {url}
                      </Link>
                    </TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>{postsCount}</TableCell>
                    <TableCell>{numeral(followCount).format("0a")}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={kolList.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

KolListResults.propTypes = {
  kolList: PropTypes.array.isRequired,
};
