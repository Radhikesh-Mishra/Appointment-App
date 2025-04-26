# 🩺 Doctor Appointment Booking App

This is a **Doctor Appointment Booking App** built using **React** and **Redux**. It allows users (patients or hospital staff) to book, view, update, and delete doctor appointments efficiently.

## 📌 Features

- 📋 **Book Appointments**  
  Fill in patient details such as:
  - Patient Name  
  - Age  
  - Gender  
  - Phone Number  
  - Doctor Name  
  - Date & Time of Appointment  
  - Visit Status: `Consult` or `Revisit`

- 📇 **View Appointments**  
  All booked appointments are displayed below the form in an organized card layout.

- ✏️ **Update Appointment**  
  Easily update any appointment using the built-in modal form.

- 🗑️ **Delete Appointment**  
  Remove appointments that are no longer needed.

## 🏥 Use Case

This app is especially useful for:
- Hospital staff to manage daily appointments
- Doctors to track their patients' schedules
- Clinics to digitize and organize their appointment system

## 🛠️ Technologies Used

- ⚛️ **React** — For building the UI
- 📦 **Redux** — For global state management
- 🎨 **CSS** — For styling components


## 📁 Project Structure

```plaintext
appointment-app/
├── public/
├── src/
│   ├── components/
│   │   ├── AppointmentForm.jsx
│   │   └── AppointmentList.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── userSlice.js
│   ├── App.js
│   ├── App.css
│   └── main.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
 ```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/doctor-appointment-app.git
cd doctor-appointment-app
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Run the App
```bash
npm run dev
```

# Images of the App
- Home
![Img-1 Home](https://github.com/user-attachments/assets/d38492c3-aeee-44fa-b938-7aa1e88f8a38)
- With some appointments
![Img-2 Entered records](https://github.com/user-attachments/assets/3143fff8-d147-42e3-9d1d-7ed0d965a273)
- Opening actions option
![Img-3 Action Options](https://github.com/user-attachments/assets/a07e2844-8d6d-49c9-b681-b545a68db19a)
- Update Detail Modal
![Img-4 Update Modal](https://github.com/user-attachments/assets/92dff2c1-bc7e-407e-9e84-f42d9e39df47)
- Updated Records of appointments
![Img-5 Updated Records](https://github.com/user-attachments/assets/1a7f5b42-b262-46f7-9776-b8334edb7923)
