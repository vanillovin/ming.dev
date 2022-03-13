import { useTheme } from 'next-themes';
import Image from 'next/image';

const Button = ({ name, setTheme }) => {
  return (
    <button
      className="flex flex-row items-center justify-center hover:animate-spin"
      onClick={() => setTheme('light')}
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
    <div className={`ml-2`}>
      {theme === 'dark'
        ? <Button name='moon' setTheme={() => setTheme('light')} />
        : <Button name='sun' setTheme={() => setTheme('dark')} />
      }
    </div>
  )
}

export default ThemeChanger;