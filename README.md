## Building a Api project with HackerNews Api

This application calls the Hackernews Api. This project was built using React (create-react-app as a base) and the technologies used were React, Axios.Axios is used for fetching api requests.Project can be started with npm start.

In app.js file routes are set and connected with files in page folder.Api is called twice.First to get ids of news and then with ids stories are called.Those function are exported and called in Story.js and StoryContainer.js.Props are given from pages files and based on route different api request is called(new,best,top stories)

![Preview](screenshot.png?raw=true)
![Preview](screenshot-stories.png?raw=true)
