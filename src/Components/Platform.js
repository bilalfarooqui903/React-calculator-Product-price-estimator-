

function Platform(props) {


	function eventHandlerForPlatfrm(e) {
		props.statevarbfunc({ ...props.statevarb, ...{ platform: e.target.value } });
	}

	return (
		<div style={props.style}>
			<label for="category" style={{ fontSize: '28px', textAlign: 'right', marginTop: '46px', width: '53.2%',float: 'left', fontWeight: 'bold', color: '#f5f5f5', textShadow: '0px 2px 5px black' }}>Choose Platform Type </label>
			<select ref={props.refr } id="category" onClick={eventHandlerForPlatfrm} style={{ backgroundColor: 'white', height: '36px', width: '160px', position: 'relative', paddingLeft: '18px', marginTop: '50px', marginLeft: '35px', letterSpacing: '1px', borderRadius: '8px', fontSize: '16px', border: '1.5px #f5f5f5 solid', boxShadow: '0px 1px 5px black' }}>
				<option value='amazon' >Amazon</option>
				<option value='amazonfba' >Amazon FBA</option>
				<option value='flipkart' >Flipkart</option>
				<option value='jiomart' >Jiomart</option>

			</select>
		</div>
	);
}

export default Platform;