let mySprite = sprites.create(img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . 8 8 8 8 8 8 8 9 8 . . . 
    . . . 8 8 8 8 8 8 8 9 9 9 8 . . 
    . . 8 8 8 8 8 8 8 8 8 9 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    `, SpriteKind.Player)
mySprite.y += -7
pause(200)
mySprite.x += 5
pause(200)
mySprite.y += 12
pause(200)
mySprite.x += -10
pause(200)
mySprite.y += -17
pause(200)
mySprite.x += 15
pause(200)
mySprite.y += 22
pause(200)
mySprite.x += -20
