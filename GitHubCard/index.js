/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/theolamide')
.then(response =>{
  console.log(response);
  console.log(createCard(response.data));
  const attachToCards = document.querySelector('.cards');
  const newCard = createCard(response.data);
  attachToCards.appendChild(newCard);
}) ;

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['viewgo','j0liver', 'sjeremich23','adamwinzdesign','Greyflanel','Olutundun','tetondan','dustinmyers','justsml','luishrd','bigknell'];


followersArray.forEach(item =>{
  axios.get(`https://api.github.com/users/${item}`)
.then(response =>{
  const attachToCards = document.querySelector('.cards');
  const newCard = createCard(response.data);
  attachToCards.appendChild(newCard);
}) ;
})
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
    <img src = 'http://ghchart.rshah.org/theolamide'/>
  </div>
</div>

*/

function createCard(data){
 //Create the Elements
 
 const card = document.createElement('div'),
 userImg = document.createElement('img'),
 cardInfo = document.createElement('div'),
 name = document.createElement('h3'),
 userName = document.createElement('p'),
 location = document.createElement('p'),
 profile = document.createElement('p'),
 profileAdd = document.createElement('a'),
 followers = document.createElement('p'),
 following = document.createElement('p'),
 bio = document.createElement('p'),
 cntGraph = document.createElement('img');

 //Append Children
 card.appendChild(userImg);
 card.appendChild(cardInfo); 
 cardInfo.appendChild(name);
 cardInfo.appendChild(userName);
 cardInfo.appendChild(location);
 cardInfo.appendChild(profile);
 cardInfo.appendChild(followers);
 cardInfo.appendChild(following);
 cardInfo.appendChild(bio);
 card.appendChild(cntGraph);
 profile.appendChild(profileAdd);

// Set class names
card.classList.add('card');
cardInfo.classList.add('card-info');
name.classList.add('name');
userName.classList.add('username');
cntGraph.classList.add('graph');

//Set text content

userImg.src = data.avatar_url;
name.textContent = data.name;
userName.textContent = `Username: ${data.login}`;
location.textContent = `Location: ${data.location}`;
profileAdd.href = data.html_url;
profileAdd.textContent = `Profile: ${data.html_url}`;
followers.textContent = `Followers: ${data.followers}`;
following.textContent = `Following: ${data.following}`;
bio.textContent = `Bio: ${data.bio}`;
cntGraph.src = `http://ghchart.rshah.org/${data.login}`

return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
