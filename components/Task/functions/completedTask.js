export async function completedTask(taskId) {
  await fetch(`/api/tasks/${taskId}/toggleCompleted`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
