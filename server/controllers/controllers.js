const models = require('../models/models');

const createPack = (inputArray) => {
  const set = inputArray;
  const pack = [];
  for (let i = 0; i < 9; i += 1) {
    const randomIndex = Math.floor((Math.random() * set.length) - 1);
    if (set[randomIndex] === undefined) {
      i -= 1;
      // eslint-disable-next-line no-continue
      continue;
    }
    pack.push(set[randomIndex]);
    set.splice(randomIndex, 1);
  }
  return pack;
};

module.exports = {
  getPack: (req, res) => {
    models.getPack(req.query)
      .then((results) => {
        const cardArray = results.data.data;
        res.send(createPack(cardArray));
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
