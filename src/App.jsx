import { useState } from 'react'
import GenInfo from './GenInfo.jsx'
import Preview from './Preview.jsx'
import Education from './Education.jsx'
import './App.css'

function App() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [submittedName, setSubmittedName] = useState({ firstName: '', lastName: '' })
  const [currentEducation, setCurrentEducation] = useState({id: null, schoolName: '', degree: '', major: '', start: '', end: ''})
  const [educations, setEducations] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const degrees = ['Associate', 'Bachelor', 'Master', 'Doctorate', 'Other'];
  
  // General Info
  const handleSubmit = () => {
    setSubmittedName(name)
  }
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setName(prevName => ({
      ...prevName,
      [name]: value
    }));
  }
  const handleGeninfoEdit = () => {
    setName(submittedName)
  }
  
  // Education
  const handleEduSubmit = () => {
    if (isEditing) {
      setEducations(prevEdus => prevEdus.map(edu => 
        edu.id === currentEducation.id ? currentEducation : edu
      ));
      setIsEditing(false);
    } else {
      setEducations(prevEdus => [...prevEdus, { ...currentEducation, id: prevEdus.length }]);
    }
    setCurrentEducation({id: null, schoolName: '', degree: '', major: '', start: '', end: ''});
  }
  const handleEduChange = (e) => {
    const {name, value} = e.target;
    setCurrentEducation(prevEdu => ({...prevEdu, [name]: value}));
  }
  const handleEduEdit = (id) => {
    const eduToEdit = educations.find(edu => edu.id === id)
    if (eduToEdit) {
      setCurrentEducation(eduToEdit);
      setIsEditing(true);
    }
  }
  const handleEduDelete = (id) => {
    setEducations(prevEdus => prevEdus.filter(edu => edu.id !== id));
  }
  
  return (
    <>
      <GenInfo
        firstName={name.firstName}
        lastName={name.lastName}
        onChange={handleNameChange}
        onSubmit={handleSubmit}
      />
      <Education
        {...currentEducation}
        degrees={degrees}
        onChange={handleEduChange}
        onSubmit={handleEduSubmit}
        isEditing={isEditing}
      />
      <Preview 
        name={submittedName}
        educations={educations}
        onGenInfoEdit={handleGeninfoEdit}
        onEduEdit={handleEduEdit}
        onEduDelete={handleEduDelete}
      />
    </>
  )
}

export default App