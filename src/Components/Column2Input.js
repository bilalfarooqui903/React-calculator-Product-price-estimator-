


function Column2Input(props) {

    

    function eventHandlerForPlatf(e) {
        

        props.stateupdatefunc({ ...props.statevar, ...{ platfType: e.target.value } });
    }

    return (
        <div style={props.style}>

            <label for="platform" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '16px', marginTop: '14px', fontWeight: 'bold', }}>Standard Shipments</label>
            <select id="platform" onClick={eventHandlerForPlatf} style={{ backgroundColor: 'white', height: '34px', width: '160px', position: 'relative', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', borderRadius: '8px', letterSpacing: '1px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black' }}>
                <option  value= 'local'>Local</option>
                <option  value= 'regional'>Regional</option>
                <option  value= 'national'>National</option>
                
            </select>

           
            
        </div>

    );
}

export default Column2Input;