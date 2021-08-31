var contentList = JSON.parse(localStorage.getItem("contents"));
      drawRows();


function moveForm() {
      location.href = 'form.html'
}


function drawRows() {
      var templates = '';
      var body = document.getElementById('rows');

      for (var i=contentList.length-1; 0<=i; i--) {
            var content  = contentList[i];
            console.log(content);
            templates += '<tr onclick="moveView('+i+')">';
            templates += '<td style="text-align:center">'+(i+1)+'</td>';
            templates += '<td style="text-align:center">'+content.writer+'</td>';
            templates += '<td style="text-align:center">'+content.category+'</td>';
            templates += '<td>'+content.review+'</td>';
            templates += '<td style="text-align:center">'+toStringByFormatting(new Date(content.write_date))+'</td>';
            templates += '</tr>';
      }
      body.innerHTML = templates;
}


function moveView(contentNo) {
      location.href = 'view.html?no='+(contentNo+1);
}


function leftPad(value) {
      if (value >= 10) { return value; } return `0${value}`; 
}


function toStringByFormatting(source, delimiter = '-') {
      const year = source.getFullYear(); 
      const month = leftPad(source.getMonth() + 1); 
      const day = leftPad(source.getDate()); 
      return [year, month, day].join(delimiter);
}



var contentList2 = JSON.parse(localStorage.getItem("contents2"));
      drawRows2();

function moveForm2() {
      location.href = 'form2.html'
}


function drawRows2() {
      var sumConfirmedCases = sumAll();
      var contentList2 = JSON.parse(localStorage.getItem("contents2"));
      var templates2 = '';
      var body = document.getElementById('rows2');
      var result = sumConfirmedCases;
      
      for (var i=contentList2.length-1; 0<=i; i--) {
            var content  = contentList2[i];
            templates2 += '<tr onclick="moveView2('+i+')">';
            templates2 += '<td style="text-align:center">'+(i+1)+'</td>';
            templates2 += '<td style="text-align:center">'+content.daily+'</td>';
            templates2 += '<td style="text-align:center">'+result+'</td>';
            templates2 += '<td style="text-align:center">'+toStringByFormatting(new Date(content.write_date))+'</td>';
            templates2 += '</tr>';
            result = result - parseInt(content["daily"]);
      }
    body.innerHTML = templates2;
}
    

function sumAll(){
      var contentList2 = JSON.parse(localStorage.getItem("contents2"));
      var result = 0;
      for (var i=contentList2.length-1; 0<=i; i--) {
            var content  = contentList2[i];
            result = parseInt(content["daily"])+result;
      }
      return result;
}


function moveView2(contentNo) {
      location.href = 'view2.html?no='+(contentNo+1);
}

