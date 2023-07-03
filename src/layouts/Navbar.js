"use client";

import {
  LoginSignUp,
  NavbarBody,
  NavbarContainer,
  OffcanvasButton,
  UserMenu,
} from "../features/Navbar";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function () {
  const { user } = useContext(AuthContext);
  const { width } = useWindowDimensions();

  return (
    <NavbarContainer>
      {width < 768 ? <OffcanvasButton /> : <NavbarBody />}
      {user ? <UserMenu user={user} /> : <LoginSignUp />}
    </NavbarContainer>
  );
}
