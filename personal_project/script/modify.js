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
    contents[getParameterByName('no')-1]={no:contents.length
      , writer:writer
      , category:category
      , review:review
      , write_date:new Date()};

    localStorage.setItem("contents", JSON.stringify(contents));
    alert('저장되었습니다.');
    location.href = 'list.html';
}


var contents = JSON.parse(localStorage.getItem("contents"));
      getContents();


function getContents() {
      if (!contents) {
            contents = [];
      }
    
    var content = contents[getParameterByName('no')-1];
    document.getElementById('writer').value = content.writer;
    document.getElementById('category').value = content.category;
    document.getElementById('review').value = content.review;
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
        location.href = 'form.html?no='+getParameterByName('no');
      } else {
        return;
      }
}


function getParameterByName(name) { 
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}