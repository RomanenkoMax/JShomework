let myNum = document.getElementById('1');
// let myFive = document.getElementById('5');
console.log(myNum);
// console.log(myFive);

myNum.onclick = function () {
    first();
};
// myFive.onclick = function () {
//     five();
// };

console.log(myNum);

// console.log(myFive);

function first() {
    let name = 'your name';
    let age = 'your age';

    do {
        age = prompt('Enter your age:', age);

    } while (!isValid(age));

    do {
        name = prompt('Enter your name:', 'your name');

    } while (!isValidName(name));

    if (+age < 19) {
        alert('You are not allowed to visit this website');
    } else if (+age < 23) {
        let des = confirm('Are you sure you want to continue?');
        if (des) {
            alert('Welcome, ' + name);
        } else {
            alert('You are not allowed to visit this website');
        }
    } else {
        alert('Welcome, ' + name);
    }
};


function isValid(age) {

    if (age == null || age.replace(/\d/g, '').length) return false;

    else {
        if (+age > 2 && +age < 100) return true;
    }

    return false;
}

function isValidName(name) {
    if (name == null || name == '' || name == 'your name') return false;

    return true;
}

function isValidNumber(number) {
    function isInteger(number) {
        return (+number ^ 0) === +number;
    }

    if (number == null || number.replace(/\d/g, '').length) return false;

    else {
        if (+number > 1 && isInteger(number)) return true;
    }

    return false;
}

function second() {

    let number = '';

    do {
        number = prompt('Enter number:', 'more then 1 and positive');
    } while (!isValidNumber(number));

    number = +number;

    let arr = new Array(number + 1);

    for (let m = 0; m < arr.length; m++) {
        arr[m] = true;
    }

    for (let i = 2; i * i <= number; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= number; j = j + i) {
                arr[j] = false;
            }
        }
    }
    let res = '';
    arr.forEach(function (value, index) {
        if (value && index != 0) {
            res += index.toString() + ' ';
            // console.log(index);
            // console.log(res);
        }
    });
    alert('Numbers: ' + res);
}

function natNum(num) {
    let arr = new Array(num + 1);

    for (let m = 0; m < arr.length; m++) {
        arr[m] = true;
    }

    for (let i = 2; i * i <= num; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= num; j = j + i) {
                arr[j] = false;
            }
        }
    }
    return arr;
}

function secondForTwo() {
    let numberA = '';
    let numberB = '';
    do {
        numberA = prompt('Enter number A :', 'more then 1 and positive');
    } while (!isValidNumber(numberA));

    do {
        numberB = prompt('Enter number B :', 'more then 1 and positive');
    } while (!isValidNumber(numberB));

    numberA = +numberA;
    numberB = +numberB;

    if (numberB < numberA) {
        let temp = numberA;
        numberA = numberB;
        numberB = temp;
    }

    let arrA = natNum(numberA);
    let arrB = natNum(numberB);
    let res = '';
    // console.log(arrA.toString());
    // console.log(arrB.toString());
    arrB.forEach(function (value, index) {
        if (value && index >= arrA.length - 1) {
            res += index.toString() + ' ';
        }
        // console.log(index);
    })
    alert('Numbers: ' + res);
}

function three() {

    function fact(n) {
        return (n != 1) ? n * fact(n - 1) : 1;
    }

    let n = '';
    do {
        n = prompt('Enter number: ', 'more then 1 and positive');
    } while (!isValidNumber(n))
    alert('Factorial ' + n + ' : ' + fact(+n));
}

function four() {
    let numA = prompt('Enter first number: ');
    let numB = prompt('Enter second number: ');
    let numberFibo = prompt('Enter Fibonacci number:');

    numA = +numA;
    numB = +numB;
    numberFibo = +numberFibo;


    let resultArray = new Array(numberFibo + 2);
    resultArray[0] = numA;
    resultArray[1] = numB;

    for (let i = 2; i < resultArray.length; i++) {
        resultArray[i] = resultArray[i - 1] + resultArray[i - 2];
    }

    alert(resultArray[resultArray.length - 3]);

}

function five() {

    let user = {
        name:
            {
                firstName: "Max",
                lastName: "Romanenko"
            },
        age: 38
    };

    function clone(obj) {

        let clonedObject = {};
        for (let key in obj) {

            if (typeof obj[key] === "object") {

                clonedObject[key] = clone(obj[key]);

            } else {

                clonedObject[key] = obj[key];

            }


        }
        return clonedObject;
    }

    let clonedObject = clone(user);

    user.age = 30;

    alert('Initial object:' + user);
    alert('Cloned object:' + clonedObject);

    console.log("initial object = ");
    console.log(user);
    console.log("cloned object = ");
    console.log(clonedObject);
}

