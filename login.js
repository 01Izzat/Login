const zForm = document.querySelector('.form'),
  zEmail = document.querySelector('.email'),
  zPassword = document.querySelector('.password')
let zSubmitBtn = document.querySelector('.submit__btn');

  zForm.addEventListener('submit', (e) => {
      e.preventDefault()
      zSubmitBtn.textContent = 'Loading...'

      let userInfo = {
        email: zEmail.value,
        password: zPassword.value
      }

      postLogin(userInfo)
  })

  function postLogin(userData) {
    fetch('https://reqres.in/api/login', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          alert(err)
        })
        .finally(() => {
          zSubmitBtn.textContent = 'submit'
        }) 

  }

