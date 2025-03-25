import { useState } from "react";
import '../styles/gen.css';
import '../styles/edu.css';
import '../styles/exp.css';
import '../styles/pro.css'
import General from './general-info';
import Education from './education-info';
import Experience from './exp-info';
import Project from './project-info';
import Additional from "./additional";
import gradient from "../assets/gradientelementform.png"

const Dialog = () => {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [website, setWebsite] = useState('');
  
    const [skill, setSkill] = useState('');
    const [lang, setLang] = useState('');
    const [cert, setCert] = useState('');

    

    const [experiences, setExperiences] = useState([
        { job: '', company: '', start: '', end: '', descriptions: [] }
    ]);
    const [education, setEducation] = useState([
        { school: '', degree: '', yearstart: '', yearend: ''}
    ]);
    const [project, setProject] = useState([
        { title: '', desc: ''}
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
    const handleAddEducation = () => {
        if (education.length <= 1) {
            setEducation([...education, { school: '', degree: '', yearstart: '', yearend: '' }]);
          }
    };
    const handleAddProject = () => {
        if (project.length <= 2) {
            setProject([...project, { title: '', desc: '' }]);
          }
    };

    return (
        
        <div className="container">
            {open && (
                <>
                <img className="gradient" src = {gradient}/>
                <img className="gradienttwo" src = {gradient}/>
                <img className="gradientthree" src = {gradient}/>
                <dialog open={open}>
                    <div className="genTop">

                        <General
                            email={email}
                            phone={phone}
                            address={address}
                            name={name}
                            title={title}
                            website={website}
                            EmailChange={(e) => setEmail(e.target.value)}
                            PhoneChange={(e) => setPhone(e.target.value)}
                            WebsiteChange={(e) => setWebsite(e.target.value)}
                            AddressChange={(e) => setAddress(e.target.value)}
                            NameChange={(e) => setName(e.target.value)}
                            TitleChange={(e) => setTitle(e.target.value)}
                            isOpen={open}
                            onClose={closeModal}
                        />


                        <Education
                           education={education}
                           setEducation={setEducation}
                           handleAddEducation={handleAddEducation}
                        />


                        <Experience
                            experiences={experiences}
                            setExperiences={setExperiences}
                            handleAddExperience={handleAddExperience}
                        />

                        <Project
                        project={project}
                        setProject={setProject}
                        handleAddProject={handleAddProject}
                        />

                        <Additional
                        skill={skill} 
                        lang = {lang}
                        cert = {cert}
                        SkillChange = {(e) => setSkill(e.target.value)}
                        LanguageChange = {(e) => setLang(e.target.value)}
                        CertChange = {(e) => setCert(e.target.value)}
                        />
                        <div className="btn">
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </dialog>
                </>
            )}

            {!open && !isEditMode &&(
                <>

                    <div className="con">
                        <div className="genTop2">
                           <fieldset className="namesection">
                            <p>{name.toUpperCase()}</p>
                            <p>{title.toUpperCase()}</p>
                           </fieldset>
                           <div className="topdetailssection">
                            <p>{address} | </p>
                            <p>{phone} | </p>
                            <p>{website}</p>
                           </div>
                        </div>
                    </div>

                <div className="containermain">
                <div className="containerbot">
                    <div className="educationtitle">
                        <p className="educationtext">EDUCATION</p>
                    </div>
                    
                    {education.map((edu, index) => (
                    <div className="edus" key={index}>
                        <div className="schoolname">
                            <p>{edu.school}</p>
                        </div>
                        <div className="degyear">
                            <p>{edu.degree}</p>
                            <p>{edu.yearstart} – {edu.yearend}</p>
                        </div>
                    </div>
                ))}

                    <div className="exptitle">
                        <p className="exptext">EXPERIENCE</p>
                    </div>
                   <div className="expcompany">
                    <p>{experiences[0].company}</p>
                   </div>
                   <div className="jobyear">
                    <p>{experiences[0].job}</p>
                    <p>{experiences[0].start} – {experiences[0].end}</p>
                   </div>
                   <div className="jobdesc">
                   <ul>
                        {experiences.descriptions
                            .split(',')
                            .map((desc, idx) => (
                                <li key={idx}>{desc.trim()}</li>  
                            ))}
                    </ul>

                   </div>

                </div>
                </div>

           
                
          

                <div className="btn">
                        <button className="edit" onClick={openModalForEdit}>Edit</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Dialog;
