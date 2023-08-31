const express = require('express');
const bodyParser = require('body-parser'); // Add this line
const path = require('path');
const app = express();

const my = require('./add_data')



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true})); // Add this line
app.get('/', (req, res) => {
    res.render('login'); // Create a login.ejs file for the login page
});
app.post('/login', (req, res) => { // Handle the login form submission
    const email = req.body.email;
    const password = req.body.password;
    connection.query('SELECT * FROM my_login_db WHERE userEmail = ? AND userPwd = ?', [email, password], (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        } else {
            if (results.length > 0) {
                res.render('welcome', {
                    email: results[0].email
                }); // Create a welcome.ejs file for the welcome page
            } else {
                res.send('Invalid email or password');
            }
        }
    });
});
app.post('/signIn', (req, res) => { // Handle the login form submission
	const userEmail = req.body.email_sign;
	const userPwd = req.body.password_sign;
	
	connection.query('INSERT INTO my_login_db SET ?', {userEmail,userPwd}, (error, results) => {
	if (error) {
	console.error('Error inserting data:', error);
	} else {
	console.log('Data inserted successfully');
	}

	res.render('login');
	});
});
			
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});