require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require("cors"); 
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res ) => {
   
        res.status(200).sendFile(path.join(__dirname, './TablaExamen.html')); 
})
//API
app.use('aceite', require('./routes/aceite.routes'));
app.use((req, res) => {
        res.status(404).send(
                {
                status:404,
                message:"404 not found",
                url_principal: "aceite"
                }
        );
});
app.listen(PORT, () => console.log(`Server running at http://127.0.0.1:${PORT}`))