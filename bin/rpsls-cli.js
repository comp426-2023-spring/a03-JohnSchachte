import { rpsls_game } from "../lib/rpsls.js"
import arg_parser from 'minimist'

const input_args = arg_parser(process.argv.slice(2))

const usage_info = `How to use: node-rpsls [CHOICE]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
  -h, --help        show this help message and exit
  -r, --rules       show the rules and exit
Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`

const game_rules = `Lizard-Spock Expansion of Rock Paper Scissors Rules:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
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
    console.log(JSON.stringify((rpsls_game(choice))))
    
} catch (err){
    console.log(usage_info)
    console.log(game_rules)
    process.exit(1)
}