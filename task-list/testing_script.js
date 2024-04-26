fetch('./missing_subtask_info.json')
    .then(function (response){
        return response.json();
    })
    .then(function (taskList){
        let placeholder = document.querySelector("#data-output");
        let out = "";

        // adds each subtask to page
        for(let mainTask of taskList.tasks){
            // displaying each main task title
            if(!(mainTask.hasOwnProperty("title"))){ //checking if mainTask entry has a title key
                window.alert("Invalid json file: please check the formating of your json file");
                break;
            }
            else{
                out += `
                    <hr>
                    <h2>${mainTask['title']}</h2>
                `
                //iterating through the subtask of each main task
                for(let subtask of mainTask.subtasks){ 
                    //checking if subtask details have all the necessary keys/details
                    if(!(subtask.hasOwnProperty("subtitle") 
                            && subtask.hasOwnProperty("due_date") 
                            && subtask.hasOwnProperty("desription"))){
                        window.alert("Invalid json file: please check the formating of your json file");        
                            }
                        
                    else{
                        //writing subtitle, due_date, and description to the page
                        out += `
                        <h3>${subtask['subtitle']}</h3>
                        <p>${subtask['due_date']}</p>
                        <p>${subtask['description']}</p>
                    `;
                    }
                    
                }  
            }
              
        }
        

        placeholder.innerHTML = out;
    })