import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('coinDataDarkMode', false);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
