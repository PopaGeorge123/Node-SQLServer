const express = require('express');
const { get } = require('http');
const path = require('path');
const app = express();
const dbConn = require('./add_data.js')

// RESP w/ FILES
// res.sendFile(path.join(__dirname, 'pages', 'index.html'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});
app.get('/mainStyle.css',(req,res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'style.css'));
});
app.get('/mainScript.js',(req,res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'script.js'));
});

app.post('/loginUser',(req,res)=>{
    let requestBody = '';
    req.on('data',chunk =>{
        requestBody += chunk.toString();
    });

    req.on('end',() =>{
        const postData = JSON.parse(requestBody);
        console.log('Received POST data: ', postData);
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('POST request received with succes');

        if(dbConn.handleData('check',postData)){
            res.sendFile(path.join(__dirname, 'pages', 'welcome.html'));
            }else{
                console.log('\nIncorrect username or password');
            }

    });

    // if(dbConn.handleData('check',postData)){
    //     res.sendFile(path.join(__dirname, 'pages', 'welcome.html'));
    // }else{
    //     console.log('\nIncorrect username or password');
    // }
    
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});