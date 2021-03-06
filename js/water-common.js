// Underwater world by Maksim K.
// brhumaan@gmail.com

// UI
let preloaderStatus = true;
let hideUi = false;

// Variables
const waterColors = [
    // '#B1E5EF',
    // '#C9E7ED',
    // '#C7EAE5',
    // '#C5E5D5',
    // '#D4EFF4',
    // '#D1EDD0',
    // '#C9CCE5',
    // '#1E5799',
    // '#2256AA',
    // '#2845B7',
    '#2B52C6',
    '#2F58D6',
    '#37A0FC',
    '#092e34',
    '#092634',
    '#092034',
    '#091234',
    '#093429',
    '#092a34',
];

// Fish
const fishNumber = 30;
const fishArr = [
    // way to image; fish medium size
    ['img/fish-1.png', 100],
    ['img/fish-2.png', 70],
    ['img/fish-3.png', 110],
    ['img/fish-4.png', 80],
    ['img/fish-5.png', 90],
    ['img/fish-6.png', 100],
    ['img/fish-7.png', 100],
    ['img/fish-8.png', 100],
    ['img/fish-9.png', 100],
    ['img/fish-10.png', 100],
    ['img/fish-swarm-1.png', 400],
    ['img/fish-swarm-2.png', 400],
    ['img/fish-swarm-3.png', 400],
    ['img/fish-swarm-4.png', 400],
    ['img/medusa-1.png', 100],
];

// Bubbles
const bubbleArr = [
    // ['img/bubbles-1.png', 70],
    // ['img/bubbles-2.png', 120],
    // ['img/bubbles-3.png', 120],
    // ['img/bubbles-4.png', 50],
    ['img/bubbles-5.png', 50],
    ['img/bubbles-6.png', 90],
    // ['img/bubbles-7.png', 140],
    // ['img/bubbles-8.png', 140],
    // ['img/bubbles-9.png', 100],
    // ['img/bubbles-10.png', 90],
];


// Seaweed
const seaWeedNumbers = 400;
const seaWeedArr = [
    // Image, Size, maximum level layout
    ['img/seaweed-1.png', 40],
    ['img/seaweed-2.png', 100],
    ['img/seaweed-3.png', 100],
    ['img/seaweed-4.png', 50],
    // ['img/seaweed-5.png', 10],
    ['img/seaweed-6.png', 60],
    ['img/seaweed-7.png', 60],
    // ['img/seaweed-8.png', 40],
    ['img/seaweed-9.png', 50],
    // ['img/rocks-1.png', 250, 3],
];


function randomNumber(min, max) {
    const rand = min + Math.floor(Math.random() * (max + 1 - min));
    return rand;
}

function preloader() {
    $('.preloader').fadeIn(200);

    setTimeout(() => {
        $('.preloader').fadeOut(400);
    }, 600);
}

function clearApp() {
    return $('.content-wrap').children().remove();
}

function convertHex(hexInc, opacity) {
    const hex = hexInc.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const result = `rgba( ${r},${g},${b},${opacity / 100})`;
    return result;
}


