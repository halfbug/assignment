const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add an name'],
    maxlength: [70, 'Name cannot be more than 50 character long.']
  },
  vregnumber: {
    type: String,
    required: [true, 'Please add number'],
    unique: [true, 'Number already present'],
    index: true
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
      sparse: true
    }
  },

  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

DriverSchema.post('save', function (doc) {
  doc.lastUpdate = Date.now();
});

module.exports = mongoose.model('Driver', DriverSchema);
