import {
collection,
addDoc,
serverTimestamp,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from './firebase.js';

const joinBtn = document.getElementById('joinBtn');
const sendBtn = document.getElementById('sendBtn');

const loginScreen = document.getElementById('loginScreen');
const chatApp = document.getElementById('chatApp');

const messages = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');

let currentUser = null;

joinBtn.onclick = ()=>{

const realName = document.getElementById('realName').value.trim();
const username = document.getElementById('username').value.trim();
const relation = document.getElementById('relation').value;

if(!realName || !username){
alert('Fill all fields');
return;
}

currentUser = {realName, username, relation};

loginScreen.classList.add('hidden');
chatApp.classList.remove('hidden');
};

sendBtn.onclick = sendMessage;

messageInput.addEventListener('keypress',(e)=>{
if(e.key === 'Enter') sendMessage();
});

async function sendMessage(){

const text = messageInput.value.trim();

if(!text) return;

await addDoc(collection(db,'messages'),{
text,
sender: currentUser.realName,
relation: currentUser.relation,
createdAt: serverTimestamp()
});

messageInput.value = '';
}

if(db){

const q = query(collection(db,'messages'), orderBy('createdAt'));

onSnapshot(q,(snapshot)=>{

messages.innerHTML = '';

snapshot.forEach((doc)=>{

const data = doc.data();

const div = document.createElement('div');
div.className = 'message';

div.innerHTML = `
<div>
<strong>${data.sender}</strong>
${data.relation === 'elder' ? '<span class="tag">🟢 ELDER</span>' : ''}
</div>
<div>${data.text}</div>
`;

messages.appendChild(div);
});

messages.scrollTop = messages.scrollHeight;

});
}
