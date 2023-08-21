import React from "react";
import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "../app/material-tailwind";
import { GrLanguage } from "react-icons/gr";

type Props = {};

export default function LanguageSwitcher({}: Props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Menu>
      <MenuHandler>
        <Button className="flex items-center normal-case">
          {t("language")}
          <GrLanguage className="font-bold ml-2" />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => changeLanguage("ar")}>عربي</MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
      </MenuList>
    </Menu>
  );
}
