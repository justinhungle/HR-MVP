const axios = require('axios');

module.exports = {
  getPack: () => axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', { params: { set: 'Legend of Blue Eyes White Dragon' } }),
};
