exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Resource name 1",
          resource_description: "Resource description 1"
        },
        {
          id: 2,
          resource_name: "Resource name 2",
          resource_description: "Resource description 2"
        },
        {
          id: 3,
          resource_name: "Resource name 3",
          resource_description: "Resource description 3"
        },
        {
          id: 4,
          resource_name: "Resource name 4",
          resource_description: "Resource description 4"
        }
      ]);
    });
};