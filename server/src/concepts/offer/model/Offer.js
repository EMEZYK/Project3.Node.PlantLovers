import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  description: {
    type: String,
    required: true,
    max: 500,
  },
  city: {
    type: String,
    required: true,
    max: 58,
  },
  location: [
    {
      lat: {
        type: Number,
        required: false,
      },
      lon: {
        type: Number,
        required: false,
      },
    },
  ],
  phoneNumber: {
    type: String,
    required: true,
    min: 9,
    max: 9,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  photos: [
    {
      url: {
        type: String,
        required: true,
      },
      isMainPhoto: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
  height: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Height",
    required: true,
  },
  views: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  forExchange: {
    type: Boolean,
    required: true,
    default: false,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  isArchived: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Offer = mongoose.model("Offer", offerSchema);

export default Offer;
