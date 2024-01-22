export default async function AddTask(taskTitle) {
  //comment this because the mutate is taking about 1min and this will automatically refresh the form

  console.log(taskTitle);
  try {
    const response = await fetch(`/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskTitle),
    });
  } catch (error) {
    console.log("ERROR !!");
  }
}
