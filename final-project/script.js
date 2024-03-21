
$.ajax({
  url: "https://api.adviceslip.com/advice",
  type: "get",
  dataType: "json",
  success: function(result){
    advice.innerHTML = result.slip.advice;
    console.log(result)
  }
});
