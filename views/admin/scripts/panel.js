$('.actionButton').click(function(){
  var parent = $(this).parent().parent();
  var endpoint = `/api/${$(this).data("object")}/${$(this).data("action")}/${$(this).data("id")}`;
  if($(this).data("action")=='tags'){
    endpoint+=`/${$(this).data("tag")}`
  }
  $.ajax({
      type: "GET",
      url: endpoint
  })
  .done(function( response ) {
    parent.removeClass().toggleClass(response.response.status);
    notify(response.response.status, response.response.message);
  })
  .fail(function(err){
    notify('danger', `HTTP ERROR [${err.status}] - ${err.statusText}`);
  });
});
function getNotificationType(type){
  var types = {
    'success': 'success',
    'warning': 'warning',
    'danger': 'error'
  }
  return types[type];
}
function notify(type, message){
  return alert(message);
}
