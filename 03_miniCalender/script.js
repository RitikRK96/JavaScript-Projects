function updateData() {
    const now = new Date();

    // Array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Array of day names
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const month = monthNames[now.getMonth()]; 
    const dayName = dayNames[now.getDay()]; 
    const dayNumber = now.getDate(); 
    const year = now.getFullYear(); 

    const hours = String(now.getHours()).padStart(2, '0'); // Add leading zero
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Add leading zero
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Add leading zero

    const time = `${hours}:${minutes}:${seconds}`;

    document.getElementById("month-name").innerHTML = month;
    document.getElementById("day-name").innerHTML = dayName;
    document.getElementById("dar-number").innerHTML = dayNumber;
    document.getElementById("year").innerHTML = year;
    document.getElementById("time").innerHTML = time;

    setTimeout(updateData, 1000);
}

updateData();
