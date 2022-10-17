function print(){
    var divContents = document.getElementById("sectionToPrint").innerHTML;
    var sOption="toolbar=yes,location=no,directories=yes,menubar=yes,scrollbars=yes,width=900,height=300,left=100,top=25";
            var a = window.open('', '',sOption);
            a.document.write('<html>');
            a.document.write('<head> <style> @media print {.col-md-12 { width: 100%;}.col-md-4 {width: 33.33333333333333%;}.col-md-3 {width: 25%;}}</style></head');
            a.document.write('<body><center> ');
            a.document.write(divContents);
            a.document.write('</center></body></html>');
            a.document.close();
            a.print();
}