export default async function AddTask(taskTitle) {
  await fetch(`/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskTitle),
  });
}
