let body = document.body;

let btn = document.getElementById('btn');

document.getElementById('btn').onclick = function () {

    btn.remove();

    let input2 = document.createElement("input");
    input2.type = "text";
    input2.className = "input2";
    input2.style.display = "block";
    input2.placeholder = "Color in HEX";
    body.insertBefore(input2, body.firstChild);

    let input1 = document.createElement('input');
    input1.type = "text";
    input1.className = "input1";
    input1.style.display = "block";
    input1.placeholder = "Radius in px";
    // input1.setAttribute('value', '123');
    body.insertBefore(input1, body.firstChild);
    // console.log(input1.getAttribute('value'));
    // console.log(input1.value);

    let butt = document.createElement('button');
    butt.className = 'butt';
    butt.innerHTML = "Нарисовать";
    body.appendChild(butt);

    butt.onclick = function () {

        let input1 = document.getElementsByTagName('input')[0];
        let input2 = document.getElementsByTagName('input')[1];

        // console.log(input1.value);
        // console.dir(input1.value);

        let radius = +input1.value;
        let cirColor = input2.value;

        let circle = document.createElement('div');
        circle.style.width = `${2*radius}px`;
        circle.style.height = `${2*radius}px`;
        circle.style.borderRadius = "50%";
        circle.style.position = "absolute";
        circle.style.left = "50%";
        circle.style.top = "50%";
        circle.style.transform = "translate(-50%, -50%)";
        circle.style.backgroundColor = `${cirColor}`;
        document.body.appendChild(circle);

    };

};


