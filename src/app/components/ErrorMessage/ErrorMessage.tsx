import { ErrorMessageProps } from "./ErrorMessageProps";

const ErrorMessage = ({ message }: ErrorMessageProps): React.ReactElement => {
  return (
    <div className="notification is-danger is-dark" role="alert">
      <strong>Error:</strong>{" "}
      {!!message ? message : "There was a problem loading the application."}
    </div>
  );
};

export default ErrorMessage;
