

function Column3Show(props) {

    let coln3 = props.passed;
    let closing_fee;
    if (props.statevarb.platform == 'amazon') {
        if (props.status.priceInp > 0 && props.status.priceInp <= 250) { closing_fee = 3; }
        else if (props.status.priceInp > 250 && props.status.priceInp <= 500) { closing_fee = 6; }
        else if (props.status.priceInp > 500 && props.status.priceInp <= 1000) { closing_fee = 30; }
        else if (props.status.priceInp > 1000) { closing_fee = 56; }
        else { closing_fee = 0; }
    }
    else if (props.statevarb.platform == 'amazonfba') {
        if (props.status.priceInp > 0 && props.status.priceInp <= 250) { closing_fee = 25; }
        else if (props.status.priceInp > 250 && props.status.priceInp <= 500) { closing_fee = 20; }
        else if (props.status.priceInp > 500 && props.status.priceInp <= 1000) { closing_fee = 18; }
        else if (props.status.priceInp > 1000) { closing_fee = 40; }
        else { closing_fee = 0; }
    }
    else if (props.statevarb.platform == 'flipkart') {
        if (props.status.priceInp > 0 && props.status.priceInp <= 300) { closing_fee = 33; }
        else if (props.status.priceInp > 300 && props.status.priceInp <= 500) { closing_fee = 33; }
        else if (props.status.priceInp > 500 && props.status.priceInp <= 1000) { closing_fee = 46; }
        else if (props.status.priceInp > 1000) { closing_fee = 90; }
        else { closing_fee = 0; }
    }
    else if (props.statevarb.platform == 'jiomart') {
        if (props.status.priceInp > 0 && props.status.priceInp <= 500) { closing_fee = 15; }
        else if (props.status.priceInp > 500 && props.status.priceInp <= 1000) { closing_fee = 20; }
        else if (props.status.priceInp > 1000) { closing_fee = 30; }
        else { closing_fee = 0; }
    }



    return (
        <div style={props.style}>
            <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center',  }}>Closing Fees</h2>
            <p ref={ coln3} style={{ fontSize: '24px', color: '#136b66', textAlign: 'center', }}>{closing_fee}</p>
        </div>

    );
}

export default Column3Show;