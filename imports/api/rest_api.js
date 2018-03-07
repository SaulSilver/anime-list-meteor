import popura from "popura"; //npm package for MyAnimeList API
import { get } from "lodash";

function connectApi() {
  const { username, password } = get(Meteor, "settings.private.mal"); //MyAnimeList API username & password
  return popura(username, password);
}

export async function getAnime(animeName) {
  const client = connectApi();
  let animes;
  // try {
  //   console.log('anime name: ', animeName);
  //   animes = await client.searchAnimes(animeName); //todo: put return here and end method
  // } catch (error) {
  //   console.log(error);
  // }
  // console.log('animes:\n', animes.map(anime => anime.title)); // delete

  return animes;
}
