const axios = require('axios');
const get_news=async (req, res) => {
    try {
        
        console.log("Sentiment Analysis Model executed");
        

        const response = await axios.get(`http://127.0.0.1:8000`);
        const responseData = response.data;
        const responseHeaders = response.headers;

        
        res.status(200).json({
            data: responseData,
            headers: responseHeaders,
        });
    } catch (error) {
        
        console.error('Error fetching data from FastAPI:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports={get_news};