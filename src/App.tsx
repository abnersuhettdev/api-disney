import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useMemo, useState } from "react";
import { MediaCard } from "./components/Card";

function App() {
	const [characters, setCharacters] = useState<Character[]>([]);

	useMemo(() => {
		const api = async () => {
			try {
				const response = await axios.get("https://api.disneyapi.dev/character");

				setCharacters(response.data.data);

				return response.data;
			} catch (erro: any) {
				return erro.response.data;
			}
		};

		api();
	}, [characters]);

	return (
		<>
			<Grid
				container
				sx={{
					bgcolor: "#000",
					color: "#ffff",
					paddingX: "20px",
				}}
				spacing={4}
			>
				<Grid
					item
					xs={12}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Typography variant="h2" textAlign={"center"} padding={2}>
						API DISNEY
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

				<Grid item xs={12} display={"flex"} gap={3} justifyContent={"center"}>
					<Button variant="contained">Anterior</Button>
					<Typography>1</Typography>
					<Button variant="contained">Próxima</Button>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
