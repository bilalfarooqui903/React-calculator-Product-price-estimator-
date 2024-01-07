
function Column5Input(props) {

    const styobj1 = { width: '320px', height: '100px', paddingTop: '30px', paddingBottom: '20px', marginLeft: '15%', display: 'flex', flexDirection: 'row',  };

    function eventHandlerForWeight(e) {
        props.stateupdatefunc({ ...props.statevar, ...{ length: e.target.value } });
    }

    return (
        <div style={styobj1 }>
            <label for="weight_value" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '0px', marginTop: '0px', fontWeight: 'bold' , }}>Length (cm)</label>
            <input type='number' min='0' max='100000' onChange={eventHandlerForWeight} id='weight_value' style={{ backgroundColor: 'white', height: '31px', width: '120px',  position: 'relative',  marginLeft: '26px', paddingLeft: '15px', borderRadius: '8px', letterSpacing: '1px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black' }}></input>
        </div>
    );
}

export default Column5Input;