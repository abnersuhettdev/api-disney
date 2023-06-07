import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICharacter } from "../types/character";

const Character = () => {
  const [character, setCharacter] = useState<ICharacter>({} as ICharacter);

  const { id } = useParams();
  useEffect(() => {
    const api = async () => {
      try {
        const response = await axios.get(
          `https://api.disneyapi.dev/character/${id}`
        );

        setCharacter(response.data.data);
        return response.data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    api();
  }, []);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100vw"}
      sx={{
        bgcolor: "#1446A0",
      }}
    >
      <Grid
        container
        width={"75%"}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"200px"}
        sx={{ bgcolor: "#fff", borderRadius: "12px" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center", sm: "flex-start" }}
          justifyContent={{ xs: "center", sm: "flex-start" }}
        >
          <Box
            component={"img"}
            src={character?.imageUrl}
            sx={{ borderRadius: "12px", minHeight: "200px", width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          sx={{ paddingX: { sm: "40px", xs: "0", md: "0" } }}
        >
          <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
            {character?.name}
          </Typography>

          {character.films && character.films.length > 0 && (
            <Typography fontWeight={"bold"} variant="body2">
              Filmes:
            </Typography>
          )}

          {character.films &&
            character.films.map((film: string) => (
              <Typography variant="body2">{film}</Typography>
            ))}

          {character.tvShows && character.tvShows.length > 0 && (
            <Typography fontWeight={"bold"} variant="body2">
              TvShows:
            </Typography>
          )}

          {character.tvShows &&
            character.tvShows.map((tvShow: string) => (
              <Typography variant="body2">{tvShow}</Typography>
            ))}

          {character.videoGames && character.videoGames.length > 0 && (
            <Typography fontWeight={"bold"} variant="body2">
              Video Games:
            </Typography>
          )}

          {character.videoGames &&
            character.videoGames.map((videoGames: string) => (
              <Typography variant="body2">{videoGames}</Typography>
            ))}

          <Box display={"flex"} gap={2}>
            <Button variant="contained" onClick={() => window.history.back()}>
              Voltar
            </Button>
            <Button
              variant="contained"
              onClick={() => window.open(character.sourceUrl, "_blank")}
            >
              Saiba Mais
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Character;
