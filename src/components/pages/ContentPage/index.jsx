import styles from "./index.module.css";
import Navbar from "../../molecules/Navbar";
import AddPostForm from "../../organisms/AddPostForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const ContentPage = () => {
  return (
    <div className={styles.ContentWrap}>
      <Navbar heading="Create your own Masterpiece!!" />
      <Container>
        <AddPostForm />
      </Container>
    </div>
  );
};

export default ContentPage;
