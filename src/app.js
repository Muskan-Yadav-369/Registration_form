const express = require('express');
const app = express();
let port = 3000;
const path = require('path');
const studentCollection = require('./model/model');

const template_path = path.join(__dirname, "../template/views");

app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.urlencoded({ extended: false }));

require('./db/db');

app.get('/', (req, res) => {
  res.render('index');
});



app.post('/register', async (req, res) => {
    try {
      const { name, fatherName, class: studentClass, age, phone, location } = req.body;
  
      // Validate phone number
      if (!isValidPhoneNumber(phone)) {
        return res.send("Invalid phone number. Please enter a 10-digit number.");
      }
  
      const studentData = new studentCollection({
        name,
        fatherName,
        class: studentClass,
        age,
        phone,
        location
      });
  
      const postData = await studentData.save();
      res.render('output', { details: postData }); // Render the output view with student details
    } catch (error) {
      res.send(error);
    }
  });
  
  // Function to validate phone number
  function isValidPhoneNumber(phone) {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phone);
  }



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
