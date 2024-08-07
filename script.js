const logWorkoutForm = document.getElementById('log-workout-form')

// TODO: create a function that triggers on page load, which loads last workout data from localStorage
// TODO create a data structure that allows for multiple workouts to be logged

// TODO add a confirmation message that workout data was saved successfully

// future TODO: store workouts data on cloud storage (firebase?)


const logWorkoutData = (event) => {

    event.preventDefault()


    // Get the form data
    const formData = new FormData(logWorkoutForm);
    const formDataObj = Object.fromEntries(formData.entries());
    const workoutDataObj = {}

    // add timestamp 
    workoutDataObj.timestamp = new Date().toISOString()
    // add workout data to workout object
    workoutDataObj.exerciseData = formDataObj

    // Store the form data in localStorage
    localStorage.setItem('logWorkoutFormData', JSON.stringify(workoutDataObj))

    // Optional: Display a success message
    // console.log('Form data stored successfully!');
}


const loadWorkoutData = () => {
    const workoutsData = JSON.parse(localStorage.getItem('workoutsData')) || []
}


// Add a submit event listener to the form

logWorkoutForm.addEventListener('submit', logWorkoutData)
