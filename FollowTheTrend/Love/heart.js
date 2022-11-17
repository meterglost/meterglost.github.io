class heart {
    constructor(position, size, transparent) {
        this.position = {};
        this.position.x = position.x;
        this.position.y = position.y;
        this.position.l = _.round(position.x - size / 2);
        this.position.r = _.round(position.x + size / 2);
        this.position.t = _.round(position.y - size / 2);
        this.position.b = _.round(position.y + size / 2);

        this.size = size;

        this.transparent = transparent;

        this.speed = {};
        this.speed.x = 0;
        this.speed.y = 0;
        this.speed.size = 0;
        this.speed.transparent = 0;
    };

    getPath() {
        let path = new Path2D();

        path.moveTo(this.position.x, this.position.t + this.size * 1 / 4);

        path.bezierCurveTo(
            this.position.x, this.position.t,
            this.position.l, this.position.t,
            this.position.l, this.position.t + this.size * 1 / 3,
        );

        path.bezierCurveTo(
            this.position.l, this.position.t + this.size * 2 / 3,
            this.position.x, this.position.t + this.size * 2 / 3,
            this.position.x, this.position.b,
        );

        path.bezierCurveTo(
            this.position.x, this.position.t + this.size * 2 / 3,
            this.position.r, this.position.t + this.size * 2 / 3,
            this.position.r, this.position.t + this.size * 1 / 3,
        );

        path.bezierCurveTo(
            this.position.r, this.position.t,
            this.position.x, this.position.t,
            this.position.x, this.position.t + this.size * 1 / 4,
        );

        path.closePath();

        return path;
    };

    getPoints(tolerance = 3) {
        let pointList = [];

        let offScreenCanvas = document.createElement('canvas');
        let offScreenContext = offScreenCanvas.getContext('2d');

        let path = this.getPath();

        const findPointFrom = (x, y) => {
            let deltaX = (this.position.x - x) / 200;
            let deltaY = (this.position.y - y) / 200;
            while (!offScreenContext.isPointInPath(path, x, y)) {
                x += deltaX;
                y += deltaY;
            }
            return { x: _.round(x), y: _.round(y) };
        }

        for (let x = this.position.l, y = this.position.t; x <= this.position.r; x += tolerance) {
            pointList.push(findPointFrom(x, y));
        }

        for (let x = this.position.r, y = this.position.t; y <= this.position.b; y += tolerance) {
            pointList.push(findPointFrom(x, y));
        }

        for (let x = this.position.r, y = this.position.b; x >= this.position.l; x -= tolerance) {
            pointList.push(findPointFrom(x, y));
        }

        for (let x = this.position.l, y = this.position.b; y >= this.position.t; y -= tolerance) {
            pointList.push(findPointFrom(x, y));
        }

        pointList = _.uniqWith(pointList, _.isEqual);

        return pointList;
    };

    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.size += this.speed.size;
        this.transparent += this.speed.transparent;

        this.position.l = _.round(this.position.x - this.size / 2);
        this.position.r = _.round(this.position.x + this.size / 2);
        this.position.t = _.round(this.position.y - this.size / 2);
        this.position.b = _.round(this.position.y + this.size / 2);
    };
}

export { heart };
