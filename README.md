Pet-проект "React Native Navigation Expo"

Проект представляет собой мобильное приложение на React Native с использованием библиотеки React Navigation Expo. Приложение содержит 3 экрана: Sign In, Sign Up и Profile, которые используют типизацию с помощью TypeScript. В качестве хранилища используется SQLite.

Установка и запуск

Клонируйте репозиторий с помощью команды git clone https://github.com/antonhayabysa/Pet-React-Native-Navigation-Expo-.git
Установите зависимости с помощью команды npm install
Запустите проект с помощью команды expo start

Экраны

Sign In
Экран авторизации содержит форму для ввода имени пользователя и пароля. При успешной авторизации происходит переход на экран Profile.

Sign Up
Экран регистрации содержит форму для ввода имени пользователя, email, пароля, номера телефона и должности. При успешной регистрации происходит переход на экран Profile.

Profile
Экран профиля содержит информацию о пользователе. Имя пользователя, email и должность отображаются в виде текстовых полей. Также есть кнопка "Выйти", которая возвращает на экран авторизации. 
Ссылка на дизайн: https://www.figma.com/file/2FDJMpyWhFUiAroSnLfhVB/React-Native-task

![LogIn](<img width="376" alt="LogIn" src="https://user-images.githubusercontent.com/83969662/222252670-b861860e-599a-4c1c-8c1f-98f8780c01fd.png">
)
