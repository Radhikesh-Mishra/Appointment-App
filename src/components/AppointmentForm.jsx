import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insert } from "../redux/userSlice";

const AppointmentForm = () => {
    const [appointment, setAppointment] = useState({
        name: '', phone: '', doctor: '', gender: 'Male', date: '', status: 'Consult', age: '', time: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(insert(appointment))
    };

    return (
        <div className="appointment-form">
            <h2 className="heading">Welcome to Gradious Doctor Appointment Booking</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="row">
                    <input className="input" type="text" required name="name" placeholder="Patient Name*" value={appointment.name} onChange={handleChange} />
                    <input className="input" required type="text" name="phone" placeholder="Phone Number*" value={appointment.phone} onChange={handleChange} />
                    <input type="text" required className="input" name="doctor" placeholder="Doctor Name*" value={appointment.doctor} onChange={handleChange} />
                </div>
                <div className="row">
                    <select name="gender" value={appointment.gender} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="text" placeholder="Date*" required name="date" className="input" value={appointment.date} onChange={handleChange} />
                    <select name="status" value={appointment.status} onChange={handleChange}>
                        <option value="Consult">Consult</option>
                        <option value="Revisit">Revisit</option>
                    </select>
                </div>
                <div className="row">
                    <input type="number" placeholder="Age*" required name="age" className="input" value={appointment.age} onChange={handleChange} />
                    <input type="text" placeholder="Time*" required name="time" className="input" value={appointment.time} onChange={handleChange} />
                    <input type="text" className="input" id="hidden" />
                </div>
                <button className="btn">Book Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
