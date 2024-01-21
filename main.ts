scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    player1.setPosition(120, 27)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f c c c c c c f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c f f . 
        . f f c c c c c c c c f f . 
        . f f c c c c c c f f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . . e f f f f f f f f 4 e . 
        . . 4 f 3 3 3 3 3 e d d 4 . 
        . . e f f f f f f e e 4 . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f f c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f f c c c c c c f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f e . . 
        . 4 d d e 3 3 3 3 3 f 4 . . 
        . . 4 e e f f f f f f e . . 
        . . . . . . . . f f f . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(player1, tiles.getTileLocation(2, 4))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(player1, tiles.getTileLocation(2, 1))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d e e f f f . . 
        . . . f e 4 e d d 4 f . . . 
        . . . f 3 3 e d d e f . . . 
        . . f f 6 6 f e e f f f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f c d d f 1 4 d 4 f f . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e d d 4 . . 
        . . . f 3 3 3 3 e d d e . . 
        . . f f 6 6 6 6 f e e f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (true) {
        game.splash("You got the closet key!")
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . f f 4 d 4 1 f d d c f . . 
        . . f f f 4 d d d d f . . . 
        . . 4 d d e 4 4 4 e f . . . 
        . . e d d e 3 3 3 3 f . . . 
        . . f e e f 6 6 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f e e d d d f . . . 
        . . . f 4 d d e 4 e f . . . 
        . . . f e d d e 3 3 f . . . 
        . . f f f e e f 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `],
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
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
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d 4 e f e . 
        . f e f f b b b e d d 4 e . 
        . e 4 f b 3 3 3 e d d e . . 
        . . . f 6 6 6 6 f e e . . . 
        . . . f f f f f f f . . . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . e f e 4 d d d d d f f . . 
        . e 4 d d e b b b f f e f . 
        . . e d d e 3 3 b e f 4 e . 
        . . . e e f 6 6 6 6 f . . . 
        . . . . f f f f f f f . . . 
        . . . . . . . . f f f . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(player1, tiles.getTileLocation(8, 14))
})
let player1: Sprite = null
let mySprite = game.askForString("Choose Difficulty (E,M,H)")
if (mySprite == "E") {
    info.startCountdown(600)
} else if (mySprite == "M") {
    info.startCountdown(480)
} else {
    info.startCountdown(300)
}
player1 = sprites.create(img`
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
player1.setPosition(120, 27)
controller.moveSprite(player1)
scene.cameraFollowSprite(player1)
tiles.setCurrentTilemap(tilemap`level1`)
