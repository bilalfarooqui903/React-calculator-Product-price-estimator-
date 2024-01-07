

function Column1Input(props) { 

    function eventHandlerForCatg(e) {


        props.stateupdatefunc({ ...props.statevar, ...{ itemCatg: e.target.value } });
    }

    

    return (
        <div style={props.style }>
            <label for="category" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '16px', marginTop: '14px', fontWeight: 'bold', } }>Choose Category </label>
            <select id="category" onClick={eventHandlerForCatg} style={{ backgroundColor: 'white', height: '34px', width: '180px', position: 'relative', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', letterSpacing: '1px', borderRadius: '8px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black'  } }>
                <option value='products' >Beauty Products</option>
                <option value='makeup' >Beauty Makeup</option>
            </select>

            
        </div>

    );
}

export default Column1Input;