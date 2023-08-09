const express = require("express");
const biblioteca = express.Router();
const Libro = require("../models/libro");


biblioteca.get("/", async (req, res) => {
try {
const libros = await Libro.find();
res.json(libros);
} catch (error) {
res.status(500).json({ error: "No se pudo obtener los libros" });
}
});


biblioteca.post("/", async (req, res) => {
try {
const nuevoLibro = new Libro(req.body);
await nuevoLibro.save();
res.json(nuevoLibro);
} catch (error) {
res.status(500).json({ error: "No se pudo crear el libro" });
}
});


biblioteca.put("/:id", async (req, res) => {
try {
const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body,
{
new: true,
});
res.json(Libro);
} catch (error) {
res.status(500).json({ error: "No se actualizo el libro" });
}
});


biblioteca.delete('/:id', async (req, res) => {
try {
await Libro.findByIdAndDelete(req.params.id);
res.json({ message: 'Se elimino el libro' });
} catch (error) {
res.status(500).json({ error: 'No se elimino el libro' });
}
});
module.exports = biblioteca;