var Bowling = require('../bowling')

describe("Bowling", function(){

  // As a bowling player,
  // So that I can play several games,
  // I want every game to end after 10 frames.

  it("ends the game if _frameCount is equal to 10", function(){
    var bowling = new Bowling();
    for (var i = 0; i < 20; i++ ) { bowling.roll(0); };
    expect(bowling.getFrame()).toBe(11);
    expect(bowling.isFinished()).toBe(true);
  });

  // As a bowling player,
  // So that I can keep track of my game
  // I want to see my scorecard showing the frame number, each play, and the frame total.

  it("shows the scorecard with frame, play 1, play 2, and frame score", function(){
    var bowling = new Bowling();
    bowling.roll(3);
    bowling.roll(5);
    bowling.roll(4);
    bowling.roll(2);
    expect(bowling.getScorecard()).toContain([ 'Frame: 1', 'Play 1: 3', 'Play 2: 5', 'Frame score: 8' ],
     [ 'Frame: 2', 'Play 1: 4', 'Play 2: 2', 'Frame score: 6' ]);
  });

  // it('shows an X for every strike', function(){
  //   bowling.roll(10);
  //   expect(bowling.printScorecard()).toBeUndefined();
  // });
  //
  // it('shows a / for every spare', function(){
  //   bowling.roll(4);
  //   bowling.roll(6);
  //   expect(bowling.printScorecard()).toBeUndefined();
  // });
  //
  // it('shows the total for each frame', function(){
  //   bowling.roll(5);
  //   bowling.roll(4);
  //   expect(bowling.getFrameResult()).toEqual(9);
  // });
  //
  // it('updates the score of the previou frame', function(){
  //   bowling.roll(4);
  //   bowling.roll(6);
  //   bowling.roll(5);
  //   expect(bowling.getFrameResult()).toEqual(20);
  // });

});