import Column1Input from './Column1Input.js';
import Column2Input from './Column2Input.js';
import Column3Input from './Column3Input.js';
import Column4Input from './Column4Input.js';
import Column5Input from './Column5Input.js';
import Column6Input from './Column6Input.js';
import Column7Input from './Column7Input.js';

function Input(props) {

    const styobj = { width: '45%', height: '50%', marginLeft: '4%', display: 'flex', flexDirection: 'column' };
    

    return (
        <div style={{ position: 'relative', top: '10px', backgroundColor: '#F5FEFD',border: '1px black solid', height: '230px', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'row',} }>
            <div style={props.style1 }>
            <Column1Input style={styobj} stateupdatefunc={props.stateupdatefunc} statevar={props.statevar} />
            <Column2Input style={styobj} stateupdatefunc={props.stateupdatefunc} statevar={props.statevar} />
            <Column3Input style={styobj} statevarb={props.statevarb} stateupdatefunc={props.stateupdatefunc} statevar={props.statevar} />
            <Column4Input style={styobj} stateupdatefunc={props.stateupdatefunc} statevar={props.statevar} />
            </div>
            <div style={props.style2}>
                <Column5Input stateupdatefunc={props.stateupdatefunc} statevar={props.statevar} />
                <Column6Input stateupdatefunc={props.stateupdatefunc} statevar={props.statevar} />
                <Column7Input stateupdatefunc={props.stateupdatefunc} statevar={props.statevar} />
            </div>
        </div>


    );
}

export default Input;