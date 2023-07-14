var form=document.getElementById('my-form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    var name=document.getElementById('name').value
    var email=document.getElementById('email').value
    var phone=document.getElementById('phone').value
    var userList=document.getElementById('users')

    var user={
        name:name,
        email:email,
        phone:phone
    }

    localStorage.setItem(user.email,JSON.stringify(user))

    var msg=document.querySelector('.msg')
    msg.textContent='data stored in local storage'
    msg.style.color='red'

   var li=document.createElement('li')
    li.textContent=user.name+' '+user.email+' '+user.phone
    userList.appendChild(li) 
    
    name.textContent=''
    email=''
    phone=''
    //userList.innerHTML=userList.innerHTML+<li> user.email +user.name+user.phone</li>
           //     OR
    
})
   /*  localStorage.setItem('user',JSON.stringify(user))
    name=''
    email=''

    var msg=document.querySelector('.msg')
    msg.textContent='data stored in local storage'
    msg.style.color='red' */

   /*  var newUser=localStorage.getItem('users')//get data from local if any
    var users=newUser ? JSON.parse(newUser): [] *///if data then parse no then empty array return

    //users.push(user)
  