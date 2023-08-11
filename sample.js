import {Engine} from 'json-rules-engine'

 const start =async()=>{
//setup a new engine
    const engine = new Engine()

    engine.addRule({
        // define the condition for when result should display
        conditions :{
            all:[{
                fact:'displayMessage',
                operator:'equal',
                value:true
            }],
        },
        event:{
            type:'message',
            params:{
                data:'Hello world'
            }
        }
    })
    
    const facts ={displayMessage :true}
    
    //to run the engine
    const  {events} = await engine.run(facts)
    events.map(event=>console.log(event.params.data))

}
 start()
