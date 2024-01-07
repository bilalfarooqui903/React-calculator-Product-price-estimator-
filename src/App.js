import React from 'react';
import Header from './Components/Headers';
import Body from './Components/Bodys';
import { useState, useRef } from 'react';
import Platform from './Components/Platform';

function App() {

    let for_platf = useRef();
    const stylesApp = { position: 'absolute', top: '30px', left: '30px', right: '30px', height: '680px' };
    let [platfrm, setPlatfrm] = useState({ platform: 'amazon' }); 
    

    return (
        <div style={stylesApp}>
            <Header style={{ border: '2px black solid', height: '130px', boxShadow: '0px 1px 7px', backgroundColor: '#1F456E', }} />
            <Platform style={{ height: '140px', }} statevarb={platfrm} statevarbfunc={setPlatfrm} refr={for_platf } />
            <Body style={{ height: '450px', position: 'relative' }} statevarb={platfrm} statevarbfunc={setPlatfrm} refr={for_platf} />
        </div>
    );

}
export default App;