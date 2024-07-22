function Preview({name, onGenInfoEdit, educations, onEduEdit, onEduDelete}) {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    };

    return(
        <div className="Preview">
            <h2>Resume</h2>
        
            <div className="genInfoPreview">
                <h2>General Info</h2>
                <p>
                    {name.firstName || name.lastName
                    ? `${name.firstName} ${name.lastName}`
                    : "Not submitted yet"}
                </p>
                <button onClick={onGenInfoEdit}>Edit</button>
            </div>

            <div className="EducationPreview">
                <h3>Education</h3>
                {educations.length > 0 ? (
                    educations.map(education => (
                        <div key={education.id}>
                            <p>{education.schoolName && education.degree ? `${education.schoolName} - ${education.degree}` : education.schoolName || education.degree}</p>
                            {education.major && <p>Major: {education.major}</p>}
                            <p>
                                {formatDate(education.start) || formatDate(education.end)
                                    ? `${formatDate(education.start)} - ${formatDate(education.end) || 'Present'}`
                                    : ''}
                            </p>
                            <button onClick={() => onEduEdit(education.id)}>Edit</button>
                            <button onClick={() => onEduDelete(education.id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No education entries yet</p>
                )}
            </div>
        </div>
    )
}

export default Preview