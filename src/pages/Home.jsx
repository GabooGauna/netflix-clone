import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
        rowID="1"
      />
      <Row title="Popular" fetchURL={requests.requestPopular} rowID="2" />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} rowID="3" />
      <Row title="UpComing" fetchURL={requests.requestUpComing} rowID="4" />
    </>
  );
};

export default Home;
