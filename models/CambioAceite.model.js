const { model, Schema } = require('mongoose');

const CambioAceiteSchema = new Schema({
    Placa:          { type:String },
    Fehca:          { type:String },
    Detalle:        { type:String },
    KmInicio:       { type:String },
    kmFin:          { type:String },
    Próximo:        { type:String },
    TipoDeNovedad:  { type:String } 
});

const aceite = model('CambioAceite', CambioAceiteSchema);
module.exports = aceite;