

function Column2(props) {


   
    return (
        <div style={props.style}>
            <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center', }}>Net Payout</h2>
            <p ref={props.reference} style={{ fontSize: '24px', color: '#136b66', textAlign: 'center' }}>0</p>
        </div>
    );
}

export default Column2;