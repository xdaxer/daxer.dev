import { Request, Response } from "express";
import axios from "axios";
import getSpotifyToken from "../utils/getSpotifyToken";

const spotifyController = async (req: Request, res: Response) => {
  const data = await axios
    .get("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers: {
        Authorization: `Bearer ${await getSpotifyToken()}`,
      },
    })
    .catch((error) => {
      res.status(500).json({ ok: false, error: error.message });
    });

  const music = data?.data.items[0].track;

  console.log(music);

  res.json({
    ok: true,
    music: {
      id: music.id,
      name: music.name,
      artists: music.artists.map((artist: any) => artist.name),
      image: music.album.images,
      spotifyUrl: music.external_urls.spotify,
    },
  });
};

export default spotifyController;
