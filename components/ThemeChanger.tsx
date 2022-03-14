import { useTheme } from 'next-themes';
import Image from 'next/image';

const Button = ({ name, onClick }) => {
  return (
    <button
      className="flex flex-row items-center justify-center hover:animate-spin"
      onClick={onClick}
    >
      <Image
        alt={name}
        src={`/static/${name}.png`}
        width={30}
        height={30}
      />
    </button>
  )
}

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className={`ml-3`}>
      {theme === 'dark'
        ? <Button name='moon' onClick={() => setTheme('light')} />
        : <Button name='sun' onClick={() => setTheme('dark')} />
      }
    </div>
  )
}

export default ThemeChanger;