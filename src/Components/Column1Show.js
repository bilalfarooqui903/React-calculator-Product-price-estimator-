
function Column1Show(props) {

    let invoice;
    let coln2 = props.passed;
    if (props.status.priceInp > 0) { invoice = props.status.priceInp; }
    else { invoice = 0; }


    return (
        <div style={props.style}>
            <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center', }}>Invoice Value (Rs)</h2>
            <p ref={ coln2}  style={{fontSize: '24px', color: '#136b66', textAlign: 'center', }}>{invoice}</p>
        </div>

    );
}

export default Column1Show;