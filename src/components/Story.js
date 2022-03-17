import React, { useState, useEffect, memo } from "react";
import { getStory } from "../utilis/Api";
import StoryWrapper from "../ui/StoryWrapper";
import { mapTime } from "../mappers/mapTime";
import styles from "./Story.module.css";

//here story is fetched with id that is given from props
//api is called in useEffect and is only called when page is reloded
//story component is in reusible wraper

function Story(props) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(props.storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper>
      <h1 className={styles.h1}>
        <a href={story.url}>{story.title}</a>
      </h1>
      <div className={styles.div}>
        <p>By: {story.by}</p>
        <p>Posted: {mapTime(story.time)}</p>
      </div>
    </StoryWrapper>
  ) : null;
}

export default Story;
