document.getElementById('send-btn').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim()) {
    // Affiche la question de l'utilisateur
    addMessage(userInput, 'user');
    
    // Appel à l'API Ollama pour obtenir la réponse de l'IA
    getChatbotResponse(userInput);
    
    // Efface le champ de saisie
    document.getElementById('user-input').value = '';
  }
});

function addMessage(text, sender) {
  const chatbox = document.getElementById('chatbox');
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.textContent = text;
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight; // Scroll vers le bas
}
  
