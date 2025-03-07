// Data Load Function
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log("User Requests:", data);
    });
