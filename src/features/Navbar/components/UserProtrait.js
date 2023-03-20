import {
  Avatar,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const UserPortrait = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu>
      <MenuButton>
        <Avatar size="sm" name="Jinzhou Wu" src="" />
      </MenuButton>
      <MenuList>
        <MenuItem><FontAwesomeIcon icon={faUser} className="icon-gray" />My Profile</MenuItem>
        <MenuItem><FontAwesomeIcon icon={faRightFromBracket} className="icon-gray" />Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserPortrait;
