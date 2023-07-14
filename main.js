var form=document.getElementById('my-form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    var name=document.getElementById('name').value
    var email=document.getElementById('email').value

    var user={
        name:name,
        email:email
    }

    localStorage.setItem('user',JSON.stringify(user))
    name=''
    email=''

    var msg=document.querySelector('.msg')
    msg.textContent='data stored in local storage'
    msg.computedStyleMap.color='red'
})