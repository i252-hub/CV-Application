import AddButtonEdu from "./addingtwo"

const Education = ({education=[], setEducation, handleAddEducation}) =>{

  const handleEduChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
};


return (
    <>
    <div className="education">
    <fieldset>
      <legend>Education</legend>
      {education.map((edu, index) => (
      <div key={index} className="education-item">
      <div className="EduFirstPair">
      <div className="edufirst">
        <p>University</p>
      
    <input
            type="text"
            value={edu.school}
            onChange={(e) => handleEduChange(index, 'school', e.target.value)}
            />
            </div>
         <div className="edusecond">
         <p>Degree of Study</p>
              <input
            type="text"
            value={edu.degree}
            onChange={(e) => handleEduChange(index, 'degree', e.target.value)}
            />
            </div>
            </div>
            <div className="EduSecondPair">
          <div className="eduthird">
         <p>Academic Year Start</p>
              <input
            type="text"
            value={edu.yearstart}
            onChange={(e) => handleEduChange(index, 'yearstart', e.target.value)}
            />
            </div>
            <div className="edufourth">
            <p>Academic Year End</p>
             <input
            type="text"
            value={edu.yearend}
            onChange={(e) => handleEduChange(index, 'yearend', e.target.value)}
            />
            
             </div>
             
             </div>
 </div>
))}
<AddButtonEdu onAddTwo={handleAddEducation}/>
    </fieldset>
    
    </div>
    </>
)
}



  
  



export default Education