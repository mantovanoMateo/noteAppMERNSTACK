const noteCtlr = {};

const Note = require('../models/Note');

noteCtlr.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
};

noteCtlr.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();
    console.log(newNote);
    res.json({ message: 'Note saved' })
};

noteCtlr.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

noteCtlr.updateNote = async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id,req.body);
    res.json({ message: 'Note updated' })
};

noteCtlr.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' })
};

module.exports = noteCtlr;