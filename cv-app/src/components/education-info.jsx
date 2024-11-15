const Education = ({school, SchoolChange, degree, DegreeChange, year, YearChange}) =>{
return (
    <>
    <div className="education">
    <fieldset>
      <legend>Education</legend>
    <input
            type="text"
            placeholder="School Graduated"
            value={school}
            onChange={SchoolChange}
            />
              <input
            type="text"
            placeholder="Degree of Study"
            value={degree}
            onChange={DegreeChange}
            />
              <input
            type="text"
            placeholder="Academic Year"
            value={year}
            onChange={YearChange}
            />

    </fieldset>
    </div>
    </>
)
}



  
  



export default Education