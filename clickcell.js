function clickcell(n,m){
if(cellcheck[n][m][cellstate]==0){
cellchangelive(n,m);
cellcheck[n][m][cellstate]=1;
}
else{
cellchangedie(n,m);
cellcheck[n][m][cellstate]=0;
}
}