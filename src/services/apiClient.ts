import axios from "axios";

export interface FetchData<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cb546930e8be4590a72c1f2dd28ef6d0",
  },
});
