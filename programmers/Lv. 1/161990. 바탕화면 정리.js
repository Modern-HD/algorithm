function solution(wallpaper) {
    
    const xMinMax = [51, 0];
    const yMinMax = [51, 0];
    
    wallpaper.forEach((str, iX) => {
        let flag = false;
        [...str].forEach((char, iY) => {
            if (char === '#') {
                flag = true;
                if (iY < yMinMax[0]) yMinMax[0] = iY;
                if (iY + 1 > yMinMax[1]) yMinMax[1] = iY + 1;
            }
        })
        if (flag) {
            if (iX < xMinMax[0]) xMinMax[0] = iX;
            if (iX + 1 > xMinMax[1]) xMinMax[1] = iX + 1;
        }
    })
    
    return [xMinMax[0], yMinMax[0], xMinMax[1], yMinMax[1]];
}