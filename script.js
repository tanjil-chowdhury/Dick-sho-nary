

const loadLessons = () => {

    fetch("https://openapi.programming-hero.com/api/levels/all")   // promise of response
        .then(response => response.json()) // promise of json data
        .then(Myjson => displayLessons(Myjson.data))
        .catch(error => console.error("Error fetching lessons:", error));
}


// const removeActive = () => {
//     const lessonButtons = document.querySelectorAll(".lesson-button");
//     lessonButtons.forEach(button => button.classList.remove("btn-active"));
// };

const loadLevelWords = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {

            // removeActive();

            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            clickBtn.classList.add("btn-active");
            loadWord(data.data)
        })
        .catch(error => console.error("Error fetching words:", error));
}

const loadWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if (words.length === 0) {
        wordContainer.innerHTML = ` <div class="text-center col-span-full rounded-xl py-10 space-y-6 fontBangla">
     <img class="mx-auto" src ="./assets/alert-error.png" ">
      <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h2 class="text-4xl font-bold">নেক্সট Lesson এ যান</h2>
    </div>`;
        return;
    }


    for (let word of words) {
        const div = document.createElement("div");
        div.innerHTML = ` <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4 ">

      <h2 class="font-bold text-2xl">${word.word ? word.word : "No Word Available"}</h2>
      <p class="font-semibold">Meaning/Pronounciation</p>
      <div class="fontBangla"> "${word.meaning ? word.meaning : "No Meaning Available"}/${word.pronunciation ? word.pronunciation : "No Pronunciation Available"}   " </div>

      <div class="flex justify-between items-center">
        <button  onclick="my_modal_5.showModal()" class="btn bg-gray-200  hover:bg-violet-400" ><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn  bg-gray-200  hover:bg-violet-400"><i class="fa-solid fa-volume-high"></i></i></button>


      </div>

    </div>`;
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
        btnDiv.innerHTML = `  <button id= "lesson-btn-${lesson.level_no}" onclick="loadLevelWords(${lesson.level_no})" class="btn btn-outline btn-primary ">
              <i class="fa-solid fa-book-open lesson-button"></i> Lesson-${lesson.level_no} </button> `;

        // 4. append to container
        lessonsContainer.appendChild(btnDiv);
    }
}



loadLessons();