const logWorkoutForm = document.getElementById('log-workout-form')

let workoutsData = []

// TODO add a confirmation message that workout data was saved successfully

// future TODO: store workouts data on cloud storage (firebase?)


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


const loadLatestWorkoutData = () => {
    workoutsData = JSON.parse(localStorage.getItem('workoutsData')) || []
    console.log(workoutsData[workoutsData.length - 1])

    const latestWorkout = workoutsData[workoutsData.length - 1]

    if (latestWorkout) {
        const exerciseData = latestWorkout.exerciseData
        const exerciseDataKeys = Object.keys(exerciseData)

        exerciseDataKeys.forEach(key => {
            const inputElement = document.getElementById(key)
            inputElement.value = exerciseData[key]
        })
    }

}





// Add a submit event listener to the form

logWorkoutForm.addEventListener('submit', saveWorkoutData)
document.addEventListener("DOMContentLoaded", loadLatestWorkoutData);