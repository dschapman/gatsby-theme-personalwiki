/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
import merge from "lodash.merge"
import colors from "./colors"

export default merge( {
  initialColorMode: 'light',
  colors,
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "flex",
        alignItems: "baseline",
        justifyContent:"space-between",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
        a: {
          color: "background",
          textDecoration: "none"
        },
      },
    },
    Main: {
      margin: "0 auto",
      width: "90vw",
    },
    Container: {
      width: "90vw",
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      color: "text",
      fontSize: 5,
      lineHeight: "heading",
    },
    h2: {
      color: "text",
      fontSize: 4,
      lineHeight: "heading",
    },
    a: {
      color: "primary",
    },
     
  },
})
