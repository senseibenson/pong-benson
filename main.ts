function createLeftPaddle () {
   let leftPaddle = sprites.create(img`
       1 1 1 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 2 2 1
       1 1 1 1
   `, SpriteKind.Player)
   leftPaddle.x = 10
   controller.moveSprite(leftPaddle, 0 , 150)
   leftPaddle.setFlag(SpriteFlag.StayInScreen, true)
}

function createRightPaddle () {
   let rightPaddle = sprites.create(img`
       1 1 1 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 8 8 1
       1 1 1 1
   `, SpriteKind.Player)
   rightPaddle.x = 150
   controller.player2.moveSprite(rightPaddle, 0 , 150)
   rightPaddle.setFlag(SpriteFlag.StayInScreen, true)
}

createLeftPaddle()
createRightPaddle()
