import parseMIDI from "./parseMIDI"
import parseNotes from "./parseNotes"
import singNote from "./singNote"
import {exec} from 'child_process'

const notes = parseMIDI(__dirname + '/../examples/axelf.mid')
// const notes = parseNotes("C4:200;C#4:200;E4:200;%:300;C5:200;E5:200;G5:200")

const sayString = notes.map((note) => singNote(note)).join('\n').replace(/:85}$/, ':100}')

const cmd = `say "[[inpt TUNE]]\n${sayString}"`

console.log(cmd)
exec(cmd)