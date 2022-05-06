import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKolList } from "src/redux/actions/kolList";
import { getKolList } from "src/redux/reducers/kolList/selectors.js";

import { TITLE } from "src/constants/productName.js";

import { Box, Container } from "@mui/material";
import { KolListResults } from "../components/kol/kol-list-results";
import { KolListToolbar } from "../components/kol/kol-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";

const KolList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(getKolList);

  useEffect(() => {
    dispatch(fetchKolList());
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>KOL LIST | {TITLE}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <KolListToolbar />
          <Box sx={{ mt: 3 }}>
            <KolListResults kolList={list} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
KolList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default KolList;
