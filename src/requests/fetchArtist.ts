import { IArtist } from "../models/iArtist";
import { baseFetch } from "./baseFetch";

export const fetchArtist = async (artistName: string): Promise<IArtist> => {
  try {
    const artist = await baseFetch(`artists/${artistName}`);

    return Promise.resolve({
      facebookPageUrl: artist.facebook_page_url,
      imageUrl: artist.image_url,
      name: artist.name,
    });
  } catch (e) {
    throw e;
  }
};
