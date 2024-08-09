import { MdOutlineOndemandVideo } from "react-icons/md";

export default function PlaylistCard({
  playlist,
  index,
  getUniqueId,
  videosList,
}) {
  return (
    <div
      className="playlist"
      style={{
        height: "204px",
        opacity: "0px",
      }}
      key={playlist.PlayListId}
      onClick={() => {
        getUniqueId(playlist.PlayListId);
      }}
    >
      <div className="thumbnail">
        <img src={videosList[index]?.Thumbnail_URL} alt="img" />
      </div>
      <div className="info">
        <h3>{playlist.Name}</h3>
        <MdOutlineOndemandVideo />
        <p
          style={{
            display: "inline-block",
            paddingLeft: "5px",
          }}
        >
          {playlist.Post_Ids.length} Videos
        </p>
      </div>
    </div>
  );
}
