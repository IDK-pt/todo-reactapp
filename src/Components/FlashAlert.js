function FlashAlert({severity, msg}){

    const elementClassClean = 'mb-3 row alert-fix alert-' + severity

    return(
        <div className={elementClassClean}>
            <h2>{msg}</h2>
        </div>
    );
}

export default FlashAlert