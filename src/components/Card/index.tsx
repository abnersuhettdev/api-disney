import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CardProps {
	character: Character;
}

export const MediaCard: React.FC<CardProps> = ({ character }) => {
	return (
		<Card sx={{ width: 270, borderRadius: "12px", bgcolor: "#f1f1f1" }}>
			<CardMedia
				sx={{ height: "300px" }}
				image={character.imageUrl}
				title={character.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					{character.name}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Visualizar</Button>
			</CardActions>
		</Card>
	);
};
