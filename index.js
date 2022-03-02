const express = require('express');

const app = express();
app.use(express.json());

app.route("/").get(function (req, res) {
    res.send("Bajaj Backend API");
  });

app.post('/bfhl', (req, res)=> {
    const val = {
        is_success: true,
        user_id: "anshit_mishra_11901808",
        email: "anshit.1111@gmail.com",
        roll_number: "11901808",
        numbers: [],
        alphabets: []
    };

    try { 
        const values = req.body.data

        alphabet = []
        number = []

        values.forEach(value => {
            if(Number.isInteger(parseInt(value))){
                number.push(value)
            } else {
                alphabet.push(value)
            }
        });

        val.numbers = number
        val.alphabets = alphabet

        res.send(val);
    } catch (error) {
        if(error){
            console.log(error)
            val.is_success = false
            res.status(400).send(val)
            return;
        }
    } 
    
});

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})