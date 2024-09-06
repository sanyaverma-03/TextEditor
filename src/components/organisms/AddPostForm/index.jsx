import styles from "./index.module.css";
import React, { useState, useRef } from "react";
import Button1 from "../../atoms/Button1";
import { Container } from "reactstrap";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("GK");
  const navigate = useNavigate();

  const handleReset = () => {
    setPostTitle("");
    setContent("");
    setPostCategory("GK");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/post-preview", {
      state: { postTitle, content, postCategory },
    });
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ marginBottom: "1rem" }}>What's going in your mind?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Title</label>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Enter here"
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          />
        </div>
        <div>
          <label>Post Content</label>
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
        <div>
          <label>Post Category</label>
          <select
            value={postCategory}
            onChange={(e) => setPostCategory(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          >
            <option value="GK">GK</option>
            <option value="Technology">Technology</option>
            <option value="Personal">Personal</option>
            <option value="Adventure">Adventure</option>
            <option value="Travel">Travel</option>
            <option value="Health">Health</option>
            <option value="Spiritual">Spiritual</option>
            <option value="Behaviour">Behaviour</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </div>
        <Container className="text-center">
          <Button1 title="Create Post" onClick={handleSubmit} type="submit" />
          <Button1 title="Reset Content" onClick={handleReset} type="button" />
        </Container>
      </form>
    </div>
  );
};

export default AddPostForm;
