import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  AccessibilityRole,
  AccessibilityStates,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";

export interface IBubbleTabConfig {
  name?: string;
  activeColor: string;
  activeBackgroundColor: string;
  activeIcon: () => React.ReactNode;
  disabledIcon: () => React.ReactNode;
}

export interface IBubbleTabBar extends BottomTabBarProps {
  tabs: readonly IBubbleTabConfig[];
  activeTabSize?: number;
  disabledTabSize?: number;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

export interface IRoute {
  key: string;
  name: string;
}

export interface IAccessibility {
  accessibilityRole?: AccessibilityRole;
  accessibilityStates?: AccessibilityStates[];
  accessibilityLabel?: string;
}
