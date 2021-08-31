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

    contents.push({no:contents.length+1
      , daily:daily
      , write_date:new Date()});

    localStorage.setItem("contents2", JSON.stringify(contents));
    alert('저장되었습니다.');
    location.href = 'list.html';
}