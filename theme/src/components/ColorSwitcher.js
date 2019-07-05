import React from 'react'
import Switch from './switch'
import sun from "../../content/assets/sun.png"
import moon from "../../content/assets/moon.png"
import {css} from "@emotion/core"
import { useColorMode } from 'theme-ui'


function ColorSwitcher ({props}) {
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = e => {
      setColorMode(isDark ? `light` : `dark`)
    }
  return (
    <Switch
            aria-label="Toggle dark mode"
            css={css({
              bg: `black`,
            })}
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          />
  )
}

const checkedIcon = (
    <img
      alt="moon indicating dark mode"
      src={moon}
      width="16"
      height="16"
      role="presentation"
      css={{
        pointerEvents: `none`,
        margin: 4,
      }}
    />
  )
  
  const uncheckedIcon = (
    <img
      alt="sun indicating light mode"
      src={sun}
      width="16"
      height="16"
      role="presentation"
      css={{
        pointerEvents: `none`,
        margin: 4,
      }}
    />
  )
  
  export default ColorSwitcher