const mongoose = require('mongoose');

const flowchartSchema = new mongoose.Schema({
  nodes: [
    {
      id: { type: String, required: true },
      type: { type: String, required: true }, // e.g. Cold Email, Wait/Delay, Lead Source
      data: { type: Object }, // Custom data for each node
      position: { type: Object }, // Position in flowchart (x, y)
    },
  ],
  edges: [
    {
      source: { type: String, required: true },
      target: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Flowchart = mongoose.model('Flowchart', flowchartSchema);

module.exports = Flowchart;
