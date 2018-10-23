import axios from 'axios';

/**
 * Helper function for axios
 *
 */
export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
