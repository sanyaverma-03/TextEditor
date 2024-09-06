import { useLocation } from "react-router-dom";
import Navbar from "../../molecules/Navbar";
import { Container } from "reactstrap";

const PostPreview = () => {
  const location = useLocation();
  const { postTitle, content, postCategory } = location.state || {};

  return (
    <div>
      <Navbar heading="Your Masterpiece!!" />
      <Container className="text-center" style={{ marginTop: "3rem" }}>
        <h3 style={{ fontSize: "3rem", fontWeight: "bold" }}>{postTitle}</h3>
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Category:{postCategory}
        </p>
      </Container>
    </div>
  );
};

export default PostPreview;
