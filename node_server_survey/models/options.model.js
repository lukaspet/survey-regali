module.exports = (sequelize, Sequelize) => {
  const Options = sequelize.define("options", {
    regalo: {
      type: Sequelize.STRING
    }
  });

  return Options;
};
