export async function deleteTask(taskId) {
  const response = await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
  //add a feedback to user

  if (!response.ok) {
    return;
  }
}
