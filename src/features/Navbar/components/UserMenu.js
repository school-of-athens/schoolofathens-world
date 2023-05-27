import {
  Avatar,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
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
    <Menu isOpen={isOpen}>
      <Box
        py={2}
        ps={1}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        lineHeight="0"
      >
        <MenuButton>
          <Avatar size="sm"  referrerPolicy="no-referrer" name={user.displayName} src={user.photoURL} />
        </MenuButton>
      </Box>

      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
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
