import { Engine } from 'json-rules-engine'


/**
 * Setup a new engine
 */
let engine = new Engine()

// define a rule for detecting the player has exceeded foul limits.  Foul out any player who:
// (has committed 5 fouls AND game is 40 minutes) OR (has committed 6 fouls AND game is 48 minutes)
engine.addRule({
    "if" : {
        conditions: {
            any: [{
                all: [{
                    fact: 'gameDuration',
                    operator: 'equal',
                    value: 40
                }, {
                    fact: 'personalFoulCount',
                    operator: 'greaterThanInclusive',
                    value: 5
                }]
            }, {
                all: [{
                    fact: 'gameDuration',
                    operator: 'equal',
                    value: 48
                }, {
                    fact: 'personalFoulCount',
                    operator: 'lessThanInclusive',
                    value: 6
                }]
            }, {
                all: [{
                    fact: 'gameDuration',
                    operator: 'equal',
                    value: 58
                }, {
                    fact: 'personalFoulCount',
                    operator: 'lessThanInclusive',
                    value: 8
                }
                ]
            }],
        }    
    },
    "else":'some error occurs',
    event: {  // define the event to fire when the conditions evaluate truthy
        type: 'fouledOut',
        params: {
            message: 'Player has fouled out!'
        },
    }
})

/**
 * Define facts the engine will use to evaluate the conditions above.
 * Facts may also be loaded asynchronously at runtime; see the advanced example below
 */
let facts = {
    personalFoulCount: 7,
    gameDuration: 45
}

// Run the engine to evaluate
engine
    .run(facts)
    .then(({ events }) => {
        events.map(event => console.log(event.params.message) ||console.log(error.params.message) )


    })