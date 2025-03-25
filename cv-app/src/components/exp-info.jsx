import AddButton from "./adding";

const Experience = ({ experiences=[], setExperiences, handleAddExperience }) => {


    const handleExperienceChange = (index, field, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][field] = value;
        setExperiences(updatedExperiences);
    };


    const handleDescriptionChange = (index, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].descriptions = value
        setExperiences(updatedExperiences);
    };

    return (
        <div className="experience">
            <fieldset>
                <legend>Experience</legend>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="expfirstpair">
                        <div className="firstexp">
                        <p>Job Title</p>
                        <input
                            type="text"
                            value={exp.job}
                            onChange={(e) => handleExperienceChange(index, 'job', e.target.value)}
                        />
                        </div>
                        <div className="secondexp">
                        <p>Company Name</p>
                        <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                        />
                        </div>
                        </div>
                        
                        <div className="expsecondpair">
                        <div className="thirdexp">
                        <p>Date Start</p>
                        <input
                            type="text"
                            value={exp.start}
                            onChange={(e) => handleExperienceChange(index, 'start', e.target.value)}
                        />
                        </div>
                        <div className="fourthexp">
                        <p>Date End</p>
                        <input
                            type="text"
                            value={exp.end}
                            onChange={(e) => handleExperienceChange(index, 'end', e.target.value)}
                        />
                        </div>
                        </div>
                        <div className="fifthexp">
                        <p>Description</p>
                        <textarea
                            placeholder="use commas to separate items"
                            value={exp.descriptions} 
                            onChange={(e) => handleDescriptionChange(index, e.target.value)} 
                        />
                        </div>
                    </div>
                ))}

                <AddButton className= "expbtn" onAdd={handleAddExperience} />
            </fieldset>
        </div>
    );
};

export default Experience;
