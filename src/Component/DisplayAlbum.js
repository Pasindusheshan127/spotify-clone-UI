import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "./Context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);
  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="mb-4 text-5xl font-bold md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify </b>. 1,223,232 likes . <b>50 songs , </b>
            about 2hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]">
        <p className="mr-4">
          #<b>Title</b>
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Data Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer mt-2"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline-block w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px] ">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
