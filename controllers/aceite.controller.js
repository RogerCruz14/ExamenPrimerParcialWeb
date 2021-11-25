const notas = require('../models/CambioAceite.model');
require('../mongodb');

exports.cambioAceite = (req, res) => {
    nota.find({}).then( aceite =>{
        const notas_errores = aceite.filter( aceite => aceite.tipoerror )
        res.status(200).send(aceite_errores);
    } )  
}

exports.insertcambioAceite = (req, res) => {
    const { placa, fecha, detalle, KmInicio, KmFin, proximo } = req.body;
    let tipoerror = '';
    if(KmInicio+KmFin >= 14)
    {
        tipoerror = 'Diferencia entre kilometraje Inicial';
    }
    else
    {
        tipoerror = 'Diferencia entre kilometraje Final';
    }
    const new_aceite = new Nota({
        placa, 
        fecha, 
        detalle, 
        KmInicio, 
        KmFin, 
        proximo
    });
    new_aceite.save().then( new_aceite => res.status(201).send(new_aceite));
}