
(function(){
  var xhr = new XMLHttpRequest();
  var url = 'https://monuments-data.herokuapp.com/api/monuments';
  xhr.open('GET', url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status == 200){
      let response = xhr.response;
      response = JSON.parse(response);
      let monumentsList = document.querySelector('.monuments');

      for(let item of response){
        console.log(item);
        monumentsList.innerHTML += '<div class="row"><h4>' + item.name + '</h4><p><small>' + item.description + '</small></p></div>';
      }
      return response;
    }
    if(xhr.readyState === 4 && xhr.status >= 400){
        console.log(item +' - ' + xhr.statusText);
    }
  }
}());

$(document).ready(function() {

  (function(){
    var $monumetsPhotos = $('.monument-photos');
    $.ajax({
        url: 'https://monuments-data.herokuapp.com/api/monuments',
        dataType: 'json',
        method: 'GET',
        data: {
            login: 'test33',
            id: 5
        },
        success: function(response) {
            console.log(response);
            console.log(response.status);

            for (var item of response) {
              var div = $('<div/>', { class: "col-md-12 text-center" });
              $('<h5/>').html(item.name).appendTo(div);
              $('<img/>', { src: item.imageUrl }).appendTo(div);
              $('<br/>').appendTo(div);
              $('<hr/>').appendTo(div);
              $monumetsPhotos.append(div);
              //$monumetsPhotos.append('<div class="col-md-12 text-center"><h5>'+ item.name + '</h5><br><img style="max-width:50%"src='+ item.imageUrl +'><hr></div>');

            }
        },
        error: function(response) {
          console.log('Ooops something goes wrong!');
          console.log(response.status, response.statusText);
        }
    });
  }());

  (function(){
    var $users = $('.users');
    $.ajax({
        url: 'https://randomuser.me/api',
        dataType: 'json',
        method: 'GET',
        success: function(data) {
          console.log(data.status);
          var user = data.results[0];
          var $row = $('<div/>' , {class: 'row'});
          var $imgCol = $('<div/>' , {class: 'col-md-4'});
          var $textCol = $('<div/>' , {class: 'col-md-8'});
          var $userImage = $('<img/>', {class: 'img-circle img-responsive', src: user.picture.medium });
          var $userName = $('<h3/>').text(`${user.name.title} ${user.name.first} ${user.name.last}`);

          $users.append($row);
          $row.append($imgCol);
          $row.append($textCol);
          $imgCol.append($userImage);
          $textCol.append($userName);

        },
        error: function(response) {
          console.log('Sample user data - ooops something goes wrong!');
          console.log(response.status, response.statusText);
        }
    });
  }());


})
