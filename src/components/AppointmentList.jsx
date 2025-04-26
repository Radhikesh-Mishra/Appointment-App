import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, del, insert } from "../redux/userSlice";

const AppointmentList = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [appointment, setAppointment] = useState({
    name: "",
    phone: "",
    doctor: "",
    gender: "Male",
    date: "",
    status: "Consult",
    age: "",
    time: ""
  });

  const appointments = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    if (editIndex !== null) {
      // update existing patient
      dispatch(update(editIndex, appointment));
    } else {
      // add new patient
      dispatch(insert(appointment));
    }
  
    // reset
    setAppointment({
      name: '',
      phone: '',
      doctor: '',
      gender: 'Male',
      date: '',
      status: 'Consult',
      age: '',
      time: ''
    });
    setEditIndex(null);
    setToggleModal(false);
  };
  
  

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="appointment-container">
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Status</th>
            <th>Appointment</th>
            <th>Phone</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((patient, index) => (
            <tr className="tr" key={index}>
              <td className="patient-info">
                <img
                  src="https://i.pinimg.com/1200x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg"
                  alt="profile"
                />
                <div>
                  <p className="name">{patient.name}</p>
                  <p className="age">{patient.age}, {patient.gender}</p>
                </div>
              </td>
              <td>
                <button className={`status-btn ${patient.status.toLowerCase()}`}>
                  {patient.status}
                </button>
              </td>
              <td>
                <p className="time">{patient.time}</p>
                <p className="date">{patient.date}</p>
              </td>
              <td>
                <p className="phone">+91 {patient.phone}</p>
                <p className="contact-link">Contact</p>
              </td>
              <td>Dr. {patient.doctor}</td>
              <td className="actions">
                <span className="action-dots" onClick={handleToggle}>⋮</span>
                {toggle && (
                  <div className="inline-buttons">
                    <button
                      className="btn-sm update"
                      onClick={() => {
                        setAppointment({ ...patient });
                        setToggleModal(true);
                        setEditIndex(index);
                      }}
                    >
                      Update
                    </button>

                    <button
                      className="btn-sm delete"
                      onClick={() => {
                       dispatch(del(index));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>



      {toggleModal && (
        <div className="modal-overlay" onClick={() => setToggleModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setToggleModal(false)}>&times;</span>
            <h3 className="heading-3">Update Details</h3>
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="row">
                <input className="input" type="text" name="name" placeholder="Patient Name*" value={appointment.name} onChange={handleChange} />
                <input className="input" type="text" name="phone" placeholder="Phone Number*" value={appointment.phone} onChange={handleChange} />
                <input type="text" className="input" name="doctor" placeholder="Doctor Name*" value={appointment.doctor} onChange={handleChange} />
              </div>
              <div className="row">
                <select name="gender" value={appointment.gender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input type="text" placeholder="Date*" name="date" className="input" value={appointment.date} onChange={handleChange} />
                <select name="status" value={appointment.status} onChange={handleChange}>
                  <option value="Consult">Consult</option>
                  <option value="Revisit">Revisit</option>
                </select>
              </div>
              <div className="row">
                <input type="number" placeholder="Age*" name="age" className="input" value={appointment.age} onChange={handleChange} />
                <input type="text" placeholder="Time*" name="time" className="input" value={appointment.time} onChange={handleChange} />
                <input type="text" className="input" id="hidden" />
              </div>
              <button className="btn update">Update</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AppointmentList; 