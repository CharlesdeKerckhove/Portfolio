Backendless.initApp("AC29438F-295C-417A-FF51-2F117FAA4300", "2081B5D2-2E7C-6F96-FFD9-590A4D57A800");

$(document).on("pageshow","#todoPage", onPageShow);

function onPageShow() {
console.log("page shown");
}

Backendless.Data.of("Tasks").find().then(processResults).catch(error);

function processResults(tasks) {
 //display the first task in an array of tasks.
    alert(tasks[1].Task)
 //wipe the list clean
$('#taskList').empty();
    console.log("list wiped");
 //add each tasks
for (var i = 0; i < tasks.length; i++) {
    $('#taskList').append("<li>" + tasks[i].Task+"</li>");
    console.log("repeat add");
}
}

function error(err) {
 alert(err);
}


