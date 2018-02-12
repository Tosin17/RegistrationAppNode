var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname + '/'));

app.get('/students/:id', function(req, res) {
    var studentId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=students.length;i<len;i++) {
        if (students[i].id === studentId) {
            data = students[i];
            break;
        }
    }
    res.json(data);
});

app.get('/students', function(req, res) {
    res.json(students);
    //res.json(500, { error: 'An error has occurred!' });
});

// app.get('/orders', function(req, res) {
//     var orders = [];
//     for (var i=0,len=students.length;i<len;i++) {
//         if (students[i].orders) {
//             for (var j=0,ordersLen=students[i].orders.length;j<ordersLen;j++) {
//                 orders.push(students[i].orders[j]);
//             }
//         }
//     }
//     res.json(orders);
// });

app.delete('/students/:id', function(req, res) {
    var studentId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=students.length;i<len;i++) {
        if (students[i].id === studentId) {
            students.splice(i,1);
            data = { status: true };
            break;
        }
    }
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

var students = [

    {
        id: 1,
        first_name: '2000-12-02',
        last_name:'John',
        email:'Chandler',
        gender:'Seattle',
        address: 'Lorem ipsum6',
        test_scores: [
            {
                id: 1,
                Maths: 30,
                English: 20,
                Total: 10

            }
        ]
    },
    {
        id: 2,
        first_name: '1965-01-25',
        last_name:'Zed',
        email:'Las Vegas',
        gender:'Seattle',
        address: 'Lorem ipsum',
        test_scores: [
            {
                id: 2,
                Maths: 30,
                English: 20,
                Total: 10
            },
            {
                id: 3,
                Maths: 30,
                English: 20,
                Total: 10

            }
        ]
    },
    {
        id: 3,
        first_name: '1944-06-15',
        last_name:'Tina',
        email:'New York',
        gender:'Seattle',
        address: 'Lorem ipsum',
        test_scores: [
            {
                id: 4,
                Maths: 30,
                English: 20,
                Total: 10

            }
        ]
    },
    {
        id: 4,
        first_name: '1995-03-28',
        last_name:'Dave',
        email:'Seattle',
        gender:'Seattle',
        address: 'Lorem ipsum',
        test_scores: [
            {
                id: 5,
                Maths: 30,
                English: 20,
                Total: 10

            }
        ]
    }
];