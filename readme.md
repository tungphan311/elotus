# Project - _Movies_

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

## User Stories

The following **required** functionality is completed:

- [x] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [x] Add a search bar.
- [x] User can view movie details by tapping on a cell.
- [x] User sees loading state while waiting for the API.
- [x] User sees an error message when there is a network error.
- [x] Simple responsive.

The following **optional** features are implemented:

- [ ] Implement segmented control to switch between list view and grid view.
- [x] All images fade in.
- [x] Implement lazy load image.
- [x] Customize the highlight and selection effect of the cell.
- [ ] Improve UX loading by skeleton loading.
- [x] Enhance responsive.

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app functionality!

## Notes

- Please use ReactJS with typescript

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](https://github.com/tungphan311/elotus/blob/main/live-demo.mp4)

## Installation

- Clone project then move to project directory and run this command ```yarn```
- Before running project, please create a new file name ```.env``` with 2 values:
``` 
VITE_API_URL=https://api.themoviedb.org/3
VITE_API_KEY=<please use your own api key>
```
- After add value to environment file, please run this command ```yarn dev```
    

## License

    Copyright [2023] [Thanh Tung]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
