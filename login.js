import {useState}  from 'react';

function LoginPage(){
    let [uid, setUid]  = useState("");
    let [pwd, setPwd]  = useState("");
    let [result, setResult]  = useState("");

    function inputUnameChange(event){
        setUid(event.target.value);   
    }

    function inputPwdChange(event){
        setPwd(event.target.value);   
    }

    let loginClick  = function(){
        let  str  = "";
        if(uid == "admin" && pwd == "admin123")
        {
            str  = "Welcome to Admin";
        }
        else
        {
            str  = "Invalid user id or password";
        }

        setResult(str);
    };


return(
    <div class="container">
        <div class="row" style={{ border: '1px solid black', marginTop: '30px'}}>
            <div class="col-sm" style={{marginTop: '10px', padding: '10px', textAlign:"center", width: '450px'}}>
                <h1> Welcome!! </h1>
                <p>Please enter your details</p>
                <button type="button" class="btn btn-dark" style={{float: 'right'}}>Sign-up</button><br/>
                <table width= "350px" class= "table1" style={{textAlign: 'left'}}>
                    <tr><td colSpan="2"><h4>Email : </h4></td></tr>
                    <tr><td colSpan="2" ><input placeholder={'Email Id'} onChange={inputUnameChange}  style={{width: '300px'}}/><br/><br/></td></tr>
                    <tr><td colSpan="2"><h4>Password : </h4></td></tr>
                    <tr><td colSpan="2"><input placeholder={'Password'} onChange={inputPwdChange}  style={{width: '300px'}}/><br/><br/></td></tr>
                    <tr>
                        <td><b><span style={{float: 'left'}}><input type="checkbox"/> Remember me </span></b></td>
                        <td><b><a href='javascript:void(0)'><span style={{float: 'right', color: 'black'}}>forgot password?</span></a></b></td>
                    </tr>
                </table><br/><br/>
                <button type="button" onClick={loginClick} class="btn btn-dark" style={{width: '300px', height: '40px', marginTop: '10px'}}>Sign-in</button>
                <button type="button" class="btn btn-light" style={{width: '300px', border: '1px solid black', height: '40px', marginTop: '10px'}}>Sign-in with Google <i class="bi bi-google"></i></button><br/><br/>
            </div>
            <div class="col-sm" style={{width: '450px'}}>
                <img src='hh2.jpeg' style={{width: '440px', height: '620px'}}/>
            </div>
        </div>
    </div>
)
}

export default LoginPage;