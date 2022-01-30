import react from "react";
import { Alert } from "react-bootstrap";

function Success({ success, paymentid }) {
  return (
    <div>
      <Alert variant="success">{success}</Alert>
    </div>
  );
}

export default Success;
