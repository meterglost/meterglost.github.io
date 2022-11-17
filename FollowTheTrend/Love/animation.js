import { heart } from './heart.js'


const onScreenCanvas = document.querySelector('canvas');
const onScreenContext = onScreenCanvas.getContext('2d');
onScreenCanvas.width = window.innerWidth;
onScreenCanvas.height = window.innerHeight;
onScreenCanvas.center = {};
onScreenCanvas.center.x = onScreenCanvas.width / 2;
onScreenCanvas.center.y = onScreenCanvas.height / 2;


let largeHeart, mediumHeart;
if (onScreenCanvas.width < 640 || onScreenCanvas.height < 640) {
    largeHeart = new heart(onScreenCanvas.center, 300, 1);
    mediumHeart = new heart(onScreenCanvas.center, 150, 1);
}
else {
    largeHeart = new heart(onScreenCanvas.center, 400, 1);
    mediumHeart = new heart(onScreenCanvas.center, 200, 1);
}
largeHeart.path = largeHeart.getPath();
mediumHeart.path = mediumHeart.getPath();


const animationDuration = 1;
const fps = 60;

const smallHeart = {
    size: 20,
    transparent: 0.3,
    init: _.map(mediumHeart.getPoints(), position => new heart(position, 20, 0)),
    list: [],
    listMax: 1000,
};

_.forEach(smallHeart.init, (heart) => {
    heart.speed.x = - (mediumHeart.position.x - heart.position.x) / (animationDuration * fps);
    heart.speed.y = - (mediumHeart.position.y - heart.position.y) / (animationDuration * fps);

    heart.speed.transparent = 2 * (smallHeart.transparent - 0) / (animationDuration * fps);
    heart.speed.size = + (smallHeart.size - 0) / (animationDuration * fps);
    heart.size = 0;
});

const animation = () => {
    onScreenContext.save();

    onScreenContext.clearRect(0, 0, onScreenCanvas.width, onScreenCanvas.height);

    if (_.lt(_.size(smallHeart.list), smallHeart.listMax)) {
        smallHeart.list = _.concat(smallHeart.list, _.cloneDeep(_.sampleSize(smallHeart.init, 5)));
    }

    _.forEach(smallHeart.list, (heart) => {
        onScreenContext.fillStyle = "rgba(244, 114, 182, " + heart.transparent + ")";
        onScreenContext.fill(heart.getPath());
        heart.update();
    });


    _.forEach(smallHeart.list, (heart) => {

        if (!onScreenContext.isPointInPath(largeHeart.path, heart.position.x, heart.position.y)) {
            heart.speed.transparent = 3 * (0 - smallHeart.transparent) / (animationDuration * fps);

            if ((Math.abs(heart.speed.x) < 0.05) && (Math.abs(heart.speed.y) < 0.05)) {
                heart.speed.x = (mediumHeart.position.x - heart.position.x) / (animationDuration * fps) / 3;
                heart.speed.y = (mediumHeart.position.y - heart.position.y) / (animationDuration * fps) / 3;
            }
            else {
                heart.speed.x *= 9 / 10;
                heart.speed.y *= 9 / 10;
            }
        }
    });

    _.remove(smallHeart.list, heart => _.lte(heart.transparent, 0))

    onScreenContext.restore();

    window.requestAnimationFrame(animation);
};

window.requestAnimationFrame(animation);
