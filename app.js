 // const axios = require('axios')
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {});
  });

  const submitMessage = _ => {

    let full_name = document.getElementById("full_name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    // fetch("http://localhost:5000/api/inbound_email", {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'no-cors', // no-cors, *cors, same-origin
    //     body: JSON.stringify({
    //     "full_name": full_name,
    //     "email": email,
    //     "message": message
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    //   });

    fetch("http://localhost:5000/api/inbound_email/" + full_name + "/" + email + "/" + message, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
        //     body: JSON.stringify({
        //     "full_name": full_name,
        //     "email": email,
        //     "message": message
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
          });



  




// fetch("https://api.sendgrid.com/v3/mail/send", {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'no-cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// //     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         "Authorization": "Bearer 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",
// //       'Content-Type': 'application/json'
//         'Content-Type': 'application/json'
//         // "accept": 'application/json',

//     },
// //     redirect: 'follow', // manual, *follow, error
// //     referrerPolicy: 'no-referrer', // no-referrer, *client
// //     body: JSON.stringify(data) // body data type must match "Content-Type" header
//     body: {"personalizations": [{"to": [{"email": "kchie002@gmail.com"}]}],"from": {"email": "kchie002@gmail.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}
//   });

}