let gameStart = false;
let sCount = 0;
let lCount = 0;
let counter = 0;
let isKeyPress = false;
confetti = new ConfettiGenerator({ target: 's' });
const h1 = document.getElementById('screen-msg');
const duration = document.getElementById('duration');
const button1 = document.getElementById('start');
const winner = (sCount, lCount) => {
    if (sCount > lCount) {
        document.getElementById('msg-s').innerHTML = `Winner`;
        confetti = new ConfettiGenerator({ target: 's' });
        confetti.render();
    }
    else if (lCount > sCount) {
        document.getElementById('msg-l').innerHTML = `Winner`;
        confetti = new ConfettiGenerator({ target: 'l' });
        confetti.render();
    }
    else {
        document.getElementById('msg-s').innerHTML = `draw`;
        document.getElementById('msg-l').innerHTML = `draw`;

    }
}


button1.addEventListener('click', countDown => {
    confetti.clear();
    let duration1 = parseInt(duration.value);
    counter = duration1 - 1;
    if (isNaN(counter)) {
        document.getElementById('error').innerHTML = 'Please Enter Valid Duration';
        h1.innerHTML = 'Game Yet To Start';
        document.getElementById('counter').innerHTML = '';
        sCount = 0;
        lCount = 0;
        document.getElementById('msg-s').innerHTML = '';
        document.getElementById('msg-l').innerHTML = '';
        document.getElementById('s-id').innerHTML = sCount;
        document.getElementById('l-id').innerHTML = lCount;

    }
    else {
        sCount = 0;
        lCount = 0;
        gameStart = true;
        document.getElementById('error').innerHTML = '';
        document.getElementById('msg-s').innerHTML = '';
        document.getElementById('msg-l').innerHTML = '';
        document.getElementById('s-id').innerHTML = sCount;
        document.getElementById('l-id').innerHTML = lCount;
        h1.innerHTML = 'Game is Going On';
        const interVal = setInterval(() => {
            document.getElementById('counter').innerHTML = `Time left ${counter} `;//extra feature
            counter--;
        }, 1000)
        setTimeout(gameEnd => {
            duration.value = '';
            clearInterval(interVal);
            gameStart = false;
            if ((sCount === 0 && lCount === 0) && !isKeyPress) {
                document.getElementById('error').innerHTML = 'No Keypress Happened and Time Out!';
                document.getElementById('counter').innerHTML = '';
                document.getElementById('msg-s').innerHTML = `No Score`;
                document.getElementById('msg-l').innerHTML = `No score`;
                document.getElementById('s-id').innerHTML = '';
                document.getElementById('l-id').innerHTML = '';
            }
            isKeyPress = false;
            h1.innerHTML = 'Game Over';
            winner(sCount, lCount);
        }, duration1 * 1000);


    }
});
document.addEventListener('keypress', (e) => {
    if (!gameStart && (e.code === 'KeyS' || e.code === 'KeyL')) {
        document.getElementById('error').innerHTML = 'Don\'t press key \'s\' or key \'l\' as game hasn\'t started yet';
        document.getElementById('counter').innerHTML = '';
    }
    if (gameStart) {
        if (e.code === 'KeyS') {
            isKeyPress = true;
            document.getElementById('error').innerHTML = '';
            ++sCount;
            document.getElementById('s-id').innerHTML = sCount;
        }
        else if (e.code === 'KeyL') {
            isKeyPress = true;
            document.getElementById('error').innerHTML = '';
            ++lCount;
            document.getElementById('l-id').innerHTML = lCount;
        }
        else {
            document.getElementById('error').innerHTML = 'Please Enter Valid Key';

        }
    }

});