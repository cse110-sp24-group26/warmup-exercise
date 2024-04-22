fetch('./simple_tasks.json')
    .then(function (response){
        return response.json();
    })
    .then(function (tasks){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        out += `
            <h1>${tasks.title}</h1>
            <hr>
        `;
        
        // adds each subtask to page
        for(let subtask of tasks.subtasks){ 
            out += `
                <h3>${subtask['subtitle']}</h3>
                <p>${subtask['due_date']}</p>
                <p>${subtask['description']}</p>
                <hr>
            `;
        }

        placeholder.innerHTML = out;
    })