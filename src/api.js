export const getTranslation = async (word) => {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|tr`
    );
    const data = await response.json();
    return data.responseData.translatedText || "Çeviri yok";
  } catch (error) {
    return "Çeviri başarısız";
  }
};
