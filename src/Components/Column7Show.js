import { useRef, useEffect } from 'react';
import  Column1  from './Column1.js';
import  Column2  from './Column2.js';

function Column7Show(props) {

    let len = Number(props.status.length);
    let bred = Number(props.status.breadth);
    let heigh = Number(props.status.height);
    let fba = (45 * ((len * bred * heigh) * 3.531 * 0.00001)) + (18 * (45 * ((len * bred * heigh) * 3.531 * 0.00001))) / 100;
    let valueadd = 0;
    let here = useRef();
    let saved = useRef();
    let saveds = useRef();


    useEffect(() => {
        if (props.refr.current.value == 'flipkart') {
            if (props.status.flipType == 'pre' && (props.status.priceInp > 0 && props.status.priceInp <= 750)) {
                valueadd = (2 * props.status.priceInp) / 100;
            }
            else if (props.status.flipType == 'pre' && props.status.priceInp > 750) {
                valueadd = (2 * props.status.priceInp) / 100;
            }
            else if (props.status.flipType == 'post' && (props.status.priceInp > 0 && props.status.priceInp <= 750)) {
                valueadd = 15;
            }
            else if (props.status.flipType == 'post' && props.status.priceInp > 750) {
                valueadd = (2 * props.status.priceInp) / 100;
            }
        }
    });

    useEffect(() => {
        props.refr.current.addEventListener('change', function () {
            saved.current.innerHTML = '0';
            saveds.current.innerHTML = '0';
        });
    });


    useEffect(() => {
        let hered = here.current;
        hered.addEventListener('click', function () {
            let addtn, addn;
            if (props.statevarb.platform == 'amazonfba') { addtn = 13; addn = fba; }
            else { addtn = 0; addn = 0; }
            let calc_for_1 = (Number(props.passes[1].current.innerHTML) + Number(props.passes[2].current.innerHTML) + Number(props.passes[3].current.innerHTML) + Number(props.passes[4].current.innerHTML) + Number(props.passes[5].current.innerHTML) + addtn + addn + valueadd);
            let calc_for_2 = Number(props.passes[0].current.innerHTML) - (Number(props.passes[1].current.innerHTML) + Number(props.passes[2].current.innerHTML) + Number(props.passes[3].current.innerHTML) + Number(props.passes[4].current.innerHTML) + Number(props.passes[5].current.innerHTML) + addtn + addn + valueadd);
            saved.current.innerHTML = calc_for_1.toFixed(3);
            saveds.current.innerHTML = calc_for_2.toFixed(3);
        });
    });

    //border: '1px black solid'
    return (
        <div id= "column7showdiv" style={props.style}>
            <div id= "column7showdiv2" style={{ display: 'flex', flexDirection: 'row', }}> 
                <Column1 reference={saved} id="column7showcol1" style={{ height: '130px', width: '50%',  }} />
                <Column2 reference={saveds} id="column7showcol2" style={{ height: '130px', width: '50%',  }} />
            </div>
            <button id="button" ref={here} style={{ position: 'relative', marginLeft: 'auto', marginRight: 'auto', fontSize: '20px', marginBottom: '30px;', top: '40px', width: '150px', height: '50px', borderRadius: '10px',color: '#f5f5f5', backgroundColor: '#1F456E',letterSpacing: '2px', border: '1px blue solid' } }>Click</button>
        </div>
    );
}

export default Column7Show;