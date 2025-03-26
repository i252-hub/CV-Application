import AddButtonPro from "./addingthree";

const Projects = ({project = [], setProject, handleAddProject}) => {

    const handleProChange = (index, field, value) => {
        const updatedProject = project.map((pro, i) => 
            i === index ? { ...pro, [field]: value } : pro
        );
        setProject(updatedProject);
    };
    
    const handleDescriptionChangePro = (index, value) => {
        const updatedProject = project.map((pro, i) => 
            i === index ? { ...pro, desc: value } : pro
        );
        setProject(updatedProject);
    };
    return(
        <>
        <div className="projects">
            <fieldset>
            <legend>Volunteering & Projects</legend>
            {project.map((pro, index) => (
                 <div key={index} className="project-item">
                    <div className="mainpair">
                    <div className="projfirst">
                        <p>Title</p>
                        <input type="text"
                         value={pro.title}
                        onChange={(e) => handleProChange(index, 'title', e.target.value)}/>
                    </div>
                    <div className="projsecond">
                        <p>Description</p>
                        <textarea type="text"
                        placeholder="use commas to separate items"
                         value={pro.desc} 
                         onChange={(e) => handleDescriptionChangePro(index, e.target.value)}/>
                    </div>
                 </div>
                 </div>
                ))}

                <AddButtonPro onAddThree={handleAddProject}/>
            </fieldset>
        </div>
        </>
    )
}

export default Projects;