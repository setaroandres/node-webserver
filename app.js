import express from 'express';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Usar HBS para renderizar vistas y servir sitio web dinamico
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => console.log(err));

//Middleware to make folder public public
//Serve static content
app.use(express.static('public'));

//Si servimos el path estatico este get no se ejecuta
/*app.get('/', (req, res) => {
    res.send('Home page');
});*/

app.get('/hello-world', (req, res) => {
    res.send('Hello World on its own path');
});

app.get('/', (req, res) => {
    //Usamos .render para renderizar la vista con handebars (dentro de la folder 'views')
    //Les podemos pasar argunmentos que van a ser utilizados al momento de renderizar la view
    res.render('home', {
        name: 'Andrés Setaro',
        title: 'Node Course'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Andrés Setaro',
        title: 'Node Course'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Andrés Setaro',
        title: 'Node Course'
    })
})

/*app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');//SendFile para servir archivos
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');//SendFile para servir archivos
});*/

/*app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');//SendFile para servir archivos
});*/

app.listen(port , () => {
    console.log(`Example app listening at http://localhost:${port}`);
});