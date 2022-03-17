import StoryContainer from "../components/StoryContainer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function NewPage() {
  return (
    <div>
      <Header />
      <SubHeader />
      <StoryContainer type={`new`} />
    </div>
  );
}

export default NewPage;
