const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'sql8.freemysqlhosting.net',
    user: 'sql8641646',
    password: 'ycq1DADz6j',
    database: 'sql8641646'
});

exports.handleData = (command , data,)=>{

    if(command === 'create'){
        connection.query('INSERT INTO my_login_db SET ?', data, (error, results) => {
            if (error) {
            console.error('Error inserting data:', error);
            } else {
            console.log('Data inserted successfully');
            return true
            }
        });
    }

    if(command === 'check'){
        connection.query('SELECT * FROM my_login_db WHERE userEmail = ? AND userPwd = ?', [data], (error, results) => {
            if (error) {
                console.error('Error fetching data:', error);
                return false
            } else {
                if (results.length > 0) {
                    return true
                } else {
                    return false
                }
            }
        });
    }

};
