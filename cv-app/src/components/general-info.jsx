import { useState } from "react"
import '../styles/gen.css'

const General = ({email, phone, address, EmailChange, PhoneChange, AddressChange}) =>{
  
    return (
        <>
        <div className="container">
        <div className="genTop">
            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={EmailChange}
            />
             <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={PhoneChange}
            />
             <input
            type="text"
            placeholder="Name"
            value={address}
            onChange={AddressChange}
            />
        </div>
        </div>
        </>
    )
}

function Gen(){
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    function Email(e){
        setEmail(e.target.value);
    }

    function Phone(e){
        setPhone(e.target.value);
    }

    function Address(e){
        setAddress(e.target.value);
    }

    return (
        <>
        <General
        email = {email}
        phone = {phone}
        address={address}
        EmailChange={Email}
        PhoneChange={Phone}
        AddressChange={Address}
        />
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
        </>
    )
}

export default Gen;