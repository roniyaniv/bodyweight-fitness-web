const logWorkoutForm = document.getElementById('log-workout-form')

let workoutsData = []

// TODO: make this external file?

const defaultWorkout = {
    "push-type": 'standard-push-ups',
    "push-reps-set-1": 3,
    "push-reps-set-2": 3,
    "push-reps-set-3": 3,
    "pull-type": 'high-incline-rows',
    "pull-reps-set-1": 7,
    "pull-reps-set-2": 7,
    "pull-reps-set-3": 7,
    "squat-type": 'split-squats',
    "squat-reps-set-1": 5,
    "squat-reps-set-2": 5,
    "squat-reps-set-3": 5,
    "glute-type": 'staggered-stance-romanian-deadlift',
    "glute-reps-set-1": 5,
    "glute-reps-set-2": 5,
    "glute-reps-set-3": 5
}


// TODO add a confirmation message that workout data was saved successfully

// future TODO: store workouts data on cloud storage (firebase?)
// TODO make workouts data exportable to local file (CSV?)


const saveWorkoutData = (event) => {

    event.preventDefault()


    // Get the form data
    const formData = new FormData(logWorkoutForm);
    const formDataObj = Object.fromEntries(formData.entries());
    const workoutDataObj = {}

    // add timestamp 
    workoutDataObj.timestamp = new Date().toISOString()
    // add workout data to workout object
    workoutDataObj.exerciseData = formDataObj

    // Add workout data to workoutsData array
    workoutsData.push(workoutDataObj)

    // Store the form data in localStorage
    localStorage.setItem('workoutsData', JSON.stringify(workoutsData))

    // Optional: Display a success message
    // console.log('Form data stored successfully!');
}


const getLatestWorkoutDataFromLocalStorageAndPopulateForm = () => {
    workoutsData = JSON.parse(localStorage.getItem('workoutsData')) || []
    console.log(workoutsData[workoutsData.length - 1])

    const latestWorkout = workoutsData[workoutsData.length - 1]
    console.log(latestWorkout)

    if (latestWorkout) {
        populateFormFields(latestWorkout.exerciseData)
    } else {
        // no latest workout data found
        populateFormFields(defaultWorkout)
    }

}

const populateFormFields = (exerciseData) => {

    const exerciseDataKeys = Object.keys(exerciseData)

    exerciseDataKeys.forEach(key => {
        const inputElement = document.getElementById(key)
        inputElement.value = exerciseData[key]
    })
}


// Add a submit event listener to the form

logWorkoutForm.addEventListener('submit', saveWorkoutData)
document.addEventListener("DOMContentLoaded", getLatestWorkoutDataFromLocalStorageAndPopulateForm);