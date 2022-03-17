import StoryContainer from "../components/StoryContainer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function TopPage() {
  return (
    <div>
      <Header />
      <SubHeader />
      <StoryContainer type={`top`} />
    </div>
  );
}

export default TopPage;
