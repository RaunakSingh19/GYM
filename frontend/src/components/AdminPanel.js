// import React, { useState } from 'react';
// import axios from 'axios';        //adminpanel ye page nikalna hai , iska koi use nhi hai 

// const AdminPanel = () => {
//   const [facility, setFacility] = useState({
//     name: '',
//     description: '',
//     price: '',
//     imageUrl: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFacility({ ...facility, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/facilities', facility);
//       console.log('Facility added:', response.data);
//       setFacility({ name: '', description: '', price: '', imageUrl: '' });
//     } catch (error) {
//       console.error('Error adding facility:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Panel</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Facility Name" value={facility.name} onChange={handleChange} />
//         <textarea name="description" placeholder="Description" value={facility.description} onChange={handleChange} />
//         <input type="number" name="price" placeholder="Price" value={facility.price} onChange={handleChange} />
//         <input type="text" name="imageUrl" placeholder="Image URL" value={facility.imageUrl} onChange={handleChange} />
//         <button  type="submit">Add Facility</button>
//       </form>
//     </div>
//   );
// };

// export default AdminPanel;