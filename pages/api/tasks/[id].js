import Task from "@/db/models/Task";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }
  await dbConnect();

  if (request.method === "DELETE") {
    await Task.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }
}
