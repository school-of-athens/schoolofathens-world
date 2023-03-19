import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function () {
  const [topicList, setTopicList] = useState([]);

  return (
    <div className="col-lg-3 col-md-4 px-sm-5 px-3 col-12 py-4">
      <div className="query-selector">
        <h5>Search</h5>

        <div className="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search (Disabled)"
            disabled
          />
          <Button colorScheme="blue"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </div>
        <h5>Sort by</h5>
        <Select defaultValue="DEFAULT">
          <option value="DEFAULT">Default</option>
          <option value="NEWEST">Newest</option>
          <option value="VOTES">Votes</option>
          <option value="OPINIONS">Opinions</option>
          <option value="DUE_DATE">Due Date</option>
        </Select>
        <h5>Topics</h5>
        <CheckboxGroup onChange={(e) => setTopicList(e)}>
          <Stack spacing={2} ml={1} direction="column">
            <Checkbox size="md" value="current-events">
              Current Events
            </Checkbox>
            <Checkbox size="md" value="international">
              International
            </Checkbox>
            <Checkbox size="md" value="domestic">
              Domestic
            </Checkbox>
            <Checkbox size="md" value="politics">
              Politics
            </Checkbox>
            <Checkbox size="md" value="society">
              Society
            </Checkbox>
            <Checkbox size="md" value="history">
              History
            </Checkbox>
            <Checkbox size="md" value="science">
              Science
            </Checkbox>
            <Checkbox size="md" value="art">
              Art
            </Checkbox>
            <Checkbox size="md" value="education">
              Education
            </Checkbox>
            <Checkbox size="md" value="health">
              Health
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>
    </div>
  );
}
