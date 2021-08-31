function valid(){
      var titleEl=document.getElementById('writer');
      var categoryEl = document.getElementById('category');
      var reviewEl=document.getElementById('review');

      if(!titleEl.value){
            alert("작성자를 입력하세요.")
            return false;
       }
       else if(!categoryEl.value){
            alert("카테고리를 입력하세요.")
            return false;
     }
       else if(!reviewEl.value){
            alert("내용을 입력하세요.")
            return false;
       }
      return true;
}


function save() {
    if (!confirm('저장하시겠습니까?')) {
      return;
    }
    if(!valid()){
      return;
    }

    var contents;
      try {
        contents = JSON.parse(localStorage.getItem("contents"));
      } catch (e) {
        contents = null;
      }

    if (!contents) {
      contents = [];
      }

    var writer = document.getElementById('writer').value;
    var category = document.getElementById('category').value;
    var review = document.getElementById('review').value;

    contents.push({no:contents.length+1
      , writer:writer
      , category:category
      , review:review
      , write_date:new Date()});

    localStorage.setItem("contents", JSON.stringify(contents));
    alert('저장되었습니다.');
    location.href = 'main_list.html';
}