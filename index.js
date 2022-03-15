const app = require('./app/app');




const PORT = process.env.PORT

app.listen(PORT, _ => console.log(`server is runing on http://localhost:${PORT}`))