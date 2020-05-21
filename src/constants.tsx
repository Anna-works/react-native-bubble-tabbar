import * as React from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

import { screenWidth } from "./dimensions";

const Icon = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 18px;
  width: 18px;
`;

export const defaultActiveTabSize = (screenWidth - 50) / 3.8;

export const defaultDisabledTabSize = 85;

export const defaultBackgroundColor = "white";
