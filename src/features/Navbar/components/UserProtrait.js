import {
  Avatar,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import useSignOut from "../hooks/useSignOut";
import { useNavigate } from "react-router-dom";

const UserPortrait = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const signOut = useSignOut();

  return (
    <Menu>
      <MenuButton>
        <Avatar size="sm" name={user.displayName} src={user.photoURL} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate(`/user/${user.uid}`)}>
          <FontAwesomeIcon icon={faUser} className="icon-gray" />
          My Profile
        </MenuItem>
        <MenuItem onClick={signOut}>
          <FontAwesomeIcon icon={faRightFromBracket} className="icon-gray" />
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserPortrait;
