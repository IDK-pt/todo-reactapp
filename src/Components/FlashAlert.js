import {useState, useEffect} from 'react'

function FlashAlert({severity, msg}){

    const elementClassClean = 'mb-3 row alert-fix alert-' + severity

    const [hide, setHide] = useState({display: 'none'})

    useEffect(() => {
        console.log('use')
        setHide({display:'block'})
        setTimeout(() => { 
            setHide({display:'none'})
        }, 5000);
    }, [severity])

    return(
        <div style={hide}>
            <div className={elementClassClean}>
                <h2>{msg}</h2>
            </div>
        </div>   
    );
}

export default FlashAlert