declare module '*.css';
declare module '*.scss';

interface ScreenFrameProps {
  inComputer?: boolean;
}

interface ScreenFrameWrapProps {
  fullscreen?: boolean;
}

interface ScreenProps {
  inComputer?: boolean;
}

interface ToggleFullScreenButtonProps {
  onClick: () => void;
  fullscreen: boolean;
}