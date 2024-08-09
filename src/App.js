import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import PlaylistManager from "./components/PlaylistManager";
import "./App.css";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import Navbar from "./components/Navbar";
import VideoCard from "./components/VideoCard";
function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(4);
  const [userSearch, setUserSearch] = useState("");
  useEffect(() => {
    fetchPlaylistVideos();
  }, []);

  const fetchPlaylistVideos = async () => {
    try {
      const response = await axios.post(
        "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
        { Index: 1, ContentType: [2], IsTagged: false, URL: "" },
        {
          headers: {
            "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
            "X-Tenant-Key": "TYKE070323",
          },
        }
      );
      setVideos(response.data.data.Feeds);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching playlist videos", error);
    }
  };

  function getUniqueId(id) {
    fetchPlaylistVideos(id);
  }
  const filteredList = videos.filter((video) =>
    video.Thumbnail_Title.includes(userSearch)
  );
  return (
    <div>
      <Navbar />
      <div className="app">
        <Sidebar />
        <div className="content">
          <div className="main-content">
            <div className="playlists-section">
              <PlaylistManager videos={videos} getUniqueId={getUniqueId} />
            </div>
            <div className="details">
              <h3>Thumbnail Title</h3>
              <input
                id="search"
                value={userSearch}
                onChange={(event) => {
                  setUserSearch(event.target.value);
                }}
                type="text"
                placeholder="Get Sporty in Style"
              />
              <p style={{ color: "white" }}>Video status</p>
              <div className="video-status">
                <label className="radio-input">
                  <input type="radio" name="status" /> Active
                </label>
                <label className="radio-input">
                  <input type="radio" name="status" /> Inactive
                </label>
              </div>
              <p style={{ color: "white" }}>Products List</p>
              <div className="product-list">
                {loading ? (
                  <div className="loader-container">
                    <Bars
                      height="50"
                      width="60"
                      color="#4fa94d"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  filteredList
                    .slice(0, limit)
                    .map((video, index) => (
                      <VideoCard video={video} key={index} />
                    ))
                )}
              </div>
              <button
                className="update-playlist"
                onClick={() => {
                  setLimit(videos.length);
                }}
              >
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
