// Underwater world by Maksim K.
// brhumaan@gmail.com

// Variables
var waterColors =[
    '#B1E5EF',
    '#C9E7ED',
    '#C7EAE5',
    '#C5E5D5',
    '#D4EFF4',
    '#D1EDD0',
    '#C9CCE5',
    '#1E5799',
    '#2256AA',
    '#2845B7',
    '#2B52C6',
    '#2F58D6',
    '#37A0FC',
]

// Fish
var fishNumber = 30;
var fishArr = [
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
    ['img/fish-swarm-1.png', 300],
    ['img/fish-swarm-2.png', 300],
    ['img/fish-swarm-3.png', 300],
    ['img/fish-swarm-4.png', 300],
    ['img/medusa-1.png', 100],
]

// Bubbles
var bubblesNumber = 30;
var bubbleArr = [
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
]


// Seaweed
var seaWeedNumbers = 200;
var seaWeedArr = [
    // Image, Size, maximum level layout
    ['img/seaweed-1.png', 10],
    ['img/seaweed-2.png', 100],
    ['img/seaweed-3.png', 100],
    ['img/seaweed-4.png', 50],
    // ['img/seaweed-5.png', 10],
    ['img/seaweed-6.png', 60],
    ['img/seaweed-7.png', 60],
    ['img/seaweed-8.png', 40],
    ['img/seaweed-9.png', 50],
    // ['img/rocks-1.png', 250, 3],
]


// First app start
nextWorld();


function nextWorld(){
    clearApp()
    worldGenetarors()
}


function worldGenetarors(){
    createWater();
    createFish();
    createBubbles();
    createBottom();
    // createContentObjects()
}



function createWater() {
    $(".water-1").css({
        "background": 'linear-gradient(' + waterColors[randomNumber(0, waterColors.length - 1)] + ' , ' + waterColors[randomNumber(0, waterColors.length - 1)],
        'opacity': '1',
    })
    $(".water-2").css({
        "background": 'linear-gradient(to bottom,' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(20, 30)) + ' 0% , ' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(30, 50)) + '100%',
        'opacity': '1'
    })
    $(".water-3").css({
        "background": 'linear-gradient(to bottom,' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(30, 40)) + ' 0% , ' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(40, 50)) + '100%',
        'opacity': '1',
    })
    $(".water-4").css({
        "background": 'linear-gradient(to bottom,' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(20, 30)) + ' 0% , ' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(50, 60)) + '100%',
        'opacity': '1',
    })
    $(".water-5").css({
        "background": 'linear-gradient(to bottom,' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(0,5)) + ' 0% , ' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(10,30)) + '100%',
        'opacity': '1',
    })
}





function createFish(){
    // Go to every content-wrap
    for(var i=1; i<5; i++) {
        var classFocus = '.content-' + i; // class target
        var fishImage;
        var fishDirection;
        var fishSize;

        // .content-1
        if (i == 1) { 
            fishSize = fishArr[i][1] / 6; 
            howManyFishToLayer = fishNumber;
        }
        // .content-2
        else if (i == 2) { 
            fishSize = fishArr[i][1] / 4;
            howManyFishToLayer = fishNumber / randomNumber(1,5); 
        }
        // .content-3
        else if (i == 3) { 
            fishSize = fishArr[i][1];
            howManyFishToLayer = fishNumber / randomNumber(5,8); 
        }
        // .content-4
        else if (i == 4) {
            fishSize = fishArr[i][1] * 2.5; 
            howManyFishToLayer = randomNumber(0,3);
        }

        // Create fish
        for (var y = 0; y < howManyFishToLayer; y++) {

            fishImage = fishArr[randomNumber(0,fishArr.length-1)][0];
            
            if(randomNumber(0,1)){
                // to left
                fishDirection = 'scale(1,1)';
            } else {
                // to right
                fishDirection = 'scale(-1,1)';
            }

            
            $("<div>", {
                'class': "fish",
                css: {
                    "transform": "rotate(" + fishDirection + ")",
                    // "transform": "rotate(" + randomNumber(0,180) +")",
                    "width": fishSize,
                    "height": fishSize,
                    "left": randomNumber(-5, 95) + "%",
                    "top": randomNumber(-5, 75) + "%",
                    "opacity": '1',
                    "backgroundImage": "url(" + fishImage + ")",
                    "transform": "rotate(" + randomNumber(-15,15) + "deg)"
                }
            }).appendTo(classFocus);
        }
    }
}


