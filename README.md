# Technical Challenge with React, TypeScript, NextJS, and Bulma CSS

This application was created to fulfill a technical challenge, to visualize data fetched from [this endpoint](https://c4rm9elh30.execute-api.us-east-1.amazonaws.com/default/cachedPriceData?ticker=C) in a user-friendly, easily consumable way.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First clone this application. Then in the root directory, run the following to install dependencies and kick off the development server:

```bash
npm install
npm run dev
```

## Running tests
There are a selection of Jest tests included in this application, testing core util functionality and sanity checking a sample of React components.

To run the tests, run the following command from the root of this project:
```bash
npm run test
```
The output will include coverage metrics. Further information on coverage can be found in the `coverage` directory. A full report is written to `coverage/lcov-report/index.html`.

To run the tests in watch mode, run the following command from the root of this project:
```bash
npm run test -- --watch
```

## Application features
The following functionality is demonstrated in this application:
- **Data is fetched** from the provided endpoint, formatted appropriately, and displayed in a **paginated table**.
  - Data is fetched using a custom [useFetchData](./src/app/hooks/useFetchData.ts) hook.
- The text `Loading...` is displayed while the application is fetching data from the endpoint.
- If there is an error, an **error message** will be displayed instead of the table.
- The table pages are 10 records long, and the user can **move forwards and backwards through the pages** using controls at the bottom of the table.
- Users can **click on a header in the table to sort the data** by that header, in ascending order. Click the reset button to revert to default sorting.
- Users can **search the data** in the table using the search bar at the top of the table. Click the reset button to remove the search term.
- Users can **filter based on a set time range**: data from today, data from the last 3 days, and data from the last 5 days. Click the reset button to remove the filter.
- Much of the crucial table data is stored in a [TableContext](./src/app//context/TableContext.tsx) to prevent prop drilling and to ensure all child components read from the same single source of truth.
- A **bar chart of average volume per day** is included in a separate tab. Users can clearly see the trend in the average volume of the data records in this chart.

_Note: While developing this application I maintained a short checklist to manage tasks, which is [here](./checklist.md)._

## Enhancements
Given additional time, there are multiple enhancements I would make to this application:
1. The reset button is a workaround to reduce the complexity of returning to previous states of the table data, and simply reverting back to the start. This could be improved by:
    - Updating the search functionality so that it filters on the original list every time there is a change detected, rather than just trimming down the current list.
    - Adding the ability to remove filters in the filter section rather than using the reset button.
2. The only filterable field currently is the timestamp, which was a decision made to quickly showcase filter functionality. Given additional time, I would like build out a fully customizable filter panel and allow the user to filter based on any field they choose.
3. It is currently only possible to sort in ascending order. A nice enhancement would be to allow the user to click on the current sorting header again to reorder the data in descending order.
4. Only a small subset of test are included as examples. Ordinarily I would test everything, and aim for as much coverage as possible. In the interest of time, I have tested only the core filter functionality, the main DataDisplay component, and a smaller SearchBar component.
    - In particular, I would have liked to test the custom hook used to fetch the data due to its importance.
    - End to end tests using a framework like Cypress would be another good enhancement.
    - I would also set up some sort of CI/CD pipeline to run when opening a PR.