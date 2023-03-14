import * as http from 'http';

//Create server and configure request (by the client) and response (by the server)
http.createServer((req, res) => {

    //console.log('req: ', req);

    //res.writeHead(200, { 'Content-type': 'application/json' });
    /*res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    res.writeHead(200, { 'Content-type': 'application/csv' });

    const person = {
        id: 1,
        name: 'Andres'
    }*/

    //res.write(JSON.stringify(person));
    /*res.write('id, name\n');
    res.write('1, Andres\n');
    res.write('2, Valeria\n');
    res.write('3, Sofi\n');
    res.write('4, Ana\n');*/
    //the end() is to close the response

    res.write('Hola Mundo');
    res.end();

})
.listen(8080); //set port to listen

console.log('Listen port', 8081);