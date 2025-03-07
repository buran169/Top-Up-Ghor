document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;

    console.log("New Request:", { name, service });

    alert("Your request has been submitted!");
});
