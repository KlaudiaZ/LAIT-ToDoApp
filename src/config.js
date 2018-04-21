const server = "http://localhost:3000/";

export default {
    url: {
        getTask: server + "todo",
        addTask: server + "todo",
        deleteTask: server + "todo/",
        taskDone: server + "todo/done/",
        taskUndone: server + "todo/undone/",
        editTask: server + "todo/"
    }
}