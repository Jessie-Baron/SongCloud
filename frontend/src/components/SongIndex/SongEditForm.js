import { useState, useEffect } from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editSong } from "../../store/song";

function SongEditForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [url, setUrl] = useState("")
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    if (!title) {
      setValidationErrors([]);
      return;
    }
    console.log("uE running");
    const errors = [];
    if (!title.length) errors.push("Please enter your title");
  }, [title]);

  const onSubmit = async (e) => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    // Create a new object for the song form information.
    const songForm = {
      title,
      description,
      url,
      imageUrl
    };

    await dispatch(editSong(id, songForm))

    // Reset the form state.
    setTitle("");
    setDescription("")
    setImageUrl("")
    setUrl("")
    setValidationErrors([]);
    setHasSubmitted(false);

    history.push(`/songs/${id}`)
  };

  return (
    <form className="form" hidden onSubmit={onSubmit}>
    <ul>
      {validationErrors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ))}
    </ul>
    <label>
      title
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </label>
    <label>
      Description
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </label>
    <label>
      Image Url
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
    </label>
    <label>
        Url
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
    </label>
    <button type="submit">Submit</button>
  </form>
);
}

export default SongEditForm;
