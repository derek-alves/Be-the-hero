const express = require("express");
const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionsController = require('./controllers/sessionController');
const routes = express.Router();

routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.post('/incidents',incidentsController.create);
routes.get('/incidents',incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);
routes.get('/profiles',profileController.index);
routes.post('/sessions',sessionsController.create);
module.exports = routes;

/*routes.get('/ongs', async(request,response)=>{
const ongs = await connection('ongs').select('*');

return response.json(ongs);
});*/

/*routes.post('/ongs',async(request,response) => {
    const{name,email,whatsapp,city,uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({ id });
});*/

