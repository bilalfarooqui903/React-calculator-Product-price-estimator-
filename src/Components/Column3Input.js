

function Column3Input(props) {
    let first;

    function eventHandlerForPrice(e) {    
        props.stateupdatefunc({ ...props.statevar, ...{ priceInp: e.target.value } });
    }

    function seceventHandler(e) {
        props.stateupdatefunc({ ...props.statevar, ...{ flipType: e.target.value } });
    }

    if (props.statevarb.platform == 'flipkart') {
        first = <div style={{ height: '31px', width: '100%', display: 'flex', flexDirection: 'row', }}>
            <input type='number' min='1' max='100000000' onChange={eventHandlerForPrice} id='unique' style={{ backgroundColor: 'white', height: '31px', width: '130px', position: 'relative', marginLeft: 'auto', marginRight: '5px', paddingLeft: '15px', borderRadius: '8px', letterSpacing: '1px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black' }}></input>
            <select onClick={seceventHandler} style={{ backgroundColor: 'white', height: '35px', width: '80px', position: 'relative', marginLeft: '5px', marginRight: 'auto', paddingLeft: '15px', borderRadius: '8px', letterSpacing: '1px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black' }}>
                <option value='pre'> pre</option>
                <option value='post'> post</option>
            </select>
        </div>
    }
    else {
        first = <input type='number' min='1' max='100000000' onChange={eventHandlerForPrice} id='unique' style={{ backgroundColor: 'white', height: '31px', width: '164px', position: 'relative', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '15px', borderRadius: '8px', letterSpacing: '1px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black' }}></input>
    }

    return (
        <div style={props.style}>
            <label for="unique" style={{ fontSize: '24px', textAlign: 'center', marginBottom: '16px', marginTop: '14px', fontWeight: 'bold'  }}>Selling Price </label>
            {first}

        </div>

        
    );
}


export default Column3Input;