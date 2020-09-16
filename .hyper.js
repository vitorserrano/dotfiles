module.exports = {
  config: {
    updateChannel: "stable",
    fontSize: 13,
    fontFamily: "JetBrains Mono",
    fontWeight: "500",
    fontWeightBold: "bold",
    lineHeight: 1.2,
    letterSpacing: 0,
    showHamburgerMenu: "false",
    showWindowControls: "left",
    padding: "0 14px",
    shell: "/bin/zsh",
    shellArgs: ["--login"],
    bell: "SOUND",
    macOptionSelectionMode: "vertical",
    webGLRenderer: true,
  },
  plugins: ["hyper-custom-controls"],
  localPlugins: ["hyper-omni"],
  hyperMacControls: {
    flipped: true,
  },
};
