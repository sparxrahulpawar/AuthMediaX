const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5010;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
