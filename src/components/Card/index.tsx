import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../../types/character";


interface CardProps {
  character: ICharacter;
}

export const MediaCard: React.FC<CardProps> = ({ character }) => {
  const navigate = useNavigate()

  return (
    <Card
      sx={{
        width: 300,
        borderRadius: "12px",
        bgcolor: "#dadada",
        boxShadow: "-7px 4px 45px -8px #3376f3;",
        transition: "0.3s",
      }}
    >
      <CardMedia
        sx={{ height: "300px" }}
        image={character.imageUrl}
        title={character.name}
      />
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign={"center"}
        >
          {character.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            alignSelf: "center",
          }}
          variant="contained"
          size="small"
          fullWidth
          onClick={() => navigate('/character/' + character._id)}
        >
          Visualizar
        </Button>
      </CardActions>
    </Card>
  );
};
