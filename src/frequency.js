const A_FOUR = 69
const REFERENCE_FREQ = 440
const TWELFTH_ROOT = Math.pow(2, 1/12)

const frequency = (note) => REFERENCE_FREQ * Math.pow(TWELFTH_ROOT, note - A_FOUR)

export default frequency
