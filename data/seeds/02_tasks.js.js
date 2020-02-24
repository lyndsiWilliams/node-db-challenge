exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_description: "Task description 1",
          task_notes: "Task notes 1",
          task_completed: false,
          task_project_id: 1
        },
        {
          id: 2,
          task_description: "Task description 2",
          task_notes: "Task notes 2",
          task_completed: false,
          task_project_id: 1
        },
        {
          id: 3,
          task_description: "Task description 3",
          task_notes: "Task notes 3",
          task_completed: false,
          task_project_id: 2
        },
        {
          id: 4,
          task_description: "Task description 4",
          task_notes: "Task notes 4",
          task_completed: false,
          task_project_id: 2
        },
        {
          id: 5,
          task_description: "Task description 5",
          task_notes: "Task notes 5",
          task_completed: false,
          task_project_id: 2
        }
      ]);
    });
};