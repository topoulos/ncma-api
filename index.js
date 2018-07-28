const Joi = require('joi')
const express = require('express')
const app = express()
const dojoRepository = require('./dojoRepository');

app.use(express.json());


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/dojos', (req, res) => {
    dojoRepository.getDojos()
        .then((dojo) => {
            debugger;
            res.send(dojo);
    });
});

app.get('/api/schools/:id', (req, res) => {
    const school = schools.find(s => s.id === parseInt(req.params.id));
    if (!school) return res.status(404).send('The school with the given ID was not found.');

    res.send(school);
});

app.post('/api/schools', (req, res) => {

    const { error } = validateSchool(req.body);
    if(error) return res.status(400).send(error.details[0].message);


    const school = {
        id: schools.length + 1,
        name: req.body.name
    };

    schools.push(school);
    res.send(school);

});

app.put('/api/schools/:id', (req, res) => {
    const school = schools.find(s => s.id === parseInt(req.params.id));
    if (!school) return res.status(404).send('The school with the given ID was not found.');

    const { error } = validateSchool(req.body);
    if(error) return res.status(400).send(error.details[0].message);


    school.name = req.body.name;
    res.send(school);
});

function validateSchool(school) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(school, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));