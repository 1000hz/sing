import frequency from "./frequency"
import notes from "./notes"

class MIDINote {
  constructor(num, length = 300) {
    this.num    = num
    this.length = length

    if (num != -1) {
      this.key    = notes[num % 12]
      this.octave = ~~(num / 12) - 1
      this.note   = `${this.key}${this.octave}`
      this.freq   = frequency(this.num)
    }
  }
}

export default MIDINote
