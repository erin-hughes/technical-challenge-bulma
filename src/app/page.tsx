"use client";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import { TableProvider } from "./context/TableContext";

const Home = () => {
  return (
    <div className="container">
      <header className="has-text-centered py-5">
        <h1 className="title is-2">Technical Challenge</h1>
        <p className="subtitle is-5">
          Examples of how data retrieved from an API endpoint can be visualized.
        </p>
      </header>
      <TableProvider>
        <DataDisplay />
      </TableProvider>
    </div>
  );
};

export default Home;
