fetch('./multiple_tasks.json')
    .then(function (response){
        return response.json();
    })
    .then(function (taskList){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        
        // adds each subtask to page
        for(let mainTask of taskList.tasks){
            // displaying each main task title
            out += `
                <hr>
                <h2>${mainTask['title']}</h2>
            `
            //iterating through the subtask of each main task
            for(let subtask of mainTask.subtasks){ 
                out += `
                    <h3>${subtask['subtitle']}</h3>
                    <p>${subtask['due_date']}</p>
                    <p>${subtask['description']}</p>
                `;
            }    
        }
        

        placeholder.innerHTML = out;
    })