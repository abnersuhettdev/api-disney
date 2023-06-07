export interface ICharacter {
	_id: number;
	name: string;
	films?: string[];
	sourceUrl?: string;
	shortFilms?: string[];
	tvShows?: string[];
	videoGames?: string[];
	imageUrl: string;
}
