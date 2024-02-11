

const  Visitor =require('../models/Vistormode')
exports.vistors = async (req, res) => {
    const interval = req.params.interval; // 'day', 'month', or 'year'
    const today = new Date();
  
    let startDate, endDate;
  
    switch (interval) {
      case 'day':
        startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        break;
      case 'month':
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        break;
      case 'year':
        startDate = new Date(today.getFullYear(), 0, 1);
        endDate = new Date(today.getFullYear() + 1, 0, 1);
        break;
      default:
        return res.status(400).json({ error: 'Invalid interval' });
    }
  
    try {
      const count = await Visitor.countDocuments({
        timestamp: { $gte: startDate, $lt: endDate },
      });
  
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }