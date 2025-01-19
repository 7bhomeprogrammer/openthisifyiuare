// Список допустимых имен (добавь своё имя в список)
const allowedNames = ["Dilfuza", "dilfuza", "DILFUZA", "Дилфуза", "дилфуза", "ДИЛФУЗА", "Azatbek,","Адема","adema","Adema"]

// Событие при нажатии кнопки
document.getElementById("submit-btn").addEventListener("click", () => {
    const inputName = document.getElementById("name").value.trim(); // Убираем пробелы
    if (allowedNames.includes(inputName)) {
        // Если имя допустимо
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("message-container").style.display = "block";
    } else {
        // Если имя неверное
        document.getElementById("error-message").style.display = "block";
    }
});