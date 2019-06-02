const onSpacePress = (callback: () => void) => (e: KeyboardEvent) => {
  if (e.code === "Space") {
    callback();
    return true;
  } else {
    return false;
  }
};

export { onSpacePress };
