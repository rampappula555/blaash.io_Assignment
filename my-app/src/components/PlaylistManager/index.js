import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { FidgetSpinner } from "react-loader-spinner";
import PlaylistCard from "../PlaylistCard";
const PlaylistManager = ({ videos, getUniqueId }) => {
  const [playlists, setPlaylists] = useState([]);
  const [videosList, setVideosList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(0);
  if (videos.length > 0 && flag === 0) {
    setVideosList(videos);
    setFlag(1);
  }
  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const response = await axios.post(
        "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList",
        { Content_Type: 2 },
        {
          headers: {
            "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
            "X-Tenant-Key": "TYKE070323",
          },
        }
      );
      setPlaylists(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching playlists", error);
    }
  };
  return (
    <div className="playlist-manager">
      <div className="header">
        <h2>Product Playlists</h2>
        <button className="generate-code">Generate Code</button>
      </div>
      <div className="playlists">
        {loading ? (
          <div className="loader-spinner">
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            />
          </div>
        ) : (
          playlists.map((playlist, index) => (
            <PlaylistCard
              playlist={playlist}
              index={index}
              getUniqueId={getUniqueId}
              videosList={videosList}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PlaylistManager;
