function fillBody() {
  const lines = document.getElementById('body');
  lines.innerHTML = `
  <div class="title">
    <h2>Tic Tac Toe</h2>
  </div>

  <div id="model">
  <form class="col-10 offset-1 my-4 form">
    <fieldset>
      <label for="player1">Player 1 name: </label>
      <input type="text" id="player1" required>
    </fieldset>
    <fieldset>
      <label for="player2">Player 2 name:</label>
      <input type="text" id="player2" required>
    </fieldset>
    <button type="button" id="submit">
      Ok
    </button>
  </form>
  </div>

  <div id="modelAI">
  <form class="col-10 offset-1 my-4 form">
    <fieldset>
      <label for="player">Your name: </label>
      <input type="text" id="player" required>
    </fieldset>
    <button type="button" id="submit-AI">
      Ok
    </button>
  </form>
  </div>

  <div>
  <button id="button-playGame" type="submit">Play Tic Tac Toe</button>
  <button id="button-playGame-AI" type="submit">Play against AI</button>
  </div>

  <div class="title">
  <h3 id="player-turn">Click above to start</h3>
  </div>

  <div class="main m-4 row">
  <table class="col-4 offset-4">
    <thead>
      <tbody id="table-rows"></tbody>
    </thead>
    <tbody id="table-rows"></tbody>
  </table>
  </div>
  `;
}

export default fillBody;
