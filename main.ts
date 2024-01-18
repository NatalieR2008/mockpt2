scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (true) {
        game.splash("You got the closet key!")
    }
})
let player1 = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1)
scene.cameraFollowSprite(player1)
tiles.setCurrentTilemap(tilemap`level1`)
let list = [sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 . . 5 5 . . . . . 
    . . . . . 5 5 . . 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . 5 5 . . . . . 
    . . . . . . . . . 5 5 . . . . . 
    . . . . . . . . . 5 5 . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . . . . . 5 5 . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . b b . . b b . . . . . 
    . . . . . b b . . b b . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . . . . . b b . . . . . 
    . . . . . . . . . b b . . . . . 
    . . . . . . . . . b b . . . . . 
    . . . . . . . b b b b . . . . . 
    . . . . . . . . . b b . . . . . 
    . . . . . . . b b b b . . . . . 
    . . . . . . . b b b b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)]
