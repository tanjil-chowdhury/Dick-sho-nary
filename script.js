

const loadLessons = () => {

    fetch("https://openapi.programming-hero.com/api/levels/all")   // promise of response
        .then(response => response.json()) // promise of json data
        .then(Myjson => displayLessons(Myjson.data))
        .catch(error => console.error("Error fetching lessons:", error));
}

const loadLevelWords = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
   fetch(url)
        .then(res => res.json())
        .then(data => loadWord(data.data))
        .catch(error => console.error("Error fetching words:", error));
}

const loadWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML="";
    for (let word of words) {
        const div = document.createElement("div");
        div.innerHTML = ` <p>${word.word}</p>
        <p>${word.meaning}</p>`;
        wordContainer.appendChild(div);
    }
}





const displayLessons = lessons => {
    // 1. get the container and empty it
    const lessonsContainer = document.getElementById("lessons-container");
    lessonsContainer.innerHTML = "";
    //2. get into every element of the array
    for (let lesson of lessons) {

        // 3. create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `  <button onclick="loadLevelWords(${lesson.level_no})" class="btn btn-outline btn-primary ">
              <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no} </button> `;

        // 4. append to container
        lessonsContainer.appendChild(btnDiv);
    }
}



loadLessons();