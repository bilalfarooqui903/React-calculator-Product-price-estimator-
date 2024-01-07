
function Column4Input(props) {


    function eventHandlerForWeight(e) {
         props.stateupdatefunc({ ...props.statevar, ...{ weight: e.target.value } });
    }

    function eventHandlerForWeightType(e) {
        props.stateupdatefunc({ ...props.statevar, ...{ weightTyp: e.target.value } });
    }


    return (
        <div style={props.style}>
            <label for="weight_value" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '16px', marginTop: '14px', fontWeight: 'bold' }}>Weight </label>

            <div style={{height: '31px', width: '100%', display: 'flex', flexDirection: 'row', }}>
            <input type='number' min='0' max='100000' onChange={eventHandlerForWeight} id='weight_value' style={{ backgroundColor: 'white', height: '31px', width: '130px', position: 'relative', marginLeft: 'auto', marginRight: '5px', paddingLeft: '15px', borderRadius: '8px', letterSpacing: '1px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black' }}></input>
            <select onClick={eventHandlerForWeightType} id='weight_value_type' style={{ backgroundColor: 'white', height: '35px', width: '80px', position: 'relative', marginLeft: '5px', marginRight: 'auto', paddingLeft: '15px', borderRadius: '8px', letterSpacing: '1px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black' }} >
                <option value='gm'>gm</option>
                <option value='kg'>kg</option>
                </select>
            </div>

        </div>

    );
}

export default Column4Input;