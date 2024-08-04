import { useTranslation } from "react-i18next";
import Login from "./components/Login";


function App() {
  const {
    i18n: { changeLanguage, language, dir },
  } = useTranslation();

  const onChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    changeLanguage(value);
  };

  return (
    <div dir={dir()}>
      <div className="header">
        <select onChange={onChangeLocale} value={language} className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">
          <option value="en">🇺🇸 English</option>
          <option value="fa">🇮🇷 Persian</option>
          <option value="fr">🇫🇷 French</option>
          <option value="ar">🇸🇦 Arabic</option>
          <option value="ch">🇨🇳 Chinese</option>
        </select>
      </div>
      <div className="content">
        <Login />
      </div>
    </div>
  );
}

export default App;