function Education({schoolName, degrees, degree, major, start, end, onChange, onSubmit, isEditing}){
    return(
        <div className='Education'>
            <h2>Education</h2>
            <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={schoolName}
                onChange={onChange}
            />
            <select
                name="degree"
                value={degree}
                onChange={onChange}
            >
                <option value="">Select Degree</option>
                {degrees.map((deg) => (
                    <option key={deg} value={deg}>{deg}</option>
                ))}
            </select>
            <input
                type="text"
                name="major"
                placeholder="Major"
                value={major}
                onChange={onChange}
            />
            <input
                type="date"
                name="start"
                value={start}
                onChange={onChange}
            />
            <input
                type="date"
                name="end"
                value={end}
                onChange={onChange}
            />
            <button onClick={onSubmit}>{isEditing ? 'Update Education' : 'Add Education'}</button>
        </div>
    )
}

export default Education