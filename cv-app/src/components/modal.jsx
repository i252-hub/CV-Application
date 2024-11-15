import { useState } from "react";
import '../styles/gen.css';
import '../styles/edu.css';
import '../styles/exp.css';
import General from './general-info';
import Education from './education-info';
import Experience from './exp-info';

const Dialog = () => {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    

    const [experiences, setExperiences] = useState([
        { job: '', company: '', start: '', end: '', descriptions: [] }
    ]);

    const [open, setOpen] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false);

    const openModalForEdit = () => {
        setOpen(true);
        setIsEditMode(true); 
    };

    const closeModal = () => {
        setOpen(false);
        setIsEditMode(false);
    };


    const handleAddExperience = () => {
        setExperiences([
            ...experiences,
            { job: '', company: '', start: '', end: '', descriptions: [] }
        ]);
    };

    return (
        <div className="container">
            {open && (
                <dialog open={open}>
                    <div className="genTop">

                        <General
                            email={email}
                            phone={phone}
                            address={address}
                            EmailChange={(e) => setEmail(e.target.value)}
                            PhoneChange={(e) => setPhone(e.target.value)}
                            AddressChange={(e) => setAddress(e.target.value)}
                            NameChange={(e) => setName(e.target.value.toUpperCase())}
                            TitleChange={(e) => setTitle(e.target.value.toUpperCase())}
                            isOpen={open}
                            onClose={closeModal}
                        />


                        <Education
                            school={school}
                            degree={degree}
                            year={year}
                            SchoolChange={(e) => setSchool(e.target.value)}
                            DegreeChange={(e) => setDegree(e.target.value)}
                            YearChange={(e) => setYear(e.target.value)}
                        />


                        <Experience
                            experiences={experiences}
                            setExperiences={setExperiences}
                            handleAddExperience={handleAddExperience}
                        />


                        <div className="btn">
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}

            {!open && !isEditMode &&(
                <>

                    <div className="con">
                        <div className="genTop2">
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{address}</p>
                        </div>
                        <h1>{name}</h1>
                        <p className="title">{title}</p>
                    </div>

                    <div className="education-section">
                        <h2>EDUCATION</h2>
                        <div className="edu-details">
                            <p className="year">{year}</p>
                            <p className="school">{school}</p>
                            <p className="degree">{degree}</p>
                        </div>
                    </div>

                    <div className="experience-section">
    <h2>WORK <br /> <br /> EXPERIENCE</h2>
    
                    <div className="exp-container">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item">
                                 
                                <div className="exp">
                                    <p className="workCompany">{exp.job} / {exp.company}</p>
                                    <div className="date">
                                    <p className="start">{exp.start}</p>
                                    <p>-</p>
                                    <p className="end">{exp.end}</p>
                                </div>
                                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                                        {exp.descriptions.map((description, idx) => (
                                            <li key={idx}>{description}</li>
                                        ))}
                                    </ul>
                                </div>
                               
                            </div>
                        ))}
                       
                    </div>
</div>

                <div className="btn">
                        <button onClick={openModalForEdit}>Edit</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Dialog;
