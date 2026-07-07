import { useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Student</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default EditStudent;