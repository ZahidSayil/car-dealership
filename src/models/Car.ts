import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'Please provide the car make'],
    trim: true,
  },
  model: {
    type: String,
    required: [true, 'Please provide the car model'],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, 'Please provide the year'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide the price'],
  },
  mileage: {
    type: Number,
    required: [true, 'Please provide the mileage'],
  },
  exteriorColor: {
    type: String,
    trim: true,
  },
  interiorColor: {
    type: String,
    trim: true,
  },
  fuelType: {
    type: String,
    trim: true,
  },
  transmission: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  features: [{
    type: String,
    trim: true,
  }],
  images: [{
    type: String,  // URLs to images
    trim: true,
  }],
  status: {
    type: String,
    enum: ['available', 'sold', 'pending'],
    default: 'available',
  }
}, {
  timestamps: true,
});

export default mongoose.models.Car || mongoose.model('Car', CarSchema);