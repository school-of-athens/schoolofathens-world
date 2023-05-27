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
  const { user } = useContext(AuthContext);

  return (
    <NavbarContainer>
      <OffcanvasButton />
      <NavbarBody />
      {user ? (
        <UserMenu user={user} />
      ) : (
        <LoginSignUp />
      )}
    </NavbarContainer>
  );
}
