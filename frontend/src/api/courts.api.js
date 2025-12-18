// src/api/courts.api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const courtsAPI = axios.create({
  baseURL: `${API_BASE_URL}/courts`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token
courtsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Try to get from auth object
      const auth = JSON.parse(localStorage.getItem('auth') || '{}');
      if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Get all courts
export const getAllCourts = async () => {
  try {
    const response = await courtsAPI.get('/');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch courts' };
  }
};

// Get court by ID
export const getCourtById = async (courtId) => {
  try {
    const response = await courtsAPI.get(`/${courtId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch court' };
  }
};

// Create court (admin only)
export const createCourt = async (courtData) => {
  try {
    const response = await courtsAPI.post('/', courtData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to create court' };
  }
};

// Update court (admin only)
export const updateCourt = async (courtId, courtData) => {
  try {
    const response = await courtsAPI.put(`/${courtId}`, courtData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update court' };
  }
};

// Delete court (admin only)
export const deleteCourt = async (courtId) => {
  try {
    const response = await courtsAPI.delete(`/${courtId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete court' };
  }
};

export default courtsAPI;