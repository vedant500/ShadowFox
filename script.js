// Typing effect
const roles = ["Web Developer", "Designer", "Freelancer"];
let i = 0, j = 0;
const typed = document.getElementById("typed");

function type() {
  if(i < roles.length){
    if(j < roles[i].length){
      typed.innerHTML += roles[i][j];
      j++;
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 1000);
    }
  } else {
    i = 0;
    type();
  }
}

function erase(){
  if(j > 0){
    typed.innerHTML = roles[i].substring(0,j-1);
    j--;
    setTimeout(erase, 100);
  } else {
    i++;
    setTimeout(type, 500);
  }
}

type();

// Chatbox
const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatBtn.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});

function sendMessage() {
  const message = chatInput.value.trim();
  if(message !== "") {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = message;
    chatMessages.appendChild(msgDiv);
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') sendMessage();
});

// Smooth scroll + fixed header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(!target) return;

    const headerOffset = 70; // fixed header height
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Close mobile menu if open
    navbar.classList.remove('active');
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
