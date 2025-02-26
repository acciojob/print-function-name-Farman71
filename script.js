document.addEventListener("DOMContentLoaded", function () {
    function functionName() {
        alert(functionName.name); // Display function name
    }

    let button = document.getElementById("func");
    if (button) {
        button.addEventListener("click", functionName);
    }
});
