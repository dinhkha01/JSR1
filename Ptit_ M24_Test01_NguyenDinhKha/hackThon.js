"use strict";
class ScoreBoard {
    constructor(player) {
        this.player = player;
        this.saveToLocalStorage();
    }
    saveToLocalStorage() {
        localStorage.setItem("players", JSON.stringify(this.player));
    }
    loadFromLocalStorage() {
        const data = localStorage.getItem("players");
        if (data) {
            this.player = JSON.parse(data);
        }
        else {
            this.player = [];
        }
    }
    renderPlayer() {
        this.loadFromLocalStorage();
        let content = "";
        let totalPoints = 0;
        this.player.forEach((item) => {
            content += `
      <ul class="list-group my-2">
        <li class="list-group-item">
          <div>
            <button class="button" onclick="deletePlayer(${item.id})">
              <i class="fa fa-times"></i>
            </button>
            ${item.name}
          </div>
          <div>
            <button class="button" onclick="updateScore(${item.id}, -1)">-</button>
            ${item.score}
            <button class="button" onclick="updateScore(${item.id}, 1)">+</button>
          </div>
        </li>
      </ul>
      `;
            totalPoints += item.score;
        });
        document.getElementById("render").innerHTML = content;
        document.getElementById("playerCount").innerText = `Player Count: ${this.player.length}`;
        document.getElementById("totalPoints").innerText = `Total Points: ${totalPoints}`;
    }
    createPlayer(name) {
        const newPlayer = {
            id: Date.now(),
            name: name,
            score: 0,
        };
        this.player.push(newPlayer);
        this.saveToLocalStorage();
        this.renderPlayer();
    }
    updateScore(id, delta) {
        const player = this.player.find((p) => p.id === id);
        if (player) {
            player.score += delta;
            this.saveToLocalStorage();
            this.renderPlayer();
        }
    }
    deletePlayer(id) {
        this.player = this.player.filter((p) => p.id !== id);
        this.saveToLocalStorage();
        this.renderPlayer();
    }
}
const initialPlayers = [
    { id: 1, name: "Phạm Trà Mi", score: 0 },
    { id: 2, name: "Vũ Trần Yến Nhi", score: 0 },
    { id: 3, name: "Huỳnh Trâm Anh", score: 0 },
];
const scoreboard = new ScoreBoard(initialPlayers);
scoreboard.renderPlayer();
function add() {
    const input = document.getElementById("in");
    const name = input.value.trim();
    if (name) {
        scoreboard.createPlayer(name);
        input.value = "";
    }
}
function updateScore(id, delta) {
    scoreboard.updateScore(id, delta);
}
function deletePlayer(id) {
    scoreboard.deletePlayer(id);
}
