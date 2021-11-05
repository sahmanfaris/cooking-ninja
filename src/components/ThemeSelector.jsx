import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-icon.svg'
import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()
  const toggleMode = () => {
    // mode === 'dark' ? changeMode('light') : changeMode('dark')
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt='mode icon'
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
      <div className='theme-buttons'>
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}