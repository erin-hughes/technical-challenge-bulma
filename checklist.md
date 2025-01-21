# Checklist

Creating this list of tasks to help break down the problem into smaller goals and help keep me on track for the overall deliverable.

## Task Overview:

- Create a React application that hits [this endpoint](https://c4rm9elh30.execute-api.us-east-1.amazonaws.com/default/cachedPriceData?ticker=C) and displays the data in a clean, user friendly matter.
- Include features like dynamic filtering, sorting, pagination, and searching
- Ensure the UI is responsive and works on all screen sizes
- Include a data visualization (i.e. a graph of some sort)

### bare minimum:

- [x] stand up a Next app and install Bulma
- [x] make the API call to the endpoint and log out the response
- [x] display the response in a table
- [x] context?

### table functionality

- [x] implement pagination
- [x] implement filtering _(added ability to filter by a set date range)_
- [x] implement sorting
- [x] implement search functionality _(remove search term by clicking the reset button)_
- [x] button to reset

### data visualization

- [x] pick out a charting library
- [x] add a chart - potentially on a different page/route? _(added chart to a different tab)_

### cleanliness/etc.

- [x] make the api call a reuseable hook
- [x] clean up typings
- [x] tests
- [x] readme