function createBubbles() {
    // Go to every content-wrap
    for (var i = 1; i < 5; i++) {
        var classFocus = '.content-' + i; // class target
        var bubbleImage;
        var bubbleSize;

        // .content-1
        if (i == 1) {
            bubbleSize = fishArr[i][1] / 6;
            howManyFishToLayer = fishNumber;
        }
        // .content-2
        else if (i == 2) {
            bubbleSize = fishArr[i][1] / 4;
            howManyFishToLayer = fishNumber / randomNumber(1, 5);
        }
        // .content-3
        else if (i == 3) {
            bubbleSize = fishArr[i][1];
            howManyFishToLayer = fishNumber / randomNumber(5, 8);
        }
        // .content-4
        else if (i == 4) {
            bubbleSize = fishArr[i][1] * 2.5;
            howManyFishToLayer = randomNumber(0, 3);
        }

        // Create fish
        for (var y = 0; y < howManyFishToLayer; y++) {
            
            bubbleImage = bubbleArr[randomNumber(0, bubbleArr.length - 1)][0];

            if (randomNumber(0, 1)) {
                // to left
                fishDirection = 'scale(1,1)';
            } else {
                // to right
                fishDirection = 'scale(-1,1)';
            }


            $("<div>", {
                'class': "bubble",
                css: {
                    "width": bubbleSize,
                    "height": bubbleSize,
                    "left": randomNumber(-5, 95) + "%",
                    "top": randomNumber(-5, 75) + "%",
                    "opacity": '1',
                    "backgroundImage": "url(" + bubbleImage + ")",
                    "transform": "rotate(" + randomNumber(-90, 90) + "deg)"
                }
            }).appendTo(classFocus);
        }
    }
}


function createBottom() {
    // Go to every content-wrap
    for (var i = 1; i < 5; i++) {
        var classFocus = '.content-' + i; // class target
        var seaWeedImage;
        var seaweedDirection;
        var seaWeedSize;
        var weedNumber;
        var topPadding;

        // .content-1
        if (i == 1) {
            seaWeedSize = seaWeedArr[i][1] / 2;
            weedNumber = seaWeedNumbers * 4;
            topPadding = randomNumber(73, 98);
        }
        // .content-2
        else if (i == 2) {
            seaWeedSize = seaWeedArr[i][1];
            weedNumber = seaWeedNumbers * 3;
            topPadding = randomNumber(73, 98);
        }
        // .content-3
        else if (i == 3) {
            seaWeedSize = seaWeedArr[i][1] * 2;
            weedNumber = seaWeedNumbers * 1.5;
            topPadding = randomNumber(73, 98);
        }
        // .content-4
        else if (i == 4) {
            seaWeedSize = seaWeedArr[i][1] * 
            5;
            weedNumber = seaWeedNumbers / randomNumber(4, 8);
            // topPadding = randomNumber(53, 98);
        }

        // Create fish
        for (var y = 0; y < weedNumber; y++) {

            seaWeedImage = seaWeedArr[randomNumber(0, seaWeedArr.length - 1)][0];

            if (randomNumber(0, 1)) {
                // to left
                fishDirection = 'scale(1,1)';
            } else {
                // to right
                fishDirection = 'scale(-1,1)';
            }

            
            $("<div>", {
                'class': "bottom-item",
                css: {
                    "transform": "rotate(" + fishDirection + ")",
                    // "transform": "rotate(" + randomNumber(0,180) +")",
                    "width": seaWeedSize,
                    "height": seaWeedSize,
                    "left": randomNumber(-5, 95) + "%",
                    "top": topPadding  + "%",
                    "opacity": '1',
                    "backgroundImage": "url(" + seaWeedImage + ")",
                    "transform": "rotate(" + randomNumber(-15, 15) + "deg)"
                }
            }).appendTo(classFocus);
        }
    }
}


// Clear app from all childrens
function clearApp() {
    return $(".content-wrap").children().remove();
} 



// UI
// Start by enter
$(document).keypress(function (e) {
    if (e.which == 13) {
        nextWorld();
    }
});

// Toogle settings by space
// $(document).keypress(function (e) {
//     if (e.which == 32) {
//         $(".ui-button-toggle").click();
//     }
// });


// Random number
function randomNumber(min, max) {
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    return rand;
}

function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
}

