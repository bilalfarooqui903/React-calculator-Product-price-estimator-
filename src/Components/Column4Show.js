import { useEffect } from 'react';

function Column4Show(props) {




    let coln4 = props.passed;

    useEffect(() => {
        let gstvalue;
        gstvalue = Number(props.passes[1].current.innerHTML) + Number(props.passes[2].current.innerHTML) + Number(props.passes[4].current.innerHTML);
        coln4.current.innerHTML = ((gstvalue * 18) / 100).toFixed(2);
    });

    return (
        <div style={props.style}>
            <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center',  }}>GST (18%)</h2>
            <p ref={coln4} style={{ fontSize: '24px', color: '#136b66', textAlign: 'center', }}>{0}</p>
        </div>
    );
}

export default Column4Show;