class TranslationManager {
    translatePage(languageCode, translations) {
        var elementsToTranslate = window.document.getElementsByClassName("translation-manager-property");
        for (var element of elementsToTranslate) {
            var possibleTranslations = translations.base[languageCode];
            var foundTranslation = undefined;

            //validate just content of found element
            if (foundTranslation === undefined) {
                foundTranslation = possibleTranslations[element.innerHTML];
                if (foundTranslation !== undefined) {
                    //translation was found just as inner HTML so it can be just replaced
                    element.innerHTML = foundTranslation;
                    continue;
                }
            }

            //expected value not found, check if this value is present in placeholder
            if (foundTranslation === undefined) {
                foundTranslation = possibleTranslations[element.placeholder];
                //translation was found for placeholder
                if (foundTranslation !== undefined) {
                    //replace the placeholder for found element
                    element.placeholder = foundTranslation;
                    continue;
                }
            }
        }
    }
}