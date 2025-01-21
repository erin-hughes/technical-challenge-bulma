import { ErrorMessageProps } from "./ErrorMessageProps";

interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps): React.ReactElement => {
  return (
    <div className="notification is-danger is-dark" role="alert">
      <button className="delete" aria-label="close" onClick={() => window.location.reload()}></button>
      <strong>Error:</strong> {!!message ? message : "There was a problem loading the application."}
    </div>
  );
};

export default ErrorMessage;