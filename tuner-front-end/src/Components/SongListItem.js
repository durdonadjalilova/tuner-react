import { Link } from "react-router-dom";


function SongListItem({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
            <td>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>
      <td>
          {song.artist}
          </td>
      <td>
          {song.album}
          </td>
      <td>
          {song.time}
          </td>
    </tr>
  );
}

export default SongListItem;
