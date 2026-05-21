let db = null;

try{
  const firebaseModule = await import('./firebase.js');
  db = firebaseModule.db;
}catch(err){
  console.log("Firebase not connected yet");
}
let currentUser=null;

joinBtn.onclick=()=>{

const realName=document.getElementById('realName').value;
const username=document.getElementById('username').value;
const relation=document.getElementById('relation').value;

if(!realName||!username){
alert('Fill all fields');
return;
}

currentUser={realName,username,relation};

loginScreen.classList.add('hidden');
chatApp.classList.remove('hidden');
};

sendBtn.onclick=sendMessage;

messageInput.addEventListener('keypress',(e)=>{
if(e.key==='Enter') sendMessage();
});

async function sendMessage(){

const text=messageInput.value.trim();

if(!text) return;

if(!db){
alert("Firebase not configured yet");
return;
}

await addDoc(collection(db,'messages'),{
text,
sender:currentUser.realName,
relation:currentUser.relation,
createdAt:serverTimestamp()
});

messageInput.value='';
}
if(db){

const q=query(collection(db,'messages'),orderBy('createdAt'));

onSnapshot(q,(snapshot)=>{

messages.innerHTML='';

snapshot.forEach((doc)=>{

const data=doc.data();

const div=document.createElement('div');
div.className='message';

div.innerHTML=`
<div>
<strong>${data.sender}</strong>
${data.relation==='elder' ? '<span class="tag">🟢 ELDER</span>' : ''}
</div>
<div>${data.text}</div>
`;

messages.appendChild(div);
});

messages.scrollTop=messages.scrollHeight;
});
}
