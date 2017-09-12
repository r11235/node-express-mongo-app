/* globals fetch */
var del = document.getElementById('delete');
var del2 = document.getElementById('delete2');

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Homer'
    })
  }).then(function (response) {
    window.location.reload()
  })
})


del2.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Cartman'
    })
  }).then(function (response) {
    window.location.reload()
  })
})
