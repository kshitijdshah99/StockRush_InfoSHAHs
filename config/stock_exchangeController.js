const Stock_Exchange = require('../Models/1.stock_exchange')


const post_stock_exchange = async (req, res) => {
    
    const {stock_name,actual_price,current_price,valuation,total_stocks,limit_stocks} = req.body
    console.log('Entered post_stock_exchange handler');
    console.log('Received body:', req.body);
    try {
      const stock_detail = await Stock_Exchange.create({stock_name,actual_price,current_price,valuation,total_stocks,limit_stocks})
      console.log('Stored data:', stock_detail);
      res.status(200).json(stock_detail)
    } catch (error) {
      console.error('Error storing data:', error);
      res.status(400).json({error: error.message})
    }
  }


const get_stock_exchange = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ stock_name: 'Hi' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const patch_stock_exchange = async (req, res) => {
  const { stock_id } = req.params; // Assuming you pass the stock ID as a route parameter
  console.log(stock_id)
  const { actual_price, current_price, valuation, total_stocks, limit_stocks } = req.body;

  try {
      const updatedStock = await Stock_Exchange.findByIdAndUpdate(
          stock_id,
          {
              $set: {
                  actual_price,
                  current_price,
                  valuation,
                  total_stocks,
                  limit_stocks,
              },
          },
          { new: true }
      );

      if (!updatedStock) {
          return res.status(404).json({ error: 'Stock not found' });
      }

      res.status(200).json(updatedStock);
  } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

  module.exports ={ get_stock_exchange , post_stock_exchange, patch_stock_exchange}
  