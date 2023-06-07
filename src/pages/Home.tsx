import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import LogoDisney from "../../public/assets/LogoDisney.png";
import { MediaCard } from "../components/Card";
import { ICharacter } from "../types/character";

const Home = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [nextPage, setNextPage] = useState<string>("");
  const [prevPage, setPrevPage] = useState<string>("");
  const [countPage, setCountPage] = useState<string>("");
  const [totalPage, setTotalPage] = useState<number>(0);
  const [page, setPage] = useState<string>(
    "http://api.disneyapi.dev/character?page=1&pageSize=16"
  );

  useEffect(() => {
    const api = async () => {
      try {
        const response = await axios.get(page);

        setCharacters(response.data.data);
        setNextPage(response.data.info.nextPage);
        setPrevPage(response.data.info.previousPage);
        setTotalPage(response.data.info.totalPages);
        setCountPage(
          page
            .replace("http://api.disneyapi.dev/character?page=", "")
            .replace("&pageSize=16", "")
        );

        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (erro: any) {
        return erro.response.data;
      }
    };

    api();
  }, [page]);

  return (
    <>
      <Grid
        container
        sx={{
          bgcolor: "#1446A0",
          color: "#000",
        }}
        spacing={4}
      >
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            marginTop: 3,
            paddingY: 4,
            bgcolor: "#f1f1f1",
          }}
        >
          <Box
            component={"img"}
            src={LogoDisney}
            sx={{ height: "300px", borderRadius: "25px" }}
          />
        </Grid>
        <Grid
          container
          sx={{ display: "flex", marginX: 4, marginY: 2 }}
          spacing={3}
        >
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <Typography variant="h4" fontWeight={"bold"} color={"#ffff"}>
              Principais Personagens
            </Typography>
          </Grid>
          {characters.map((character) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <MediaCard key={character._id} character={character} />
            </Grid>
          ))}
        </Grid>

        <Grid
          item
          xs={12}
          display={"flex"}
          gap={3}
          justifyContent={"center"}
          marginBottom={2}
          alignItems={"center"}
        >
          {prevPage !== null && (
            <IconButton
              sx={{
                bgcolor: "#F5D547",
                borderRadius: "100%",
                height: "100px",
                width: "100px",
                transition: "0.3s",

                "&:hover": {
                  bgcolor: "#DB3069",
                },
              }}
              onClick={() => setPage(prevPage)}
            >
              <ArrowBackIosNewRoundedIcon />
            </IconButton>
          )}

          <Typography variant="h5" fontWeight={"bold"} color={"#ffff"}>
            {countPage} / {totalPage}
          </Typography>

          {nextPage !== null && (
            <IconButton
              sx={{
                bgcolor: "#F5D547",
                borderRadius: "100%",
                height: "100px",
                width: "100px",
                transition: "0.2s",

                "&:hover": {
                  bgcolor: "#DB3069",
                },
              }}
              onClick={() => setPage(nextPage)}
            >
              <ArrowForwardIosRoundedIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
