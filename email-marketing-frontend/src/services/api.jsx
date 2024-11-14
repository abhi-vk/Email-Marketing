import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const saveFlowchart = (flowData) => api.post('/flowchart', flowData);
export const getFlowchart = () => api.get('/flowchart');
export const scheduleEmail = (emailData) => api.post('/email', emailData);