function createWater() {
    const waterColor1 = waterColors[randomNumber(0, waterColors.length - 1)];
    $('.water-1').css({
        background: `linear-gradient(${
            convertHex(waterColor1, randomNumber(30, 40))} 0% , ${
            convertHex(waterColor1, randomNumber(60, 70))} 20% , ${
            convertHex(waterColor1, randomNumber(70, 99))} 50% , ${
            convertHex(waterColor1, randomNumber(20, 30))} 80% , ${
            convertHex(waterColor1, randomNumber(10, 20))}100%`,
        opacity: '1',
    });

    const waterColor2 = waterColors[randomNumber(0, waterColors.length - 1)];
    $('.water-2').css({
        background: `linear-gradient(to bottom,${
            convertHex(waterColor2, randomNumber(10, 20))} 0% , ${
            convertHex(waterColor2, randomNumber(20, 30))} 20% , ${
            convertHex(waterColor2, randomNumber(50, 70))} 50% , ${
            convertHex(waterColor2, randomNumber(40, 60))} 80% , ${
            convertHex(waterColor2, randomNumber(30, 50))}100%`,
        opacity: '1',
    });

    const waterColor3 = waterColors[randomNumber(0, waterColors.length - 1)];
    $('.water-3').css({
        background: `linear-gradient(to bottom,${
            convertHex(waterColor3, randomNumber(10, 20))} 0% , ${
            convertHex(waterColor3, randomNumber(30, 50))} 20% , ${
            convertHex(waterColor3, randomNumber(60, 70))} 50% , ${
            convertHex(waterColor3, randomNumber(50, 70))} 80% , ${
            convertHex(waterColor3, randomNumber(40, 60))}100%`,
        opacity: '1',
    });

    const waterColor4 = waterColors[randomNumber(0, waterColors.length - 1)];
    $('.water-4').css({
        background: `linear-gradient(to bottom,${
            convertHex(waterColor4, randomNumber(10, 20))} 0% , ${
            convertHex(waterColor4, randomNumber(50, 50))} 20% , ${
            convertHex(waterColor4, randomNumber(60, 70))} 50% , ${
            convertHex(waterColor4, randomNumber(30, 60))} 80% , ${
            convertHex(waterColor4, randomNumber(10, 40))}100%`,
        opacity: '1',
    });

    const waterColor5 = waterColors[randomNumber(0, waterColors.length - 1)];
    $('.water-5').css({
        background: `linear-gradient(to bottom,${
            convertHex(waterColor5, randomNumber(2, 10))} 0% , ${
            convertHex(waterColor5, randomNumber(2, 10))} 50% , ${
            convertHex(waterColor5, randomNumber(2, 40))}100%`,
        opacity: '1',
    });
}

function createFish() {
    // Go to every content-wrap
    for (let i = 1; i < 5; i += 1) {
        const classFocus = `.content-${i}`; // class target
        let fishImage;
        let fishSize;
        let howManyFishToLayer;

        // .content-1
        if (i === 1) {
            fishSize = fishArr[i][1] / 5;
            howManyFishToLayer = fishNumber;
        } else if (i === 2) {
            fishSize = fishArr[i][1] / 2;
            howManyFishToLayer = fishNumber / randomNumber(1, 5);
        } else if (i === 3) {
            fishSize = fishArr[i][1] * 1.3;
            howManyFishToLayer = fishNumber / randomNumber(5, 8);
        } else if (i === 4) {
            fishSize = fishArr[i][1] * 2.5;
            howManyFishToLayer = randomNumber(1, 4);
        }

        // Create fish
        for (let y = 0; y < howManyFishToLayer; y += 1) {
            // eslint-disable-next-line prefer-destructuring
            fishImage = fishArr[randomNumber(0, fishArr.length - 1)][0];

            fishSize = fishSize * randomNumber(80, 100) / randomNumber(80, 100);

            $('<div>', {
                class: 'fish',
                css: {
                    width: fishSize,
                    height: fishSize,
                    left: `${randomNumber(-5, 95)}%`,
                    top: `${randomNumber(-5, 75)}%`,
                    opacity: '1',
                    backgroundImage: `url(${fishImage})`,
                    transform: `rotate(${randomNumber(-15, 15)}deg)`,
                },
            }).appendTo(classFocus);
        }
    }
}


function createBubbles() {
    // Go to every content-wrap
    for (let i = 1; i < 5; i += 1) {
        const classFocus = `.content-${i}`; // class target
        let bubbleImage;
        let bubbleSize;
        let howManyFishToLayer;

        // .content-1,2,3,4
        if (i === 1) {
            bubbleSize = fishArr[i][1] / 6;
            howManyFishToLayer = fishNumber;
        } else if (i === 2) {
            bubbleSize = fishArr[i][1] / 4;
            howManyFishToLayer = fishNumber / randomNumber(1, 5);
        } else if (i === 3) {
            bubbleSize = fishArr[i][1] / 3;
            howManyFishToLayer = fishNumber / randomNumber(5, 8);
        } else if (i === 4) {
            bubbleSize = fishArr[i][1] * 2.5;
            howManyFishToLayer = randomNumber(0, 3);
        }

        // Create fish
        for (let y = 0; y < howManyFishToLayer; y += 1) {
            // eslint-disable-next-line prefer-destructuring
            bubbleImage = bubbleArr[randomNumber(0, bubbleArr.length - 1)][0];


            $('<div>', {
                class: 'bubble',
                css: {
                    width: bubbleSize,
                    height: bubbleSize,
                    left: `${randomNumber(-5, 95)}%`,
                    top: `${randomNumber(-5, 75)}%`,
                    opacity: '1',
                    backgroundImage: `url(${bubbleImage})`,
                    transform: `rotate(${randomNumber(-90, 90)}deg)`,
                },
            }).appendTo(classFocus);
        }
    }
}


