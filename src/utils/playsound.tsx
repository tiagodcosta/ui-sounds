const playSound = (audioFile: { play: () => any; }) => {
  return audioFile.play();
}

export default playSound;