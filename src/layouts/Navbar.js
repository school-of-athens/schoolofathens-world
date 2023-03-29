import {
  LoginSignUp,
  NavbarBody,
  NavbarContainer,
  OffcanvasButton,
  UserMenu,
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
        <UserMenu user={auth?.currentUser} />
      ) : (
        <LoginSignUp />
      )}
    </NavbarContainer>
  );
}
