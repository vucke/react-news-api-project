import StoryContainer from "../components/StoryContainer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function BestPage() {
  return (
    <div>
      <Header />
      <SubHeader />
      <StoryContainer type={"best"} />
    </div>
  );
}

export default BestPage;
