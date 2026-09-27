const chat = document.getElementById('chat');
const form = document.getElementById('form');
const input = document.getElementById('input');

const replies = [
  ["motivat", "You don’t need to have it all figured out. Just keep moving, even when the progress feels too small to matter. 🔥"],
  ["bad day", "A bad day doesn’t get to decide what tomorrow looks like. Breathe, reset, and give yourself another chance. 🫂"],
  ["study", "Let’s lock in 📚. Pick one topic, start with one question, and work through it step by step. You’ve got this."],
  ["sad", "Come here 🫂. You don’t have to pretend everything is fine. Tell me what happened, and we’ll take it one step at a time."],
  ["hello", "Bestieee 😭💗 I’m here. What are we getting into today?"],
  ["hi", "Hiiii bestie 🥹✨ What’s up?"],
  ["love", "Awww 😭💗 I’m rooting for you. Tell me what’s happening."]
];

function add(text, who) {
  const d = document.createElement('div');
  d.className = 'msg ' + who;
  d.textContent = text;
  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
}

function reply(text) {
  const t = text.toLowerCase();
  let r = "I hear you, bestie 🫂. Tell me a little more and I’ll help you figure it out.";

  for (const [key, val] of replies) {
    if (t.includes(key)) {
      r = val;
      break;
    }
  }

  setTimeout(() => add(r, 'bot'), 350);
}

function send(text) {
  if (!text.trim()) return;
  add(text, 'user');
  reply(text);
  input.value = '';
}

function quickSend(t) {
  send(t);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  send(input.value);
});
