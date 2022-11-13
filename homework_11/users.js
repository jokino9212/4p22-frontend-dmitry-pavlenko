'use strict';

// Пункт 1 Получить данные всех пользователей из https://reqres.in/api/users?per_page=12
console.log('-----------');
console.log('Пункт №1:')

fetch("https://reqres.in/api/users?per_page=12")
    .then((response) => {
        response.json()
            .then((users) => {


// Пункт 2 Вывести в консоль фамилии всех пользователей в цикле
                console.log('-----------');
                console.log('Пункт №2:')
                console.log('-----------');

                for (let user of users.data) {
                    console.log(user.last_name)
                }
// Пункт 3 Вывести все данные всех пользователей, фамилия которых начинается на F
                console.log('-----------');
                console.log('Пункт №3:')
                console.log('-----------');

                users.data.filter(item => item.last_name.startsWith('F'))
                    .forEach(element => {
                        console.log(element)
                    });
// Пункт 4 Вывести следующее предложение: Наша база содержит данные следующих пользователей: и далее в этой же строке через запятую имена и фамилии всех пользователей. Использовать метод reduce
                console.log('-----------');
                console.log('Пункт №4:')
                console.log('-----------');

                const usersStr = users.data.reduce((acc, user) => {
                    acc.push(' ' + user.first_name + ' ' + user.last_name);
                    return acc;
                }, []);

                console.log('Наша база содержит данные следующих пользователей:' + usersStr);

// Пункт 5 Вывести названия всех ключей в объекте пользователя.
                console.log('-----------');
                console.log('Пункт №5:')
                console.log('-----------');

                
                    console.log(Object.keys(users.data[0]))

            });
    })
    .catch((e) => {
        console.log(e);
    });


