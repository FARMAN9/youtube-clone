import { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constants/youtube";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";
import { setHomeVideo } from "../store/appslice";
import { useDispatch, useSelector } from "react-redux";
import API_KEY from "../constants/youtube";

function VideoContainer() {
  const { video, category } = useSelector((store) => store.app);
  console.log(category);
  const dispatch = useDispatch();
  const featchYTVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      //setVideo(res?.data?.items || []);
      dispatch(setHomeVideo(res?.data?.items));
      //
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchVideoByCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (category === "All") {
      featchYTVideo();
    } else {
      fetchVideoByCategory(category);
    }
  }, [category]);
  return (
    <div className="grid grid-cols-3 gap-3">
      {video.map((item, index) => (
        <Link
          to={`/watch?v=${
            typeof item.id === "object" ? item.id.videoId : item.id
          }`}
          key={typeof item.id === "object" ? item.id.videoId : video.id}>
          <VedioCard key={index} item={item} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
