import { useRef } from 'react';
import Column1Show from './Column1Show';
import Column2Show from './Column2Show';
import Column3Show from './Column3Show';
import Column4Show from './Column4Show';
import Column5Show from './Column5Show';
import Column6Show from './Column6Show';
import Column7Show from './Column7Show';



function ShowField(props) {

    let column1 = useRef();
    let column2 = useRef();
    let column3 = useRef();
    let column4 = useRef();
    let column5 = useRef();
    let column6 = useRef();

    const arry = [column1, column2, column3, column4, column5, column6];

    const stylecomp = { height: '150px', width: '25%' };
    const stylecomp_7 = { height: '240px', width: '50%', display: 'flex', flexDirection: 'column' };

    return (
        <div style={props.style}>

            
            <Column1Show style={stylecomp} status={props.statevar}  passed={column1 }></Column1Show>
            <Column2Show style={stylecomp} status={props.statevar} statevarb={props.statevarb} passed={column2 }></Column2Show>
            <Column3Show style={stylecomp} status={props.statevar} statevarb={props.statevarb} passed={column3 }></Column3Show>
            <Column4Show style={stylecomp} status={props.statevar} passed={column4} passes={arry}></Column4Show>
            <Column5Show style={stylecomp} status={props.statevar} statevarb={props.statevarb} passed={column5 }></Column5Show>
            <Column6Show style={stylecomp} status={props.statevar}  passed={column6 }></Column6Show>
            <Column7Show style={stylecomp_7} refr={props.refr} status={props.statevar} statevarb={props.statevarb} statevarbfunc={props.statevarbfunc} passes={arry }></Column7Show>

        </div>
    );
}

export default ShowField;