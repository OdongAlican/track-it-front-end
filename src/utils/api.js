import axios from 'axios';

const baseUrl = 'https://enigmatic-cliffs-07216.herokuapp.com';

const headers = { headers: { Authorization: `Bearer ${localStorage.user}` } };

export const sendUnauthenticatedRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};

export const LoadMeasurementRequest = async (method, id) => {
  const response = await axios[method](`${baseUrl}/activities/${id}/measurements`, headers);
  return response;
};

export const CreateMeasurementRequest = async (method, data, id) => {
  const response = await axios[method](`${baseUrl}/activities/${id}/measurements`, data, headers);
  return response;
};

export const FetchActivityRequest = async method => {
  const response = await axios[method](`${baseUrl}/activities`, headers);
  return response;
};

export const CreateActivityRequest = async (method, data) => {
  const response = await axios[method](`${baseUrl}/activities`, data, headers);
  return response;
};

export const DeleteActivityRequest = async (method, id) => {
  const response = await axios[method](`${baseUrl}/activities/${id}`, headers);
  return response;
};
