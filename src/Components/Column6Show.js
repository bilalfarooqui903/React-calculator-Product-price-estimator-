

function Column6Show(props) {

    let coln6 = props.passed;
    let variable = (((props.status.priceInp * 0.95) / 100) + ((props.status.priceInp * 0.95) / 100)).toFixed(2);

    
    return (
        <div style={props.style}>
            <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center', }}>TCS(1%) + TDS(1%)</h2>
            <p ref={ coln6} style={{ fontSize: '24px', color: '#136b66', textAlign: 'center', }}>{variable}</p>
            
        </div>
    );
}

export default Column6Show;