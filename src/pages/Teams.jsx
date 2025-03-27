import React from "react";
import "./teams.css";

function Teams() {
  const teamsData = [
    { faculty: "Sanjay Narayankar", events: [
        { name: "Cad-O Create", student: "Viraj Chature" },
        { name: "RC Challenge", student: "Aaradhya Minajgi" }
      ] 
    },
    { faculty: "Triveni Dhamale", events: [
        { name: "Valorant", student: "Aastha Raina" },
        { name: "IPL Auction", student: "Aastha Raina" }  // Same student for both
      ] 
    },
    { faculty: "Trupti Kherde", events: [
        { name: "Bro Code", student: "Arnav Wani & Soham Kulkarni" },
        { name: "Geek It Out", student: "Samruddhi Mane & Anand Jain" },
        { name: "Treasure Hunt", student: "Kalyani Kolpe" }
      ] 
    },
    { faculty: "Bhavana Badane", events: [
        { name: "Solvex", student: "Karan Malore & Srushti Patil" },
        { name: "ERROR 404", student: "Aditya Waghmare & Dhruv Kursale" }
      ] 
    },
    { faculty: "Chetan Chavan", events: [
        { name: "Bridging Minds", student: "Rohit Chopkar" },
        { name: "PUBG Domination", student: "Sanket Wable" }
      ] 
    },
    { faculty: "Vijaya Yaduvanshi", events: [
        { name: "Electrothon", student: "Ishaan Gandhi & Sharvari" },
        { name: "Auto Expo", student: "Aditya Patil & Shreyash Pawar" }  
      ] 
    }
  ];

  return (
    <div className="teams-container">
      <h1 className="dim-heading">
        Event Coordinators <span className="bulb">💡</span>
      </h1>

      <div className="table-container">
        <table className="teams-table">
          <thead>
            <tr>
              <th>Faculty Coordinator</th>
              <th>Event Details</th>
              <th>Student Coordinators</th>
            </tr>
          </thead>
          <tbody>
            {teamsData.map((facultyData, index) => (
              <React.Fragment key={index}>
                {facultyData.events.map((event, eventIndex) => (
                  <tr key={eventIndex}>
                    {eventIndex === 0 && (
                      <td 
                        rowSpan={facultyData.events.length} 
                        className="faculty-cell"
                      >
                        {facultyData.faculty}
                      </td>
                    )}

                    <td><strong>{event.name}</strong></td>

                    {facultyData.events[eventIndex - 1]?.student === event.student ? null : ( 
                      <td 
                        rowSpan={facultyData.events.filter(e => e.student === event.student).length}
                      >
                        {event.student}
                      </td>
                    )}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
