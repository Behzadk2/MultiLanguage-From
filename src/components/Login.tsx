import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <div className="group">
      <div className="row">
        <h2>{t("login")}</h2>
        <div className="col">
          <label className="" htmlFor="username">
            {t("username")}
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            id="username"
            type="text"
          />
        </div>
        <div className="col">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            {t("password")}
          </label>
          <input
            className="w-full px-3 py-2 shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
          />
        </div>
        <div className="row">
          <button
            className="px-4 py-2 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            type="button"
          >
            {t("signIn")}
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="/"
          >
            {t("forgetPassword")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
