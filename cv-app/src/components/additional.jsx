const Additional = ({skill, SkillChange, language, LanguageChange, cert, CertChange}) => {
    return(
        <>
        <div className="additional">
            <fieldset>
                <legend>Additional</legend>
                <div className="skills">
                <div className="skillone">
                    <p>Skills</p>
                    <input 
                     type="text"
                     value={skill}
                     onChange={SkillChange}
                    />
                </div>
                <div className="skilltwo">
                <p>Languages</p>
                <input
                 type="text"
                 value={language}
                 onChange={LanguageChange}
                />
                </div>
                <div className="skillthree">
                <p>Certifications & Training</p>
                <input
                type="text"
                value={cert}
                onChange={CertChange}
                />
                </div>
                </div>
            </fieldset>
        </div>
        </>
    )
}

export default Additional;