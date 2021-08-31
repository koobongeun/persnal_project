function valid(){
      var dailyEl=document.getElementById('daily');
      if(!dailyEl.value){
            alert("확진 수를 입력하세요.")
            return false;
      }
      return true;
}


function save2() {
    if (!confirm('저장하시겠습니까?')) {
      return;
      }
    if(!valid()){
      return;
      }

    var contents;
      try {
        contents = JSON.parse(localStorage.getItem("contents2"));
      } catch (e) {
        contents = null;
      }

    if (!contents) {
      contents = [];
    }

    var daily = document.getElementById('daily').value;

    contents[getParameterByName('no')-1]={no:contents.length
      , daily:daily
      , write_date:new Date()};
    localStorage.setItem("contents2", JSON.stringify(contents));
      alert('저장되었습니다.');
    location.href = 'list.html';
}


var contents = JSON.parse(localStorage.getItem("contents2"));
      getContents();


function getContents() {
    if (!contents) {
      contents = [];
      }

    var content = contents[getParameterByName('no')-1];
    document.getElementById('daily').value = content.daily;
    document.getElementById('all').value = content.all;
}


function removeContent2() {
      if (confirm('삭제하시겠습니까?')){
        location.href = 'list.html';
      } else {
        return;
      }
    console.log(contents);
    contents.splice(getParameterByName('no')-1, 1);
    localStorage.setItem("contents2", JSON.stringify(contents));
}


function modify2() {
      if (confirm('수정하시겠습니까?')){
        location.href = 'form2.html?no='+getParameterByName('no');
      } else {
        return;
      }
}


function getParameterByName(name) { 
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}