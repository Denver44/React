import axios from "axios";

const fetchPeople = async (url) => {
  const response = await axios.get(url);
  return response;
};

const fetchSpecies = async (url) => {
  const response = await axios.get(url);
  return response;
};

export { fetchPeople, fetchSpecies };
