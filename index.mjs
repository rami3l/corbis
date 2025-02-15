async function queryAlbum(id) {
  const res = await fetch(`https://music.163.com/api/album/${id}`, {
    mode: "no-cors",
  });
  return await res.json();
}

export async function allSongs(album) {
  switch (typeof album) {
    case "number":
      album = await queryAlbum(album);
      return await allSongs(album);
    case "object":
      try {
        return album.album.songs.map((song) => song.id);
      } catch (e) {
        console.log(
          `Failed when parsing the album meta:\n${JSON.stringify(album)}`
        );
        throw e;
      }
    default:
      throw new Error("Invalid album type");
  }
}
