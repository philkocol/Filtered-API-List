const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const uri = 'https://the-one-api.herokuapp.com/v1';
//passed in api key for authorization
const apiKey = process.argv.slice(2)[0];

function nameSort(a, b){
    let x = a.name.toUpperCase();
    let y = b.name.toUpperCase();

    if(x < y){
        return -1;
    }
    else if(x > y){
        return 1;
    }
    return 0;
}

async function getRequest(){
    let result = await axios.get((uri + '/character'), { headers: { 'Authorization': 'Bearer ' + apiKey} }),
        data = result.data.docs;
    
    data.sort(nameSort);
    return data;
};

/* Backend filtering endpoint.
 * Not implemented here due to front end filtering being less expensive.
 * Would be useful in situations with very large data sets where client memory is a concern.
*/
app.get('/filter/:search', cors(), async function (req, res) {
    res.send('Not implemented.');
});

app.get('/all', cors(), async function (req, res) {
    res.json(await getRequest());
});

app.listen(process.env.PORT || 8085);