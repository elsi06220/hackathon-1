function addMessage(text, sender) {
  const chatbox = document.getElementById('chatbox');
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.textContent = text;
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight; // Scroll vers le bas
}

function getChatbotResponse(userInput) {
  console.log("ici");
  fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: userInput
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      addMessage(data.message, 'bot');
    })
    .catch(error => console.error('Erreur lors de la récupération des données:', error));
}

document.getElementById('send-btn').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim()) {
    // Affiche la question de l'utilisateur
    addMessage(userInput, 'user');
    console.log(userInput);
    // Appel à l'API Ollama pour obtenir la réponse de l'IA
    getChatbotResponse(userInput);

    // Efface le champ de saisie
    document.getElementById('user-input').value = '';
  }
});