function createBottom() {
    // Go to every content-wrap
    for (let i = 1; i < 5; i += 1) {
        const classFocus = `.content-${i}`; // class target
        let seaWeedImage;
        let seaWeedSize;
        let weedNumber;

        // .content-1
        if (i === 1) {
            seaWeedSize = randomNumber(1.0, 1.5);
            weedNumber = seaWeedNumbers * 4;
        } else if (i === 2) {
            seaWeedSize = randomNumber(1.5, 2);
            weedNumber = seaWeedNumbers * 3;
        } else if (i === 3) {
            seaWeedSize = randomNumber(2, 5);
            weedNumber = seaWeedNumbers * 1.5;
        } else if (i === 4) {
            seaWeedSize = randomNumber(4, 8);
            weedNumber = seaWeedNumbers / randomNumber(4, 8);
        }

        // Create bottom item
        for (let y = 0; y < weedNumber; y += 1) {
            // eslint-disable-next-line prefer-destructuring
            seaWeedImage = seaWeedArr[randomNumber(0, seaWeedArr.length - 1)][0];

            $('<div>', {
                class: 'bottom-item',
                css: {
                    // "transform": "rotate(" + randomNumber(0,180) +")",
                    width: randomNumber(20, 40) * seaWeedSize,
                    height: randomNumber(20, 40) * seaWeedSize,
                    left: `${randomNumber(-25, 105)}%`,
                    top: `${randomNumber(72, 105)}%`,
                    opacity: '1',
                    backgroundImage: `url(${seaWeedImage})`,
                    transform: `rotate(${randomNumber(-15, 15)}deg)`,
                },
            }).appendTo(classFocus);
        }
    }
}


function worldGenetarors() {
    createWater();
    createFish();
    createBubbles();
    createBottom();
}


function nextWorld() {
    console.log('nextworld()');
    // If preloader status true
    if (preloaderStatus) {
        preloader();
        setTimeout(() => {
            clearApp();
            worldGenetarors();
        }, 400);
    } else {
        clearApp();
        worldGenetarors();
    }
}


$('#ui-preloader-checkbox').click(() => {
    if (document.getElementById('ui-preloader-checkbox').checked) {
        preloaderStatus = true;
    } else {
        preloaderStatus = false;
    }
});


// Start by enter
$(document).keypress((e) => {
    if (e.which === 13) {
        nextWorld();
    }
});

// Settings modal
$('.settings-button, .settings-modal .close').click(() => {
    $('.settings-modal').toggleClass('on');
});


// Author modal
$('.information-button, .information-modal .close').click(() => {
    $('.information-modal').toggleClass('on');
});

// "U -toggle ui
$(document).keypress((e) => {
    if (e.which === 85 || e.which === 117 || e.which === 1075 || e.which === 1043) {
        $('#ui-hide-checkbox').click();
    }
});

// "S" - keypress settings
$(document).keypress((e) => {
    if (e.which === 115 || e.which === 83 || e.which === 1099 || e.which === 1067) {
        console.log('Settings');
        $('.settings-modal').toggleClass('on');
    }
});

// "I" - keypress information
$(document).keypress((e) => {
    if (e.which === 105 || e.which === 73 || e.which === 1064 || e.which === 1096) {
        console.log('Info');
        $('.information-modal').toggleClass('on');
    }
});

// Hide checkbox
$('#ui-hide-checkbox').click(() => {
    console.log('UI toggle');
    if (hideUi === false) {
        hideUi = true;
        $('.app-wrapper').addClass('hide-ui');
    } else {
        hideUi = false;
        $('.app-wrapper').removeClass('hide-ui');
    }
});


// First app start
preloader();
nextWorld();

$('.next-world-button').click(() => {
    nextWorld();
});
