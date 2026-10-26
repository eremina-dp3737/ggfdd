let CompScore = 0;
let UserScore = 0;
while (true) {
    const CompNumder = Math.floor(Math.random() * 5) + 1;
    const UserNumber = prompt("Напиши число от 1 до 5");
    if (UserNumber == CompNumder) {
        UserScore += 1
        alert("Ты победил")
    }
    else if (UserNumber < CompNumder || UserNumber > CompNumder)
    {
        CompScore += 1
        alert(`Компьютер победил: счет ${CompScore}`);
    }
    else if (UserNumber == "изменить") {
        const userRandomNumber = +prompt("До какого числа загадать?")
        while (true) {
            const CompNumber2 = Math.floor(Math.random() * userRandomNumber) + 1;
            const UserNumber2 = +prompt(`Загадай число от 1 до ${userRandomNumber}`);
            if (UserNumber2 == CompNumber2) {
                UserScore += 1
                alert("Ты победил")
            }
            else if (UserNumber2 < CompNumber2 || UserNumber2 > CompNumber2) {
                CompScore += 1
                alert(`Компьютер победил: счет ${CompScore}`);
            }
            else {
                alert("Ошибка")
                continue
            }
            if (CompScore == 10){
                alert("Ты проиграл, больше попыток нет")
                break
            }
        
        }
    }
    else {
        alert("Ошибка")
        continue
    }
    if (CompScore == 10){
        alert("Ты проиграл, больше попыток нет")
        break
    }
}
