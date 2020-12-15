import frequency from "./frequency"
import notes from "./notes"

class Note {
  constructor(noteMarkup) {
    let [_, note, key, octave, length] = noteMarkup.match(/(([A-G]#?)(\d)|%):(\d+)/i)

    this.num    = note == '%' ? -1   : (+octave + 1) * 12 + notes.indexOf(key)
    this.freq   = note == '%' ? null : frequency(this.num)
    this.length = length
    this.key    = key
    this.octave = octave
    this.note   = note
  }
}

export default Note
