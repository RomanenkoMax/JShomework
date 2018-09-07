let body = document.body;
let btn = document.getElementById('btn');

document.getElementById('btn').onclick = function () {

    btn.remove();

    let input1 = document.createElement('input');
    input1.type = "text";
    input1.className = "input1";
    input1.style.display = "block";
    input1.placeholder = "Radius in px";
    body.insertBefore(input1, body.firstChild);

    let butt = document.createElement('button');
    butt.className = 'butt';
    butt.innerHTML = "Нарисовать";
    body.appendChild(butt);

    butt.onclick = function () {

        for (let i = 0; i < 10; i++) {
            let circle = document.createElement('div');
            circle.style.width = "20px";
            circle.style.height = "20px";
            circle.style.borderRadius = "50%";
            circle.style.position = "absolute";
            circle.style.left = `${Math.random()*100}%`;
            circle.style.top = `${Math.random()*100}%`;
            circle.style.transform = "translate(-50%, -50%)";
            circle.style.backgroundColor = "#111fff";
            circle.setAttribute('circle', 'true');
            document.body.appendChild(circle);
        }
    };

    document.onclick = function (event) {
        let target = event.target;

        let valAtr = target.getAttribute('circle');

        if (!valAtr) return;

        target.setAttribute('hidden', 'true');

    }

};
