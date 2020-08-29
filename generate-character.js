import sample from './lib/sample.js'
import name from './lib/name.js'
const ideals = ['order', 'justice', 'heroism', 'compassion', 'generosity',
'pleasure', 'pragmatism', 'honor', 'power', 'salvation', 'the ends']


const flaws = ['fearful', 'megalomaniac', 'idiot', 'impish', 'oblivious',
'thief', 'hedonist', 'liar', 'reckless', 'wrathful', 'vain']


const ideal = () => sample(ideals)
const flawed = () => sample(flaws)
console.log(
  `${name()}, the ${flawed()}; seeker of ${ideal()}`
)

