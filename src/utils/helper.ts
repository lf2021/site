export const mobileDetectHelper = (setAction: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { width } = window.visualViewport;
  console.log('width', width);
  if (width < 600) {
    setAction(false);
  }
};
