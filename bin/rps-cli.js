import {rps_game} from '../lib/rpslib.js'
import arg_parser from 'minimist'

const input_args = arg_parser(process.argv.slice(2))

const usage_info = `How to use: node-rps [CHOICE]
Play Rock Paper Scissors (RPS)
  -h, --help      show this help message and exit
  -r, --rules     show the rules and exit
Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`

const game_rules = `Rock Paper Scissors Rules:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`

if (input_args.help_message || input_args.h) {
    console.log(usage_info)
    process.exit(0)
}
if (input_args.rules || input_args.r) {
    console.log(game_rules)
    process.exit(0)
}
let choice = input_args._[0]

try {
    console.log(JSON.stringify(rps_game(choice)))
    
} catch (err) {
    console.log(usage_info)
    console.log(game_rules)
    process.exit(1)
}
