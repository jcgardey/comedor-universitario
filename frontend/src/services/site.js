import axios from '../axios';


export const getAllSites = () => axios.get('/api/site');
