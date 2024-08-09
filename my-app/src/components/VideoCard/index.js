export default function VideoCard({ video }) {
  return (
    <div className="product">
      <div className="video-thumbnail">
        <img src={video.Thumbnail_URL} alt={video.Thumbnail_Title} />
      </div>
      <div className="video-info">
        <h4>{video.Thumbnail_Title}</h4>
        <p>{video.Video_duration} min</p>
        <p>Products Attached: 5</p>
      </div>
    </div>
  );
}
