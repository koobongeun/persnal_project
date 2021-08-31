var contents = JSON.parse(localStorage.getItem("contents"));
var num=getParameterByName('no');
getContents();


function getContents() {
      if (!contents) {
            contents = [];
      }
  
var content = contents[getParameterByName('no')-1];
document.getElementById('writer').innerText = content.writer;
document.getElementById('category').innerText = content.category;
document.getElementById('review').innerText = content.review;
document.getElementById('write_date').innerText = toStringByFormatting(new Date(content.write_date));
}


function removeContent() {
      if (confirm('삭제하시겠습니까?')){
            location.href = 'list.html';
      } else {
            return;
      }

      console.log(contents);
      contents.splice(getParameterByName('no')-1, 1);
      localStorage.setItem("contents", JSON.stringify(contents));
}


function modify() {
    if (confirm('수정하시겠습니까?')){
            location.href = 'modify.html?no='+getParameterByName('no');
      } else {
            return;
      }
}


function getParameterByName(name) { 
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var contentsList = JSON.parse(localStorage.getItem("comments"));
drawRows(contentsList['cono'+num]);


function warnEmpty() {
      alert("Enter a Input!!");
}


function dateTostring(date) {
      const dateString =date.toISOString();
      const dateToString = dateString.substring(0, 10) + " " + dateString.substring(11, 19);
      return dateToString;
}


function submitComment() {
      const newcommentEL = document.getElementById("new-comment");
      const newcomment = newcommentEL.value.trim();
      var commentjson= localStorage.getItem('comments');
      var comment;

      if (!commentjson) {
            comment={};
      } else {
            comment=JSON.parse(commentjson)
      }

      var list = comment['cono'+num];

      if(!list){
            list=[];
      }

      list.push({
            message : newcomment,
            write_date : new Date()
      })

      comment['cono'+num] = list;

      localStorage.setItem('comments', JSON.stringify(comment));
      drawRows(list);
}


function drawRows(list) {
    var templates = '';
    var body = document.getElementById('comments-rows');
 
    for (var i=list.length-1; 0<=i; i--) {
      var comment  = list[i];
      templates += '<tr>';
      templates += '<td>'+comment.message+'</td>';
      templates += '<td style="text-align:center">'+toStringByFormatting(new Date(comment.write_date))+'</td>';
      templates += '<td style="text-align:center"> <button onclick="removeComments('+i+')">삭제</button></td>';
      templates += '</tr>';
    }
 
    body.innerHTML = templates;

}

function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear(); 
    const month = leftPad(source.getMonth() + 1); 
    const day = leftPad(source.getDate());
    return [year, month, day].join(delimiter);
}

   
function leftPad(value) {
  if (value >= 10) { return value; } return `0${value}`; 
}


function removeComments(i) {
      if (!confirm('삭제하시겠습니까?')){
      return;
      }
      var commentjson= localStorage.getItem('comments');
      var comment = comment=JSON.parse(commentjson);
      var list = comment['cono'+num];
      list.splice(i, 1);
      comment['cono'+num] = list;
      localStorage.setItem('comments', JSON.stringify(comment));
      location.href = 'view.html?no='+num;
}