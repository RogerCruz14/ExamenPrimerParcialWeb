
const cheerio = require('cheerio');
const cron = require('node-cron');
const axios = require('axios').default;

cron.schedule('*/2 * * * *', async () => {
    
    const html = await axios.get('http://127.0.0.1:3000');
    const $ = cheerio.load(html.data);
    const filas = $('tbody.table-body tr');

    filas.each( async (index, el) => {
        const Placa = $(el).children().eq(0).text().toString();
        const Fecha = $(el).children().eq(1).text().toString();
        const Detalle = parseInt($(el).children().eq(2).text().toString(),10);
        const KmInicio = parseInt($(el).children().eq(3).text().toString(),10);
        const KmFin = $(el).children().eq(4).text().toString();
        const Proximo = $(el).children().eq(5).text().toString();
        const aceite = {Placa, Fecha, Detalle, KmInicio, KmFin, Proximo};
        axios.post('http://127.0.0.1:3000/aceite', aceite)
        .then( response => console.log(response.data));
    } );

    console.log('El Kilometraje');
});