const Flowchart = require('../models/flowchart');

// Save flowchart data to MongoDB
exports.saveFlowchart = async (req, res) => {
  try {
    const { nodes, edges } = req.body;

    // Create a new flowchart document
    const newFlowchart = new Flowchart({ nodes, edges });
    await newFlowchart.save();

    res.status(201).json({ message: 'Flowchart saved successfully' });
  } catch (error) {
    console.error('Error saving flowchart:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get saved flowchart data
exports.getFlowchart = async (req, res) => {
  try {
    const flowchart = await Flowchart.findOne().sort({ createdAt: -1 }); // Get latest flowchart
    res.status(200).json(flowchart);
  } catch (error) {
    console.error('Error fetching flowchart:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
