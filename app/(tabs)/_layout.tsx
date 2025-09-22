import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Slot, Tabs } from 'expo-router';
import React from 'react';
import "../global.css";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Slot />
  );
}
