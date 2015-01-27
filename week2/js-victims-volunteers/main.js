var volunteers = [];

function addVictim(form) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<li>" + form.victimName.value +
        " <button class='btn btn-default btn-sm' onclick='checkVictim(\"" +
        form.victimAddress.value + "\");'>Check</button></li>";
    document.getElementById("victims").appendChild(listItem);
}

function addVolunteer(form) {
    volunteers.push(
        {
            name: form.volunteerName.value,
            phone: form.volunteerPhone.value,
            address: form.volunteerAddress.value
        }
    );
    var listItem = document.createElement("li");
    listItem.innerHTML = "<li>" + form.volunteerName.value + "</li>";
    document.getElementById("volunteers").appendChild(listItem);
}

function checkVictim(victimAddress) {
    var message = "";
    if(volunteers.length !== 0) {
        message += "The following volunteers are available: \n ";
        volunteers.forEach(function(volunteer) {
            if(victimAddress.toLowerCase() === volunteer.address.toLowerCase()) {
                message += volunteer.name + " - " + volunteer.phone + "\n ";
            }
        });
    } else {
        message += "Sorry. No volunteers are available.";
    }
    alert(message);
}
