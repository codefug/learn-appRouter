import { API_URL } from "../app/(home)/page";

async function getMovies(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`${API_URL}/${id}`);
  const json = await res.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovies(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
