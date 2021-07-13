import React, { useEffect, useState }  from 'react'
import LogButtons from './components/LogButtons'

function App() {

    const [log, setLog] = useState([])

	useEffect(() => {
		fetch("./log/log.json", {
        
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
			.then((response) => response.json())
			.then((data) => setLog(data))
	}, [])

    

    return (
        <div className="App">
            <div>
                {console.log(log)}
                {<LogButtons song={log.TProgramLogSerialize.ProgramLog.TProgramLogItem[0].Description}/>}
                {JSON.stringify(log, null, 2)}

                <LogButtons song='Two'/>
                <LogButtons song='Three'/>
                <LogButtons song='Four'/>
                <LogButtons song='Five'/>
            </div>
        </div>
    );
}

export default App;
