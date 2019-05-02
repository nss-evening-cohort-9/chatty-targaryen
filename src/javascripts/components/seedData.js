import axios from 'axios';

const getSeedData = () => axios.get('../db/seedData.json');

export default { getSeedData };
