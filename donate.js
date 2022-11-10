import {useState}  from 'react';
import {React}  from 'react';
import './bootstrap.min.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import axios from "axios";
import logo from './logo.svg';
import './donate.css';

function Donate(){
    let [name,setName]=useState("");
    let [mail,setMail]=useState("");
    let [pnum,setPnum]= useState("");
    let [donate,setDonate]=useState("");
    let [phone,setPhone]=useState("");

    const [errors, setErrors] = useState({  
        name  :  "",            
        mail  :  "",            
        pnum :  ""
});

    function inputNameChange(event){
        setName(event.target.value);
    }

    function inputMailChange(event){
        setMail(event.target.value);
    }

    function inputPnumChange(event){
        setPnum(event.target.value);
    }

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}

async function PayNow() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    const result = await axios.post("http://localhost:5000/payment/orders");

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_NiPP2hhxudQjtI", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Soumya Corp.",
        description: "Test Transaction",
        image: { logo },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:5000/payment/success", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}


    let donateClick = function(event){
        event.preventDefault();

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        

        let tempErrorObj = Object.assign({}, errors);

        tempErrorObj.name =  (name.length == 0)? "Name is required..!" : "";
        tempErrorObj.mail =  validEmailRegex.test(mail)? '': 'Email is not valid!';
        tempErrorObj.pnum =  (pnum.length == 0)? "Enter valid Phone Number" : "";
        setErrors(tempErrorObj);

        let valuesArray = Object.values(tempErrorObj);
        let index  = valuesArray.findIndex( item => item.length != 0 );

        if(index == -1)
        {
                // Logic to send this data to server using AJAX              
              setDonate("Submit button clicked --- Form Data is Valid");              
        }
        else
        {           
         
           setDonate("Submit button clicked --- Form Data is invalid");
        }
    };

    return(
    <body>
        
    <div class="d">
                <form class="f"  onChange={donateClick}  noValidate>
                 Donor Name <i class="bi bi-person-fill" style={{marginLeft:"5px"}}></i>  <br/>
                 <input type="text" name="name" onChange={(e) => setName(e.target.value)}  />
                 <span className="error">{errors.name}</span>
                 <br/><br/>

                 Mail Address  <i class="bi bi-envelope-fill" style={{marginLeft:"5px"}}></i>  <br/>
                 <input type="text" name="email" onChange={(e) => setMail(e.target.value)}  />
                 <span className="error">{errors.mail}</span>
                 <br/><br/> 

                 Phone Number <i class="bi bi-telephone-fill" style={{marginLeft:"5px"}}></i>  <br/>
                 <PhoneInput
                country={"in"}
                enableSearch={true}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                />
                <br/>
            
                 Payment Mode <i class="bi bi-credit-card-fill" style={{marginLeft:"5px"}}></i>  <br/>
                 <select>
                    <option>UPI</option>
                    <option>Net Banking</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                 </select>
                 <br/><br/>

                 <input type="radio" required/> Agree to the terms and conditions
                 <br/><br/>
                 {/* <br/><br/><br/><br/>
                <input type="submit"   value="Pay now" onClick={donateClick} style={{borderRadius:"5px",fontWeight:"bold",padding:"7px",color:"white",backgroundColor:"black",marginLeft:"130px"}}/> */}
                        {/* <img src={logo512} className="App-logo" alt="logo" /> */}
                {/* <button onClick={PayNow} style={{borderRadius:"5px",fontWeight:"bold",padding:"7px",color:"white",backgroundColor:"black",marginLeft:"110px" }}  >
                    Submit Details
                </button> */}
                </form> 
    </div>
    </body>
    );
}

export default Donate;