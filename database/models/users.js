module.exports = (db, type) => {
  return db.define('user', {
    firstname: {
      type: type.STRING,
      allowNull: false
    },
    lastname: {
      type: type.STRING,
      allowNull: false
    },
    username: {
      type: type.STRING,
      allowNull: false
    },
  })
}