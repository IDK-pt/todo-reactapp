import {useState, useEffect} from 'react'

function FlashAlert({severity, msg, change}){

    const elementClassClean = 'row alert-fix alert-' + severity

    const [fade, setFade] = useState('')

    useEffect(() => {
        console.log('use')
        setFade('fadeIn ' + elementClassClean)
        setTimeout(() => { 
            setFade('fadeOut ' + elementClassClean)
        }, 5000);
    }, [change])


    return(
        <div className={fade}>
            <h2>{msg}</h2>
        </div>
    );
}

export default FlashAlert