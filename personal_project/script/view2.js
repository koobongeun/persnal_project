var contents = JSON.parse(localStorage.getItem("contents2"));
getContents();


function getContents() {
      if (!contents) {
      contents = [];
      }

      var content = contents[getParameterByName('no')-1];
      document.getElementById('daily').innerText = content.daily;
      document.getElementById('write_date').innerText = toStringByFormatting(new Date(content.write_date));
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
            location.href = 'modify2.html?no='+getParameterByName('no');
      } else {
      return;
      }
}


function getParameterByName(name) { 
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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