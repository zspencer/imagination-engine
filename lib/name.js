import roll from './roll.js'
import sample from './sample.js'

const times = (num) => Array.from(Array(roll(num) + 1))
const syllabi = [ 'arn', 'ei', 'ahr', 'ban', 'uld', 'car', 'irs', 'daw', 'mur',
'cun', 'vin', 'cul']

export default function name () {
   return times(3).map(() => sample(syllabi)).join('')
}
