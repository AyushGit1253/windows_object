var form=document.getElementById('my-form')
var deleteUser=document.getElementById('users')
var userList=document.getElementById('users')
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
    

    var btn=document.createElement('button')
    btn.textContent='delete'
    btn.className='deletebtn'
    li.appendChild(btn)
    userList.appendChild(li) 


    name=' '
    email=' '
    phone=' '
    //userList.innerHTML=userList.innerHTML+<li> user.email +user.name+user.phone</li>
           //     OR
    
})
deleteUser.addEventListener('click',function(e){
    e.preventDefault()
    if(e.target.classList.contains('deletebtn')){
        if(confirm('Are you sure')){
            var li=e.target.parentElement
            userList.removeChild(li)
            var email=li.textContent.split(' ')[1]
            localStorage.removeItem(email)
            
        }
    }
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
  