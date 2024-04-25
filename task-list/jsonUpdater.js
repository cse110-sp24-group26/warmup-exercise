fetch("./multiple_tasks.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (taskList) {
    let placeholder = document.querySelector(".task-lists-container");
    let out = "";

    // adds each subtask to page
    for (let mainTask of taskList.tasks) {
      // displaying each main task title
      out += `
                <div class="task-list">
                    <h2 class="task-list-title">${mainTask["title"]}</h2>
                    <ul class="tasks">
            `;
      //iterating through the subtask of each main task
      for (let subtask of mainTask.subtasks) {
        out += `
                    <li class="task">
                        <h3 class="task-title">${subtask["subtitle"]}</h3>
                        <p class="task-description">${subtask["description"]}</p>
                        <p class="due-date">${subtask["due_date"]}</p>
                    </li>
                `;
      }

      out += `
                    </ul>
                </div>
            `;
    }

    placeholder.innerHTML = out;
  });
