fetch("./testing/multiple_tasks.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (taskList) {
    let placeholder = document.querySelector(".task-lists-container");
    let out = "";

    // adds each subtask to page
    for (let mainTask of taskList.tasks) {
      if (!mainTask.hasOwnProperty("title")) {
        //checking if mainTask entry has a title key
        throw new Error(
          `
          Invalid .JSON file, please ensure it is in the following format:
            
          {  
            "tasks": [
              {
                "title": "",
                "subtasks" : [
                  {
                    "subtitle" : "",
                    "due_date" : "",
                    "description" : ""
                  },
                  {
                    "subtitle" : "",
                    "due_date" : "",
                    "description" : ""
                  }
                ]
              }
            }
        `
        );
      } else {
        // displaying each main task title
        out += `
                <div class="task-list">
                    <h2 class="task-list-title">${mainTask["title"]}</h2>
                    <ul class="tasks">
            `;
        //iterating through the subtask of each main task
        for (let subtask of mainTask.subtasks) {
          if (
            !(
              subtask.hasOwnProperty("subtitle") &&
              subtask.hasOwnProperty("due_date") &&
              subtask.hasOwnProperty("description")
            )
          ) {
            throw new Error(
              `
              Invalid .JSON file, please ensure it is in the following format:
                
              {  
                "tasks": [
                  {
                    "title": "",
                    "subtasks" : [
                      {
                        "subtitle" : "",
                        "due_date" : "",
                        "description" : ""
                      },
                      {
                        "subtitle" : "",
                        "due_date" : "",
                        "description" : ""
                      }
                    ]
                  }
                }
            `
            );
          } else {
            out += `
                    <li class="task">
                        <h3 class="task-title">${subtask["subtitle"]}</h3>
                        <p class="task-description">${subtask["description"]}</p>
                        <p class="due-date">${subtask["due_date"]}</p>
                    </li>
                `;
          }
        }

        out += `
                    </ul>
                </div>
            `;

      }
    }
    placeholder.innerHTML = out;
  })
  .catch(function (error) {
    alert("An error occured: " + error.message);
  });
