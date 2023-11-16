const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []


//FETCHİNG DATA
//CREATE li ELEMENT

const fetchdata = async() => {
  const response = await fetch('https://randomuser.me/api?results=50')
  const { results } =  await response.json()


  //clearResults
result.innerHTML = '';


results.forEach(user => {
  const li = document.createElement('li')
  listItems.push(li)

  li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}" />
  <div class='user-info'>
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
  </div>
` 
  
  result.appendChild(li)
})
}

fetchdata()

//FİLTER USERS 

filter.addEventListener('keyup' , filterUser)

function filterUser(e) {
  const text = e.target.value;
    listItems.forEach(item => {
      if(item.innerHTML.toLowerCase().includes(text.toLowerCase())){
        item.classList.remove('hide')
      }else{
        item.classList.add('hide')
      }
    })
}

