// const syllables = [['f', 'UX', 'k'], ['k', 'OW'], ['d', 'IY']]
const syllables = [['l', 'UX', 'n', 'C']]

let idx = 0

const singNote = (note, phoneme) => {
  if (note.num == -1) return note.length ? `%\t{D ${note.length}}` : ''

  const syllable = syllables[idx++ % syllables.length]
  const consonantLength = Math.max(Math.min(note.length * .25 / (syllable.length - 1), 100), 40)

  return syllable.map(phoneme => {
    let noteLength = phoneme.length == 1 ? consonantLength : note.length - (syllable.length - 1) * consonantLength
    return `${phoneme}\t{D ${noteLength}; P ${note.freq}:85}`
  }).join('\n')
}
// const singNote = (note, phoneme) =>
//   note.num == -1
//     ? `%\t{D ${note.length}}`
//     : `${phoneme}\t{D ${note.length}; P ${note.freq}:0 ${note.freq}:85}`

export default singNote
