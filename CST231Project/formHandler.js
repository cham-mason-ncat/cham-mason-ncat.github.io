// Get the form element by its ID
var form = document.getElementById("my-form");

// Define the function to handle form submission
async function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the status element to display the status message
  var status = document.getElementById("my-form-status");

  // Create a FormData object from the submitted form
  var data = new FormData(event.target);

  // Send the form data to the server via fetch
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    // Check if the response is successful
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    } else {
      // Handle errors returned from the server
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
        }
      });
    }
  })
  .catch(error => {
    // Handle any network or other errors
    status.innerHTML = "Oops! There was a problem submitting your form";
  });
}

// Attach the submit event listener to the form
form.addEventListener("submit", handleSubmit);
