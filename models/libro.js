const moongoose = require('mongoose');
moongoose.connect("mongodb://localhost:27017/Biblioteca", {
useUnifiedTopology: true,
useNewUrlParser: true,
});


const LibroSchema = new moongoose.Schema({
titulo: String,
autor: String
}, { collection: 'MyBongoLibros' });

const Libro = moongoose.model('Libro', LibroSchema);
module.exports = Libro;