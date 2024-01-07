import { useState } from 'react';
import Input from './Input'
import ShowField from'./ShowField'

function Body(props) {

    const [totInp, setTotInp] = useState({ itemCatg: 'products', platfType: 'local', priceInp: '0', weight: 0, weightTyp: 'gm', length: '0', breadth: '0', height: '0', flipType: 'pre' });
    let showfieldstyle = { backgroundColor: '#F5FEFD', height: '300px', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', position: 'relative', top: '40px' };

    let len = Number(totInp.length);
    let bred = Number(totInp.breadth);
    let heigh = Number(totInp.height);
    let fba = (45 * ((len * bred * heigh) * 3.531 * 0.00001)) + (18 * (45 * ((len * bred * heigh) * 3.531 * 0.00001))) / 100;
    let flip = 0;

    if (totInp.flipType == 'pre' && (totInp.priceInp > 0 && totInp.priceInp <= 750)) {
        flip = (2 * totInp.priceInp) / 100;
    }
    else if (totInp.flipType == 'pre' && totInp.priceInp > 750) {
        flip = (2 * totInp.priceInp) / 100;
    }
    else if (totInp.flipType == 'post' && (totInp.priceInp > 0 && totInp.priceInp <= 750)) {
        flip = 15;
    }
    else if (totInp.flipType == 'post' && totInp.priceInp > 750) {
        flip = (2 * totInp.priceInp) / 100;
    }



    let show, show1;
    if (props.statevarb.platform == 'amazonfba') {
        show = <p style={{ textAlign: 'left', fontSize: '18px', color: '#f5f5f5', paddingLeft: '30px', position: 'relative', top: '13px' }}>NOTE : Pick & pack fee for the product (13 Rs) will be added in the total deductions.</p>;
        show1 = <p style={{ textAlign: 'left', fontSize: '18px', color: '#f5f5f5', paddingLeft: '30px', position: 'relative', top: '13px' }}>NOTE : FBA Storage fees for the product ({fba.toFixed(2)} Rs) will be added in the total deductions.</p>;
        showfieldstyle = { backgroundColor: '#F5FEFD', height: '300px', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', position: 'relative', top: '20px' };
    }
    else if (props.statevarb.platform == 'flipkart') {
        show = <p style={{ textAlign: 'left', fontSize: '18px', color: '#f5f5f5', paddingLeft: '30px', position: 'relative', top: '13px' }}>NOTE : Please Enter the Collection Fee type in the selling price field .</p>;
        show1 = <p style={{ textAlign: 'left', fontSize: '18px', color: '#f5f5f5', paddingLeft: '30px', position: 'relative', top: '13px' }}>NOTE : Collection fees for the product ({flip.toFixed(2)} Rs) will be added in the total deductions.</p>;
        showfieldstyle = { backgroundColor: '#F5FEFD', height: '300px', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', position: 'relative', top: '20px' };
    }

    return (
        <div style={props.style}>
            <Input style1={{ height: '100%', width: '140%', paddingLeft: '6%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} style2={{ height: '115px', width: '100%', display: 'flex', flexDirection: 'column' }} statevarb={props.statevarb} stateupdatefunc={setTotInp} statevar={totInp} />
            {show}
            {show1}
            <ShowField style={showfieldstyle} refr={props.refr} statevar={totInp} statevarb={props.statevarb} statevarbfunc={props.statevarbfunc}></ShowField>
        </div>
    );
}

export default Body;