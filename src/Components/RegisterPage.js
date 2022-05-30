import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './RegisterPage.css'

function App() {
	const [name , setName] = useState('');
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [confPassword , setConfPassword] = useState('');


	
	const handleSubmit=(e)=>{
	if(password!=confPassword)
	{
		alert("password Not Match");
	}
	
	e.preventDefault();

	}
return (
	<div className="App">
	<header className="App-header">
	<form onSubmit={(e) => {handleSubmit(e)}} class="jumbotron">
	<div style={{display:'flex',flexDirection:'row'}}>
        <img  width="100"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAA81BMVEX////3yL3yaynyaCnzdCf0eiX1gyP1fiTzbyfzcSbxSDbvTDXwUDTwVDPzYinxWDL2iSL2jB/xYDHyZS/zbC/BOjTycy709PTt7e3piSCKioqCgoLKysrT09Pl5eV3d3f0fVf4lR1tbW1lZWUAAACioqKtra30hFf0jFWXl5dISEi9vb3yVg30kVX1pZH2sY34uYv1fQ7leCbmfyP1gwD4jAA8PDxZWVn1saDzlXzycknzj2/yh2TyXxP0qo3rezPbkY7zm5T87+P1m3jALyjwPSjwSyX7zq3zaAr0o3j61LzzcQD618j4wpf62NPlyMYqKipA3p/pAAADF0lEQVRoge3XCW/aMBQH8DcIUHb0WA97TuysCUkHZlu7dc2O0h09N3b0+3+avedwhVaogF1tUv6qUieYHy9B+ksAlClT5j7z3qH94aNDu/vcob3qDEfbGf4JbVe4sR3hxq5W9xzaTvDjrqGd4Ggbulqxjw/tSsU+ftytDm3r+HFvRK+sWMYLdtMuvtcb0mQ3X1i3R7RdvGh7nk2c7PHYnlW8YHsm1nC0C2N7Xq320ppdmRq7Zg0f2JNjW8NPukU6txufv3zFvDI5eW2yT/k2n37auzF2rdF4c3Z+foHBdu9Vms1+/wBzeHg57+ynV4WnTTTi2w8fPX6ytvZ0c3Nra2fHqzXq9fr8NulTYzca9dvwgx/z2wDfr4pj344vZuf6eGx6Ajfx/oI26v3JsTFvp/HF7Vwf0zfx/s/FbdIn7fUi7l0tZQPs90d0fX0KX9YmfURP4cvbqB+M7I1JvGfBzvV1Y0/idmzSc3oSt2UD/Do09MbGsyHe/W3LJj3Hh5OvWrRH+mDyC6t2ru/u5rhtG/V3uwPcvp3rhLuwjY74uROb9Gfbrmz6Vs+c2QCXf9zZZcrcT1Kl2sB84TPehlTSpUwIBkL4EpgAvAra9zlAkgKIyA9AAKjQ1wBtDW0+C2/rkAELOW4KZWYuXTM8iYHFjMXAI5AhKI576NUQX8L/HY67wT/ioZqFJ0cxAMtEgseWGRxaAqeNAHyV41qbW0yEHuN4Oyn4QTQbF4EWOKQMwLzF4DJgkAUpfmqkkzZwXCvIkqQzwsM0yHB4pVszH4vkoBmOkTKAYPA10EmQ0rzMHDkeOd4VbgwG23SKqszPy/xLebB85vxBWsZ9VBymWI14gIRDwqAtAfsliUJqG6xHFcaxojqUIV3yzfqOCbC2IMaa0yDwfdgaHeZj72DFcKpXehWoVBjWyxEuMnN+t8ijSNJ2KUjGP1/GOBqtJXWfyvEYJN4P3lUsw2i+yUWiMgVaqGtsPUhb9DwC7NwsEb6pQtO1UnZoIVp3xrkpcp0oc+Sm+DR9JtajUmZN7aipJqk+B+dlypT53/IXRfF3xjwVUloAAAAASUVORK5CYII=" />
	    <h2 class="heading">KEY-EDUCATION FOUNDATION</h2>
    </div>
	<h3> Sign-Up</h3>
    <div class="labelinput">
	    <label >Name:</label>
		<input type="text" value={name} required onChange={(e)=>{setName(e.target.value)}} /><br/>
    </div>
    <div class="labelinput">
        <label>Email:</label>
		<input type="email" value={email} required onChange={(e)=> {setEmail(e.target.value)}} /><br/>
    </div>
    <div class="labelinput">
        <label>Password:</label>
		<input type="password" value={password} required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
			
    </div>
    <div class="labelinput">
        <label>Confirm Password:</label>
		<input type="password" value={confPassword} required onChange={(e)=> {setConfPassword(e.target.value)}} /><br/>
        </div>
	<input  type="submit" class="submit" value="Submit"/>

   
	</form>
	</header>
	</div>
);
}

export default App;
