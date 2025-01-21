import { Dispatch, SetStateAction } from "react";

export interface DataTabProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}
