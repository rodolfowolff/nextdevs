import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      style={{
        background: 'transparent',
        border: 'none',
        padding: '0',
        margin: '0',
        outline: 'none',
      }}
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
        )
      }
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <MdLightMode size={18} color="#f9d31c" />
      ) : (
        <MdDarkMode size={18} color="#141414" />
      )}
    </button>
  )
}

export default ThemeSwitch
