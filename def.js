cellnumW = 200;
// セルの横の数
cellnumL = 100;
// セルの縦の数
cellborder = 1;
// セルの枠の大きさ
cellsize = 5;
// セルの一辺の大きさ
cellallwidth = (cellsize+cellborder)*cellnumW+cellborder;
// セル全体の横の長さ
cellstate = 0;
// セルの現状
state = 0;
// 実行中か否か
var cellcheck = new Array(cellnumL);
for(i=0;i<cellnumL;i++){
cellcheck[i] = new Array(cellnumW);
for(j=0;j<cellnumW;j++){
cellcheck[i][j] = new Array(0,0);
}
}
//cellcheck[列数-1][行数-1][]