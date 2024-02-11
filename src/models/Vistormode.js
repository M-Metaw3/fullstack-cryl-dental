const mongoose = require('mongoose');
const visitorSchema = new mongoose.Schema({
    ip: String,
    timestamp: { type: Date, default: Date.now },
  });
  
  const Visitor = mongoose.model('Visitor', visitorSchema);