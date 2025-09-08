

const loadLessons = () => {

    fetch("https://openapi.programming-hero.com/api/levels/all")   // promise of response
        .then(response => response.json()) // promise of json data
        .then(Myjson => displayLessons(Myjson.data))
        .catch(error => console.error("Error fetching lessons:", error));
}

const displayLessons = lessons => {
    // 1. get the container and empty it
    const lessonsContainer = document.getElementById("lessons-container");
    lessonsContainer.innerHTML = "";
    //2. get into every element of the array
    for (let lesson of lessons) {

        // 3. create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `  <button class="btn btn-outline btn-primary ">
              <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no} </button> `;

        // 4. append to container
        lessonsContainer.appendChild(btnDiv);
    }
}



loadLessons();