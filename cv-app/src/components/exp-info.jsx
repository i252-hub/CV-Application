import AddButton from "./adding";

const Experience = ({ experiences, setExperiences, handleAddExperience }) => {


    const handleExperienceChange = (index, field, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][field] = value;
        setExperiences(updatedExperiences);
    };


    const handleDescriptionChange = (index, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].descriptions = value.split(',').map(item => item.trim())
        setExperiences(updatedExperiences);
    };

    return (
        <div className="experience">
            <fieldset>
                <legend>Experience</legend>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <input
                            type="text"
                            placeholder="Job Title"
                            value={exp.job}
                            onChange={(e) => handleExperienceChange(index, 'job', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Company Name"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Start Month/Year"
                            value={exp.start}
                            onChange={(e) => handleExperienceChange(index, 'start', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="End Month/Year"
                            value={exp.end}
                            onChange={(e) => handleExperienceChange(index, 'end', e.target.value)}
                        />

                        <textarea
                            placeholder="Job Description (use commas to separate items)"
                            value={Array.isArray(exp.descriptions) ? exp.descriptions.join(', ') : ''} 
                            onChange={(e) => handleDescriptionChange(index, e.target.value)} 
                        />
                    </div>
                ))}

                <AddButton onAdd={handleAddExperience} />
            </fieldset>
        </div>
    );
};

export default Experience;
