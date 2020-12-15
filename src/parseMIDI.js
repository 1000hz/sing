import fs from "fs"
import midiParser from "midi-file-parser"
import MIDINote from "./MIDINote"

function handleNoteOn(state, event) {
  if (state.currentNote) {
    state.currentNote.length = state.currentDelta * state.msPerQuarterNote
    state.notes.push(new MIDINote(state.currentNote.num, state.currentNote.length))
    state.currentDelta = 0
  }

  state.currentNote = {
    num: event.noteNumber
  }

  return state
}

function handleNoteOff(state) {
  state.currentNote.length = state.currentDelta * state.msPerQuarterNote
  state.notes.push(new MIDINote(state.currentNote.num, state.currentNote.length))
  state.currentDelta = 0

  state.currentNote = {
    num: -1
  }

  return state
}

function reduceEvents(midiEvents, state) {
  return midiEvents.reduce((state, event) => {
    state.currentDelta += event.deltaTime

    if (event.subtype == "noteOn") {
      return handleNoteOn(state, event)
    }

    if (event.subtype == "noteOff" && state.currentNote.num == event.noteNumber) {
      return handleNoteOff(state)
    }

    return state
  }, state)
}

const parseMIDI = (filename) => {
  const file = fs.readFileSync(filename, 'binary')
  const midiEvents = midiParser(file).tracks[0]
  const state = {
    currentNote: null,
    currentDelta: 0,
    msPerQuarterNote: 5,
    tempo: 120,
    timeSignature: {numerator: 4, denominator: 4},
    notes: []
  }

  return reduceEvents(midiEvents, state).notes
}

export default parseMIDI
