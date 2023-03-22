import {
  LoginSignUp,
  NavbarBody,
  NavbarContainer,
  OffcanvasButton,
  UserProtrait,
} from "../features/Navbar";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function () {
  const { auth } = useContext(AuthContext);

  return (
    <NavbarContainer>
      <OffcanvasButton />
      <NavbarBody />
      {auth.currentUser ? (
        <UserProtrait user={auth?.currentUser} />
      ) : (
        <LoginSignUp />
      )}
    </NavbarContainer>
  );
}
