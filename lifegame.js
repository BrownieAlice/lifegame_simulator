function lifegame(){
if(state==1){
if(cellstate==0){
cellnexts = 1
}
else{
cellnexts = 0
}

nacls=cellcheck[0][1][cellstate]+cellcheck[1][0][cellstate]+cellcheck[1][1][cellstate];
cellnext(nacls,0,0,cellstate,cellnexts);

for(i=1;i<(cellnumW-1);i++){
nacls=cellcheck[0][i-1][cellstate]+cellcheck[1][i-1][cellstate]+cellcheck[1][i][cellstate]+cellcheck[1][i+1][cellstate]+cellcheck[0][i+1][cellstate];
cellnext(nacls,0,i,cellstate,cellnexts);
}

nacls=cellcheck[0][cellnumW-2][cellstate]+cellcheck[1][cellnumW-1][cellstate]+cellcheck[1][cellnumW-2][cellstate];
cellnext(nacls,0,cellnumW-1,cellstate,cellnexts);

for(i=1;i<(cellnumL-1);i++){
nacls=cellcheck[i-1][0][cellstate]+cellcheck[i-1][1][cellstate]+cellcheck[i][1][cellstate]+cellcheck[i+1][1][cellstate]+cellcheck[i+1][0][cellstate];
cellnext(nacls,i,0,cellstate,cellnexts);

for(j=1;j<(cellnumW-1);j++){
nacls=cellcheck[i][j-1][cellstate]+cellcheck[i-1][j-1][cellstate]+cellcheck[i-1][j][cellstate]+cellcheck[i-1][j+1][cellstate]+cellcheck[i][j+1][cellstate]+cellcheck[i+1][j+1][cellstate]+cellcheck[i+1][j][cellstate]+cellcheck[i+1][j-1][cellstate];
cellnext(nacls,i,j,cellstate,cellnexts);
}

nacls=cellcheck[i-1][cellnumW-1][cellstate]+cellcheck[i-1][cellnumW-2][cellstate]+cellcheck[i][cellnumW-2][cellstate]+cellcheck[i+1][cellnumW-2][cellstate]+cellcheck[i+1][cellnumW-1][cellstate];
cellnext(nacls,i,cellnumW-1,cellstate,cellnexts);
}

nacls=cellcheck[cellnumL-1][1][cellstate]+cellcheck[cellnumL-2][0][cellstate]+cellcheck[cellnumL-2][1][cellstate];
cellnext(nacls,cellnumL-1,0,cellstate,cellnexts);

for(i=1;i<(cellnumW-1);i++){
nacls=cellcheck[cellnumL-1][i-1][cellstate]+cellcheck[cellnumL-2][i-1][cellstate]+cellcheck[cellnumL-2][i][cellstate]+cellcheck[cellnumL-2][i+1][cellstate]+cellcheck[cellnumL-1][i+1][cellstate];
cellnext(nacls,cellnumL-1,i,cellstate,cellnexts);
}

nacls=cellcheck[cellnumL-1][cellnumW-2][cellstate]+cellcheck[cellnumL-2][cellnumW-1][cellstate]+cellcheck[cellnumL-2][cellnumW-2][cellstate];
cellnext(nacls,cellnumL-1,cellnumW-1,cellstate,cellnexts);

cellstate=cellnexts
setInterval("lifegame()",1000);
}
}