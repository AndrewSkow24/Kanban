import { useState } from "react";
import SContainer from "../Container/Container.styled";
import { ButtonHover3 } from "../Button/Button.styled.js";

import {
  SHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderPopUserSet,
  HeaderBtnMainNew,
  HeaderUser,
  PopUserSetName,
  PopUserSetMail,
  PopUserSetTheme,
} from "./Header.Styled.js";

const Header = () => {
  const [userWindowIsOpen, setUserWindowIsOpen] = useState(false);

  return (
    <SHeader>
      <SContainer>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtnMainNew>

            <HeaderUser onClick={() => setUserWindowIsOpen(!userWindowIsOpen)}>
              Иван Иванов
            </HeaderUser>

            <HeaderPopUserSet
              id="user-set-target"
              style={
                userWindowIsOpen ? { display: "block" } : { display: "none" }
              }
            >
              <PopUserSetName>Иван Петров</PopUserSetName>
              <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
              <PopUserSetTheme>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
              </PopUserSetTheme>

              <ButtonHover3>
                <a href="#popExit">Выйти</a>
                <input type="checkbox" name="checkbox" />
              </ButtonHover3>
            </HeaderPopUserSet>
          </HeaderNav>
        </HeaderBlock>
      </SContainer>
    </SHeader>
  );
};

export default Header;
