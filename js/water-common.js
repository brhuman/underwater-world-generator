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
    // ['img/fish-7.png', 100],
    ['img/fish-8.png', 100],
    ['img/fish-9.png', 100],
    ['img/fish-10.png', 100],
    ['img/fish-swarm-1.png', 300],
    ['img/fish-swarm-2.png', 300],
    ['img/fish-swarm-3.png', 300],
    ['img/fish-swarm-4.png', 300],
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
    // createBottom();
    // createContentObjects()
}



function createWater() {
    $(".water-1").css({
        "background": 'linear-gradient(' + waterColors[randomNumber(0, waterColors.length - 1)] + ' , ' + waterColors[randomNumber(0, waterColors.length - 1)],
        'opacity': '1',
    })
    $(".water-2").css({
        "background": 'linear-gradient(to bottom,' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(10, 50)) + ' 0% , ' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(50, 90)) + '100%',
        'opacity': '1',
    })
    $(".water-3").css({
        "background": 'linear-gradient(to bottom,' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(10, 30)) + ' 0% , ' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(30, 60)) + '100%',
        'opacity': '1',
    })
    $(".water-4").css({
        "background": 'linear-gradient(to bottom,' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(10, 20)) + ' 0% , ' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(20, 50)) + '100%',
        'opacity': '1',
    })
    // $(".water-5").css({
    //     "background": 'linear-gradient(' + waterColors[randomNumber(0, waterColors.length - 1)] + ' , ' + waterColors[randomNumber(0, waterColors.length - 1)],
    //     'opacity': '0.0' + randomNumber(0,9),
    // })
    $(".water-5").css({
        "background": 'linear-gradient(to bottom,' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(0,5)) + ' 0% , ' + convertHex(waterColors[randomNumber(0, waterColors.length - 1)], randomNumber(10,30)) + '100%',
        'opacity': '1',
    })
}

function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
}


convertHex(waterColors[randomNumber(0, waterColors.length - 1)], 50);

// background: linear - gradient(to bottom, rgba(30, 87, 153, 0) 0 %, rgba(125, 185, 232, 1) 100 %); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */


/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,7db9e8+100&0+0,1+100 */
// background: -moz - linear - gradient(top, rgba(30, 87, 153, 0) 0 %, rgba(125, 185, 232, 1) 100 %); /* FF3.6-15 */
// background: -webkit - linear - gradient(top, rgba(30, 87, 153, 0) 0 %, rgba(125, 185, 232, 1) 100 %); /* Chrome10-25,Safari5.1-6 */
// background: linear - gradient(to bottom, rgba(30, 87, 153, 0) 0 %, rgba(125, 185, 232, 1) 100 %); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
// filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#001e5799', endColorstr = '#7db9e8', GradientType = 0); /* IE6-9 */



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
                    // "transform": "rotate(" + fishDirection + ")",
                    "transform": fishDirection,
                    "width": fishSize,
                    "height": fishSize,
                    "left": randomNumber(-5, 95) + "%",
                    "top": randomNumber(-5, 75) + "%",
                    "opacity": '1',
                    "backgroundImage": "url(" + fishImage + ")",
                    "transform": "translate: += 10px"
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
