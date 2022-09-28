const fs = require('fs');

//customized data
const customer = [
{
    name: 'Shakil Ahmed',
    order_id: 'BS1200',
    order_cnt: 2,
    order_item: 'Apple iPhone 14 Pro Max Gold'
},
{
    name: 'Md. Rifat Islam Robin',
    order_id: 'BS1208',
    order_cnt: 5,
    order_item: 'hp probook 445'
}
]

//write on json file
fs.writeFile( './customer.json', JSON.stringify(customer, null, 2), err => {
    if( err ){
        console.log(err);
    }
    else{
        console.log('File successfully written!');
    }
});

//read json file
fs.readFile('./customer.json', 'utf-8', (err, jsonString) => {
    if( err ){
        console.log( err );
    } else {
        try {
            const person = JSON.parse(jsonString);
            console.log('Before updating the data...');
            console.log(person[0]);
        } catch (err) {
            console.log('Error parsing JSON', err);
        }
        
    }
});

//update json file
fs.readFile('./customer.json', 'utf-8', (err, jsonString) => {
    if( err ){
        console.log( err );
    } else {
        try {
            const person = JSON.parse(jsonString);
            person[0].order_id = 'BS0798';
            person[0].order_cnt += 2;
            fs.writeFile( './customer.json', JSON.stringify(person, null, 2), err => {
                if( err ){
                    console.log(err);
                }
                else{
                    console.log('File successfully updated!');
                    console.log('After updating the data...');
                    console.log(person[0]);
                }
            });
        } catch (err) {
            console.log('Error parsing JSON', err);
        }
        
    }
});