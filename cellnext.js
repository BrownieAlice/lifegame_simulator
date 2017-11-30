function cellnext(nacl,n,m,l,o){
//周囲の生きてる細胞総数,セルの配列番号,現在の細胞ステータス変数,次の細胞ステータス変数
if(nacl<=1){
cellchangedie(n,m);
cellcheck[n][m][o]=0;
}
else if(nacl==2){
if(cellcheck[n][m][l]==1){
cellcheck[n][m][o]=1;
}
else{
cellcheck[n][m][o]=0;
}
}
else if(nacl==3){
cellchangelive(n,m);
cellcheck[n][m][o]=1;
}
else{
cellchangedie(n,m);
cellcheck[n][m][o]=0;
}
}
