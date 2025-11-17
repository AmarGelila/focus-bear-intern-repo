import { useTranslation } from "react-i18next";
import PrimaryButton from "./PrimaryButton";
function I18nTask() {
  const { t, i18n } = useTranslation();
  const crrLang = i18n.resolvedLanguage;
  return (
    <div>
      <h1 className="text-9xl mb-5 p-5 text-center">{t("helloWorld")}</h1>
      <PrimaryButton
        type="button"
        handleClick={() => i18n.changeLanguage(crrLang === "en" ? "es" : "en")}
        content="Change Language"
      />
    </div>
  );
}

export default I18nTask;
