// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element by its ID
    const noteForm = document.getElementById('noteForm');

    // Add an event listener to handle form submission
    noteForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form input values
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const note = document.getElementById('note').value;

        // Save the values to local storage
        localStorage.setItem('noteTitle', title);
        localStorage.setItem('noteDate', date);
        localStorage.setItem('noteContent', note);

        // Redirect to the notes page to view saved notes
        window.location.href = 'viewNotes.html'; // Change to the actual path of your separate page
    });
});
