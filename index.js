import { Engine } from 'json-rules-engine'

const start = async () => {
    //setup a new engine
    const engine = new Engine()

    engine.addRule({
        // define the condition for when result should display
        conditions: {
            all: [{
                fact: 'string',
                operator: 'equal',
                value:  'black'&&'orange'&&'no color'
            }],
        },
        event: {
            type: 'message',
            params: {
                data: 'Warning'
            }
        }
    })


    engine.addRule({
        // define the condition for when result should display
        conditions: {
            all: [{
                fact: 'string',
                operator: 'notEqual',
                value: 'black'&&'orange'&&'no color'
            }],
        },
        event: {
            type: 'message',
            params: {
                data: 'No signal'
            }
        }
    })
    // engine.addRule({
    //     // define the condition for when result should display
    //     conditions: {
    //         all: [{
    //             fact: 'string',
    //             operator: 'equal',
    //             value:  'green'&&'blue'
    //         }],
    //     },
    //     event: {
    //         type: 'message',
    //         params: {
    //             data: 'status'
    //         }
    //     }
    // })


    engine.addRule({
        // define the condition for when result should display
        conditions: {
            all: [{
                fact: 'string',
                operator: 'notEqual',
                value: 'green'&&'blue'
            }],
        },
        event: {
            type: 'message',
            params: {
                data: 'No signal'
            }
        }
    })

    const facts = { string: 'bl' }

    //to run the engine
    const { events } = await engine.run(facts)
    events.map(event => console.log(event.params.data))

}
start()
