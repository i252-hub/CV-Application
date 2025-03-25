
const General = ({email, phone, address, EmailChange, PhoneChange, title, TitleChange, name, NameChange, AddressChange, website, WebsiteChange}) =>{
    return (
        <>
        <div className="general">
            <fieldset>
                <legend>General Information</legend>

                <div className="firstpair">
                <div className="generalfourth">
             <p>Name</p>
                <input
            type="text"
            value={name}
            onChange={NameChange}
            />
             </div>
             <div className="generalfifth">
             <p>Professional Title</p>
             <input
            type="text"
            value={title}
            onChange={TitleChange}
            />
            </div>
            </div>
            <div className="secondpair">
               <div className="generalfirst">
                <p>Email</p>
                <input
            type="text"
            value={email}
            onChange={EmailChange}
            />
            </div>
            <div className="generalsecond">
            <p>Phone Number</p>
             <input
            type="text"
            value={phone}
            onChange={PhoneChange}
            />
            </div>
            </div>
            <div className="thirdpair">
            <div className="generalthird">
            <p>Address</p>
             <input
            type="text"
            value={address}
            onChange={AddressChange}
            />
             </div>
             <div className="generalsixth">
            <p>Website</p>
             <input
            type="text"
            value={website}
            onChange={WebsiteChange}
            />
             </div>
             </div>
            
            </fieldset>
           
            </div>
          
        </>
    )
}



export default General;