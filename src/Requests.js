const key = "4c6a1312394d6ad78ed4396b6ac6d548";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`,
  requestUpComing: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=4`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=2`,
};

export default requests;
