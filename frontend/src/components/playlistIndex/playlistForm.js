import { useState, useEffect } from "react";
import { createPlaylist } from "../../store/playlist";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";

function PlaylistForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!name) {
      setValidationErrors([]);
      return;
    }
    console.log("uE running");
    const errors = [];
    if (!name.length) errors.push("Please enter your Name");
  }, [name]);

  const onSubmit = (e) => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    // Create a new object for the playlist form information.
    const playlistForm = {
      name,
      description,
      imageUrl
    };

    dispatch(createPlaylist(playlistForm))

    // Reset the form state.
    setName("");
    setDescription("")
    setValidationErrors([]);
    setHasSubmitted(false);
  };

  return (
    <form onSubmit={onSubmit}>
    <ul>
      {validationErrors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ))}
    </ul>
    <label>
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
    <button type="submit">Submit</button>
  </form>
);
}

export default PlaylistForm;
