import Note from "./Note"

const parseNotes = (notes) => {
  return notes.split(';').map(note => new Note(note))
}

export default parseNotes
