# On-Track

### MVP

On Track is a data visualizer that shows the breakdown of service changes and planned work for a given MTA line.

#### Feature List

- Users should be able to select an MTA line from a menu to see service changes
- Users should see a graph that displays the types of delays and their frequency 
- Users should be able to see service changes for the lines in general

### Technologies, Libraries, APIs

Javascript, HTML, CSS, mta API

##### Additional Scripts

`menu.js` will render the menu that users will use to select mta lines

`pieGraph.js` will render the graph representing delays types and their frequency

`graphData.js` will parse data from the api

### Wireframe

![Wireframe](/wireframe.png)


### Implementation Timeline

**Day 1** : Setup all necessary Node modules. Create entry file and skeletons of script files. Be able to get information from the api on the screen. Learn how to use D3.

**Days 2 & 3** : Figure out how to start visualizing the data with the graph, have some ability to graph the data by end of day.

**Day 4** : Be able to select a line and have delays be shown

**Day 5** : Add styling

### Bonus Features

- Filtering down to one specific line instead of a group/"color" of lines
- Selecting a date to see delays on a given date
