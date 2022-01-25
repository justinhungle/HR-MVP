import axios from 'axios';

export const getPack = () => axios.get('/pack');
export const getMyCards = () => axios.get('/myCards');
