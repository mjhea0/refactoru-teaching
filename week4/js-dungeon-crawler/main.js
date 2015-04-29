// constructors

var World = function(players, rooms) {
  this.players = players;
  this.rooms = rooms;
};

var Player = function(playerName, magic, inventory) {
  this.playerName = playerName;
  this.health = 200;
  this.magic = magic || null;
  this.inventory = inventory || null;
};

var Room = function(roomName, monsters, items) {
  this.roomName = roomName;
  this.monsters = monsters;
  this.items = items || null;
};

var Monster = function(monsterName, health){
  this.monsterName = monsterName;
  this.health = health;
};


// instances

var dragon = new Monster('Dragon', 100);
var zombie = new Monster('Zombie', 150);
var redRoom = new Room('Red Room', dragon, zombie);
var blueRoom = new Room('Blue Room', dragon, dragon);
// var world = new World([jones], [redRoom, blueRoom]);
// console.log(world);

// event handlers

$(function() {

  $('#new-game-container').hide();
  $('#player-stats').hide();

  $('#new-game-btn').on('click', function(){
    $('#main-nav').hide();
    $('#new-game-container').show();
  });

  $('#new-game-form').on('submit', function(event){
    event.preventDefault();
    var newPlayer = new Player($('#new-game-input').val(), 200);
    $('#new-game-container').hide();
    $('#player-name').html(newPlayer.playerName);
    $('#player-health').html(newPlayer.health);
    $('#player-stats').show();
  });

});