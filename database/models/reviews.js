module.exports = (db, type) => {
  return db.define('review', {
    product_id: {
      type: type.INTEGER,
      allowNull: false
    },
    title: {
      type: type.STRING,
      allowNull: true
    },
    body: {
      type: type.STRING,
      allowNull: true
    },
    stars: {
      type: type.INTEGER,
      allowNull: false
    },
    date: {
      type: type.STRING,
      allowNull: true
    },
    size_rating: {
      type: type.INTEGER,
      allowNull: true
    },
    comfort_rating: {
      type: type.INTEGER,
      allowNull: true
    },
    durability_rating: {
      type: type.INTEGER,
      allowNull: true
    },
    location: {
      type: type.STRING,
      allowNull: true
    },
    user_id: {
      type: type.INTEGER,
      allowNull: false
    }
  })
}