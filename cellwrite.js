document.open();
document.write('<table border="',cellborder,'" width="',cellallwidth,'" cellspacing="0" cellpadding="0" bordercolor="#f8f8f8">');

for(i=0;i<cellnumL;i++){
document.write('<tr>');
for(j=0;j<cellnumW;j++){
document.write('<td id="cell[',i,'][',j,']" onclick="clickcell(',i,',',j,')" width="',cellsize,'" height="',cellsize,'"></td>');
};
document.write('</td>');
}
document.write('</table>');
document.close();
