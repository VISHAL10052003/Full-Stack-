import { useState } from 'react';
import '../../assets/css/Borrower.css'; // Corrected import path for CSS file
import './sidenavbar';

const Borrower = () => {
  const initialEvents = [
    {
      FirstName: 'Doranodhan',
      LastName: 'M',
      Type:'Crop Loan',
      Amount: ' Rs.50,000',
      AadharNumber:'63826269330',
      Income:'Rs.45,000',
      Phone:'1234567890',
      Place: 'Erode',
    },
    {
      FirstName: 'Bhujju',
      LastName: 'A',
      Type:'Warehouse Loan',
      Amount: ' Rs.3,00,000',
      AadharNumber:'63825369330',
      Income:'Rs.60,000',
      Phone:'1234567890',
      Place: 'Hosur',
    }
    // Add more events as needed
  ];

  const [events, setEvents] = useState(initialEvents);

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((event, eventIndex) => eventIndex !== index);
    setEvents(updatedEvents);
  };

  // Placeholder for an edit function
  const editEvent = (index) => {
    console.log('Editing event at index:', index);
    // Implement actual edit logic here, potentially opening a modal or a separate form
  };

  return (
    <>
    <Sidenavbar/>
      <div className='event-container'>
        <h1 className='event-title'>User Loan Details</h1><br/>
        {events.length > 0 ? (
          <table className='event-table'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Aadhar Number</th>
                <th>Income</th>
                <th>Phone</th>
                <th>Place</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{event.FirstName}</td>
                  <td>{event.LastName}</td>
                  <td>{event.Type}</td>
                  <td>{event.Amount}</td>
                  <td>{event.AadharNumber}</td>
                  <td>{event.Income}</td>
                  <td>{event.Phone}</td>
                  <td>{event.Place}</td>
                  {/* <td>{event.requirements}</td> */}
                  <td>
                    <button className='edit-btn' onClick={() => editEvent(index)}>Edit</button>
                    <button className='delete-btn' onClick={() => deleteEvent(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-events">No Upcoming Events</p>
        )}
      </div>
    </>
  );
};

export default Borrower;