//your JS code here. If required.
function capitalizeName() {
    var inputField = document.getElementById('fname');
    inputField.value = inputField.value.toUpperCase(); // Convert value to uppercase
}

// Add event listener for 'blur' event
document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById('fname');
    inputField.addEventListener('blur', capitalizeName); // Call capitalizeName when the input field loses focus
});
