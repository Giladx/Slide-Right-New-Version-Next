module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF",
          "DeepBlue": "#0f1722ff",
          "Yellow": "#faff00ff",
          "DarkBlue": "#000e4aff"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "ThreeUnits": "48px",
        "Unit": "16px",
        "FiveUnits": "80px",
        "TwoUnits": "32px",
        "HalfUnit": "8px",
        "FourUnits": "64px",
        "OneAndHalfUnits": "24px",
        "SixUnits": "96px"
      },
      "borderRadius": {
        "Radius2": "2px",
        "Radius8": "8px",
        "Round": "50%",
        "Radius4": "4px"
      },
      "scale": {
        "XXLarge": "288px",
        "XLarge": "192px",
        "Medium": "96px",
        "XSmall": "16px",
        "Large": "144px",
        "MaxWidth": "1400px",
        "Small": "48px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}