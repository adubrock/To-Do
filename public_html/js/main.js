var tasks = [];

$(function () { // on ready!


  $('#submit-task').click(function () {
    var newTask = {
                   description: $('#form-description').val(),
                   completed: false
                 };

    tasks.push(newTask);

    $.post('/api/data', JSON.stringify(tasks), function (data) {

      console.log(tasks);
    });

  });

  // $.get('/api/data', function (data) {
  //   renderDetails(data);
  //   // renderEmail(data);
  // });

  setInterval(function () {
    $.get('/api/data', function (data) {
      renderDetails(data);
    });
  }, 1000);
});



// function renderDetails (details) {
//   name = '<h1>' + details.name + '</h1>';
//   $('body').append(name);
// }

// function renderEmail (details) {
//   for (var i = 0; i < details.email.length; i++) {
//     email = '<h1>' + details.email[i] + '</h1>';
//     $('body').append(email);
//   }
// }


//another solution below:
function renderDetails (details) {
$page = $('<div></div>');

  name = '<h1>' + details.name + '</h1>';
  $page.append(name);

  var $emails = $('<ul></ul>');

  details.email.forEach(function (address) {
    $emails.append('<li>' + address + '</li>');
  });

  $page.append($emails);

  $('#page').html($page);
}