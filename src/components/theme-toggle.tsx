import { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const next = !dark

    setDark(next)

    if (next) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        h-10 w-10
        rounded-xl
        border border-slate-200
        dark:border-slate-700
        flex items-center justify-center
        text-slate-700 dark:text-white
      "
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  )
}