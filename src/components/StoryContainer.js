import React, { useEffect, useState } from "react";
import { getStoryIds } from "../utilis/Api";
import Story from "./Story";
import StoriesContainerWrapper from "../ui/StoriesContainerWrapper";
import { useInfiniteScroll } from "../infiniteScroll/useInfiniteScroll";
import Loader from "../loader/Loader";

//here api ids request is called and ids are looped and passed in story component as props
//props type is passed from pages
//conditional rendering is used to show loading indiciator when apis are called
//container is wraped in reusible wraper in ui folder

function StoryContainer(props) {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStoryIds(props.type).then((data) => setStoryIds(data), setLoading(true));
  }, []);

  return (
    <>
      {loading ? (
        <StoriesContainerWrapper>
          {storyIds.slice(0, count).map((storyId) => (
            <Story key={storyId} storyId={storyId} />
          ))}
        </StoriesContainerWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default StoryContainer;
