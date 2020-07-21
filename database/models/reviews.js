// defines the schema of the Reviews table
module.exports = (db, type) => {
  return db.define('review', {
    product_id: {
      type: type.INTEGER,
      allowNull: false
    },
    title: {
      type: type.STRING,
    },
    body: {
      type: type.STRING(2000),
    },
    stars: {
      type: type.INTEGER,
      allowNull: false
    },
    date: {
      type: type.DATE,
    },
    size_rating: {
      type: type.INTEGER,
    },
    comfort_rating: {
      type: type.INTEGER,
    },
    durability_rating: {
      type: type.INTEGER,
    },
    location: {
      type: type.STRING,
    },
    use_for: {
      type: type.STRING,
    },
    purchaser: {
      type: type.BOOLEAN,
    },
    upvotes: {
      type: type.INTEGER,
    },
    downvotes: {
      type: type.INTEGER,
    },
    flagged: {
      type: type.BOOLEAN,
    }
  }, {
    timestamps: false
  })
}