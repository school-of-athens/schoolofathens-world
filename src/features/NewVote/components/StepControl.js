
import { Heading } from "@chakra-ui/react";
import {
  Icon1CircleFill,
  Icon2CircleFill,
  Icon3CircleFill,
  CheckCircleFill,
} from "react-bootstrap-icons";

const StepControl = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="col-lg-3 col-md-4 col-12">
      <div className="todo-list">
        <div className="todo-list--item" onClick={(e) => setCurrentPage(1)}>
          {currentPage > 1 ? (
            <CheckCircleFill color="#007bff" size={30} />
          ) : (
            <Icon1CircleFill color="#007bff" size={30} />
          )}
          <Heading size="lg" mb={0} ms={4}>Basic Info</Heading>
        </div>

        <div className="todo-list--item" onClick={(e) => setCurrentPage(2)}>
          {currentPage > 2 ? (
            <CheckCircleFill color="#007bff" size={30} />
          ) : (
            <Icon2CircleFill color="#007bff" size={30} />
          )}
          <Heading size="lg" mb={0} ms={4}>Options</Heading>
        </div>

        <div className="todo-list--item" onClick={(e) => setCurrentPage(3)}>
          {currentPage > 3 ? (
            <CheckCircleFill color="#007bff" size={30} />
          ) : (
            <Icon3CircleFill color="#007bff" size={30} />
          )}
          <Heading size="lg" mb={0} ms={4}>Restrictions</Heading>
        </div>
      </div>
    </div>
  );
};

export default StepControl;