const app = require('./app');
const port = process.env.RUNNING_PORT || 5500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
