const Stock_Exchange = require('../Models/1.stock_exchange')


const post_stock_exchange = async (req, res) => {
    
    const {stock_name,actual_price,current_price,valuation,total_stocks,limit_stocks,sector} = req.body
    console.log('Entered post_stock_exchange handler');
    console.log('Received body:', req.body);
    try {
      const stock_detail = await Stock_Exchange.create({stock_name,actual_price,current_price,valuation,total_stocks,limit_stocks,sector})
      console.log('Stored data:', stock_detail);
      res.status(200).json(stock_detail)
    } catch (error) {
      console.error('Error storing data:', error);
      res.status(400).json({error: error.message})
    }
  }


const get_Banking = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Banking' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_Telecommunication = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Telecommunication' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_Natural_Gas_Petroleum = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Natural Gas and Petroleum' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_Steel = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Steel' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_IT = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'IT' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_Investment_Banking = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Investment Banking' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_Automobile = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Automobile' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_Power_Energy = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Power and Energy' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_Tyres = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Tyres Manufacturing Companies' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const get_Healthcare = async (req, res) => {
    console.log('entered the get')
    try {
        // Replace YourModel.find() with the appropriate query for your database
        const stock_data = await Stock_Exchange.find({ sector:'Healthcare & Pharmacy' });
        res.status(200).json(stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};






const patch_stock_exchange = async (req, res) => {
  const { stock_id } = req.params; // Assuming you pass the stock ID as a route parameter
  console.log(stock_id)
  const { actual_price, current_price, valuation, total_stocks, limit_stocks,sector } = req.body;

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
                  sector,
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

  module.exports ={ get_Banking ,
                    get_Telecommunication,
                    get_Natural_Gas_Petroleum,
                    get_Steel,
                    get_IT,
                    get_Investment_Banking,
                    get_Automobile,
                    get_Power_Energy,
                    get_Tyres,
                    get_Healthcare,
                    post_stock_exchange, patch_stock_exchange}
  