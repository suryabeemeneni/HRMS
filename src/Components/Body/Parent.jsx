import React, { useState, useEffect } from 'react';
// import './Parent.css';

const Projects = () => {
  const [formData, setFormData] = useState({
    projectname: '',
    logo: null,
    employeename: [], // Modify to store selected employee names
  });
  

  const [employeeNames, setEmployeeNames] = useState([
    { id: 1, name: "Surya" },
    { id: 2, name: "Jana" },
    { id: 3, name: "Surya2" },
  ]); // Manually specified employee names names fetched from API
  const [errors, setErrors] = useState({}); // Define errors state
  
  // const [employeeNames, setEmployeeNames] = useState([]); // State to store employee
  // useEffect(() => {
  //   // Fetch employee names from API
  //   const fetchEmployeeNames = async () => {
  //     try {
  //       const response = await fetch('https://your-api-url/employee-names');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch employee names');
  //       }
  //       const data = await response.json();
  //       setEmployeeNames(data); // Set fetched employee names to state
  //     } catch (error) {
  //       console.error('Error fetching employee names:', error.message);
  //     }
  //   };

  //   fetchEmployeeNames();
  // }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === 'file' ? e.target.files[0] : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  const handleSelectChange = (e) => {
    const selectedNames = Array.from(e.target.selectedOptions, option => {
      return { name: option.value }; // No need for ID
    });
    setFormData(prevState => ({
      ...prevState,
      employeename: [...prevState.employeename, ...selectedNames],
    }));
  };
  
  
  const removeName = (nameToRemove) => {
    setFormData(prevState => ({
      ...prevState,
      employeename: prevState.employeename.filter(employee => employee.name !== nameToRemove),
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const errors = validateForm(formData);
      if (Object.keys(errors).length === 0) {
        const formDataToSend = new FormData();
        formDataToSend.append("projectname", formData.projectname);
        formDataToSend.append("logo", formData.logo);
        formDataToSend.append("employeename", JSON.stringify(formData.employeename)); // Convert array to string before sending
    
        const response = await fetch('https://empadmin.hola9.com/account/projectdetail/', {
          method: 'POST',
          body: formDataToSend
        });
    
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
        console.log('Form submitted successfully');
        setFormData({
          projectname: '',
          logo: null,
          employeename: [], // Clear selected employee names after successful submission
        });
        setErrors({});
      } else {
        setErrors(errors);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.projectname.trim()) {
      errors.projectname = 'Project Name is required';
    }
    return errors;
  };
  return (
    <div className="container2001">
      <form className="form2001" onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <h2>Add Projects</h2>
        </div>
        <div>
          <label htmlFor="projectname"><span style={{ color: "red" }}>P</span>roject Name:</label>
          <input
            type="text"
            id="projectname"
            name="projectname"
            value={formData.projectname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="logo"><span style={{ color: "red" }}>L</span>ogo:</label>
          <input
            type="file"
            id="logo"
            name="logo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="employeename"><span style={{ color: "red" }}>E</span>mployee Name:</label>
          <select
            id="employeename"
            name="employeename"
            multiple
            onChange={handleSelectChange}
          >
            {employeeNames.map(({ id, name }) => (
              <option key={id} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Selected Names:</label>
          <ul>
          {formData.employeename && formData.employeename.map((employee, index) => (
  <li key={index}>
    {employee.name}
    <button type="button" onClick={() => removeName(employee.name)}>Remove</button>
  </li>
))}


          </ul>
        </div>
        <button className='btn2001' type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Projects;