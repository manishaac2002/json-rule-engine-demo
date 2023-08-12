import { Engine } from 'json-rules-engine'

const start = async () => {
    //setup a new engine
    const engine = new Engine()

    engine.addRule({
        // define the condition for when result should display
        conditions: {
            all: [{
                fact: 'number',
                operator: 'equal',
                value: 20
            }],
        },
        event: {
            type: 'message',
            params: {
                data: 'This number is 20'
            }
        }
    })


    engine.addRule({
        // define the condition for when result should display
        conditions: {
            all: [{
                fact: 'number',
                operator: 'notEqual',
                value: 20
            }],
        },
        event: {
            type: 'message',
            params: {
                data: 'This number is not 20'
            }
        }
    })

    const facts = { number: 34 }

    //to run the engine
    const { events } = await engine.run(facts)
    events.map(event => console.log(event.params.data))

}
start()
