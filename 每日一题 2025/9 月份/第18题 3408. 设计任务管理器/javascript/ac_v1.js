/**
 * @param {number[][]} tasks
 */
var TaskManager = function(tasks) {
    this.taskMap = new Map();
    this.taskList = new PriorityQueue((t1, t2) => {
        if (t1.priority !== t2.priority) {
            return t1.priority > t2.priority ? -1 : 1;
        } else {
            return t1.taskId > t2.taskId ? -1 : 1;
        }
    });
    for (const t of tasks) {
        const task = {
            userId: t[0],
            taskId: t[1],
            priority: t[2]
        };
        this.taskList.enqueue(task);
        this.taskMap.set(task.taskId, task);
    }
};

/** 
 * @param {number} userId 
 * @param {number} taskId 
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function(userId, taskId, priority) {
    this.taskList.enqueue({userId, taskId, priority});
    this.taskMap.set(taskId, {userId, taskId, priority});
};

/** 
 * @param {number} taskId 
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function(taskId, newPriority) {
    let oldTask = this.taskMap.get(taskId);
    const newTask = {
        userId: oldTask.userId,
        taskId, 
        priority: newPriority
    };

    this.taskList.enqueue(newTask);
    this.taskMap.set(taskId, newTask);
};

/** 
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function(taskId) {
    this.taskMap.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function() {
    if (!this.taskMap.size) {
        return -1;
    }

    let task = this.taskList.dequeue();
    // 任务已被删除，或者因优先级变更而失效
    while (!this.taskMap.has(task.taskId) || task.priority !== this.taskMap.get(task.taskId).priority) {
        task = this.taskList.dequeue();
    }
    this.taskMap.delete(task.taskId);

    return task.userId;
};

/** 
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
