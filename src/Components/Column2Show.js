import { useEffect } from 'react';

function Column2Show(props) {

    let coln1 = props.passed;
    let varb;

    if (props.statevarb.platform == 'flipkart') {
        if ((props.status.priceInp > 0 && props.status.priceInp <= 500)) { varb = 3; }
        else if ((props.status.priceInp > 500 && props.status.priceInp <= 1000)) { varb = 6; }
        else if ( props.status.priceInp > 1000) { varb = 6; }
        else { varb = 0; }
    }
    else if (props.statevarb.platform == 'jiomart') {
        varb = 7;
    }
    else {
        if (props.status.itemCatg == 'products' && (props.status.priceInp > 0 && props.status.priceInp <= 300)) { varb = 2.5; }
        else if (props.status.itemCatg == 'products' && (props.status.priceInp > 300 && props.status.priceInp <= 500)) { varb = 5; }
        else if (props.status.itemCatg == 'products' && props.status.priceInp > 500) { varb = 8; }
        else if (props.status.itemCatg == 'makeup' && props.status.priceInp > 0) { varb = 6; }
        else { varb = 0; }
    }
   


    const useMutationObserver = (
        ref,
        callback,
        options = {
            childList: true,
        }
    ) => {
        useEffect(() => {
            const start = new MutationObserver(callback);
            start.observe(ref.current, options);
        }, [ref, callback, options]);
    }

   
    function trying(mutationList) {
        for (let mutation of mutationList) {
            if (mutation.type == 'childList') {
                
            }
        }
    }

    useMutationObserver(coln1, trying);

    return (
        <div style={props.style}>
            <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center', }}>Commission ({varb}%)</h2>
            <p id="hi" ref={coln1} style={{ fontSize: '24px', color: '#136b66', textAlign: 'center', }}>{(props.status.priceInp * varb) / 100}</p>
        </div>

    );
}

export default Column2Show;