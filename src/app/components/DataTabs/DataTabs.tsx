"use client";

import { DataTabProps } from "./DataTabProps";

const DataTabs = ({
  activeTab,
  setActiveTab,
}: DataTabProps): React.ReactElement => {
  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const tabname = e.currentTarget.title;
    console.log(tabname);
    setActiveTab(tabname);
  };

  const determineTabClassName = (tab: string): string => {
    return tab === activeTab ? "is-active" : "";
  };

  return (
    <div className="tabs">
      <ul>
        <li className={determineTabClassName("Table")}>
          <a title="Table" onClick={handleTabClick}>
            Table
          </a>
        </li>
        <li className={determineTabClassName("Graph")}>
          <a title="Graph" onClick={handleTabClick}>
            Graph
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DataTabs;
