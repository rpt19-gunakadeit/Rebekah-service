// defines the schema of the Users table
module.exports = (db, type) => {
  return db.define('user', {
    username: {
      type: type.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  })
}