function six() {

    function createNewUser() {

        let user = {};

        Object.defineProperty(user, 'firstName', {configurable: true, writable: false});
        Object.defineProperty(user, 'lastName', {configurable: true, writable: false});

        user.setFirstName = function () {
            let firstName = prompt("input FirstName", "");
            Object.defineProperty(user, "firstName", {value: firstName});
        };
        user.setLastName = function () {
            let lastName = prompt("input lastName", "");
            Object.defineProperty(user, "lastName", {value: lastName});
        };

        user.getLogin = function () {
            return this.firstName.toLowerCase().charAt(0) + user.lastName.toLowerCase();
        };

        user.setFirstName();
        user.setLastName();

        return user;

    }

    newUser = createNewUser();
    console.log(newUser);
    console.log(newUser.getLogin());
}

function seven() {

    function excludeBy(sourceArray, excludedArray, param) {

        let secondVal = excludedArray.map(function (item) {
            return item[param];
        });

        return sourceArray.filter(function (item) {
            return secondVal.indexOf(item[param]) === -1;
        })


    }

    let source = [{
        brand: 'BMV',
        model: "525",
        year: 2001,
    },
        {
            brand: 'Seat',
            model: "Leon",
            year: 2010,
        }];
    let excl = [{
        brand: 'BMV',
        model: "525",
        year: 2001,
    }];

    console.log(excludeBy(source, excl, 'model'));
    alert('See result at console.');
}

function eight() {

}

function nine() {

    let dateOfBorn = new Date(+prompt('Your year of born: ', '1990'), +prompt('month of born: ', '1') - 1, +prompt('day of born: ', '1'));

    let now = new Date();

    let years = now.getFullYear() - dateOfBorn.getFullYear();

    if (now.getMonth() < dateOfBorn.getMonth() || (now.getMonth() === dateOfBorn.getMonth() && now.getDate() < dateOfBorn.getDate())) {
        years--;
    }

    alert(`You got ${years} years.`);

    function getZodiak(userDate) {

        let zodiakArray = [
            {name: "Козерог", day: 20},
            {name: "Водолей", day: 19},
            {name: "Рыбы", day: 21},
            {name: "Овен", day: 20},
            {name: "Телец", day: 21},
            {name: "Близнецы", day: 21},
            {name: "Рак", day: 23},
            {name: "Лев", day: 23},
            {name: "Дева", day: 23},
            {name: "Весы", day: 23},
            {name: "Скорпион", day: 22},
            {name: "Стрелец", day: 22}
            ];

        let zodiak = '';
        console.log(userDate.getMonth());
        let month = userDate.getMonth();
        console.log(month);
        let date = userDate.getDate();
        console.log(date);
        console.log(zodiakArray[month].day);


        if (zodiakArray[month].day > date) {

           zodiak = zodiakArray[month].name;

        } else {

            if (month < 11) {
                zodiak = zodiakArray[month + 1].name;
                console.log(zodiak);
            } else {
                zodiak = zodiakArray[0].name;
            }
        }

        return zodiak;
    }

    alert('Ваш знак зодиака : ' + getZodiak(dateOfBorn));

}
function ten() {

}

function eleven() {

    let numOfListElem = +prompt('Enter number of list elements: ', '5');

    let arr = [];

    for (let i = 0; i < numOfListElem; i++){
        arr[i] = prompt(`${i} list element text:`, `${i+1}`);
    }

    let fragment = document.createDocumentFragment();

    let ul = document.createElement('ul');

    arr.map(function (value) {

        let li = document.createElement('li');
        li.innerText = value;
        ul.appendChild(li);

    });

    fragment.append(ul);

    let list = document.getElementById('list');

    list.appendChild(fragment);

    function setUnvisible() {
        list.style.display = "none";
    }

    let divTimer = document.getElementsByClassName('countdown')[0];
    let count = 10;

    let timer = setInterval(function () {

        divTimer.innerHTML = `All will disappeared in : ${count} seconds`;

        count--;

        if (count < -1){
            clearInterval(timer);
            divTimer.innerHTML = '';
            setUnvisible();
        }

    }, 1000);

}