
const General = ({email, phone, address, EmailChange, PhoneChange, title, TitleChange, name, NameChange, AddressChange}) =>{
    return (
        <>
        <div className="general">
            <fieldset>
                <legend>General Information</legend>
               
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
            placeholder="Address"
            value={address}
            onChange={AddressChange}
            />
                

                
                <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={NameChange}
            />
             <input
            type="text"
            placeholder="Professional Title"
            value={title}
            onChange={TitleChange}
            />
                
                
               
            
            </fieldset>
           
            </div>
          
        </>
    )
}



export default General;