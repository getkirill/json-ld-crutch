import {compact, expand} from 'jsonld'
import process from 'node:process'

const args = process.argv.slice(2)
switch(args[0]) {
case "expand":
    expand(JSON.parse(args[1])).then(it => console.log(JSON.stringify(it)))
    break
case "compact":
    compact(JSON.parse(args[1]), JSON.parse(args[2])).then(it => console.log(JSON.stringify(it)))
}
