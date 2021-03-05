$(document).ready(function(){
  $("#find").on("input",function(){
    let searchText = $(this).val();
    let targetText;
    let searchResult = [];
   $(".images").find(".displayNone").removeClass("displayNone");
    if(searchText != ''){
      $(".keyword").each(function(){
        targetText = $(this).text();
        if(targetText.indexOf(searchText) !=-1){
          searchResult.push(targetText);
        }
        else{
         $(this).parent().addClass("displayNone");
        }
      });
    }
  });
});