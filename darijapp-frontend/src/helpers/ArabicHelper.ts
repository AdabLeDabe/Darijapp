export function removeArabicShortVowels(text: string): string {
    return text.replace(/[ًٌٍَُِْ]/g, "");
}