import { Engine } from 'json-rules-engine'

const start = async () => {
    //setup a new engine
    const engine = new Engine()

    // engine.addRule()
    engine.addRule({
        // define the condition for when result should display
        conditions: {
            all: [{
                fact: 'string',
                operator: 'equal',
                value: 'green'
            }]
        },
        event: {
            type: 'message',
            params: {
                data: 'status'
            }
        },
        conditions: {
            all: [{
                fact: 'string',
                operator: 'equal',
                value: 'orange'
            }]
        },
        event: {
            type: 'message',
            params: {
                data: 'status'
            }
        },
        conditions: {
             all: [{
                 fact: 'string',
                 operator: 'notEqual',
                 value: 'green'
             }],
         },
        event: {
            type: 'message',
            params: {
                data: 'No signal'
            }
        },
        conditions: {
             all: [{
                 fact: 'string',
                 operator: 'notEqual',
                 value: 'orange'
             }],
         },
        event: {
            type: 'message',
            params: {
                data: 'No signal'
            }
        },
    })
    const facts = { string: 'orange' }

    //to run the engine
    const { events } = await engine.run(facts)
    events.map(event => console.log(event.params.data))

}
start()
