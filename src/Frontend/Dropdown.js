// // Use an IIFE to encapsulate the code and avoid global variable conflicts
// (function() {
//     let Open = false;
//
//     document.addEventListener("DOMContentLoaded", function() {
//         // Get all the buttons with the class 'triangle'
//         const triangles = document.querySelectorAll(".triangle");
//
//         // Loop through each button
//         triangles.forEach(function(triangle) {
//             const parentLabel = triangle.closest("label");
//             const details = parentLabel.querySelector(".details");
//             details.style.visibility = "hidden"; // Hide details by default
//
//             // Add a click event listener to each button
//             triangle.addEventListener("click", function() {
//                 // Toggle the visibility of the <p> element inside the parent label
//                 if (Open === false && details.classList.contains("expanded")) {
//                     details.style.visibility = "hidden";
//                     details.classList.remove("expanded");
//                     Open = true;
//                     // triangle.style.transform = this.style.transform = "rotate(0deg)";
//                 } else {
//                     details.style.visibility = "visible";
//                     // triangle.style.transform = this.style.transform = "rotate(180deg)";
//                     Open = false;
//                     details.classList.add("expanded");
//                 }
//             });
//         });
//     });
// })();

import { useState } from 'react';

const Dropdown = () => {
    const [open, setOpen] = useState({});

    const toggleDetails = (choice) => {
        setOpen(prevState => ({
            ...prevState,
            [choice]: !prevState[choice],
        }));
    };

    return (
        <div>
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(choice => (
                <div key={choice}>
                    <button onClick={() => toggleDetails(choice)} className="triangle">▼</button>
                    <div className="details" style={{ visibility: open[choice] ? 'visible' : 'hidden' }}>
                        <p>{`Details for ${choice}`}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
