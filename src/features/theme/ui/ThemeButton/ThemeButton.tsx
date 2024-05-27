
import { themeIcons } from "@/shared/assets";

import { useTheme } from "@/app/providers/ThemeProvider";

const ThemeButton = () => {
      const {isDark, toggleTheme} = useTheme()
  return (

         <img src={isDark ? themeIcons.light : themeIcons.dark} width={30} alt="icon" onClick={toggleTheme } />

  )
}

export default ThemeButton
