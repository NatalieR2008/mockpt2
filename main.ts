namespace SpriteKind {
    export const powerup = SpriteKind.create()
    export const chest_ = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    player1.setPosition(120, 27)
    for (let value of tiles.getTilesByType(sprites.dungeon.darkGroundNorthEast1)) {
        Chest = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.chest_)
        Chest.setPosition(value.x, value.y)
    }
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
    sprites.destroyAllSpritesOfKind(SpriteKind.chest_)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(player1, tiles.getTileLocation(2, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.chest_, function (sprite, otherSprite) {
    keys = sprites.create(img`
        . . . . . 5 . . . . . . . . . . 
        . 5 5 . . . 5 . . . . 5 5 . . . 
        . . 5 5 . . 5 5 . . 5 5 . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 . 5 . 5 . 5 5 5 5 . 
        5 5 5 . . 5 5 . 5 5 . . . . . . 
        . . . . . 5 . 5 . 5 . . . . . . 
        . . . . . 5 5 5 5 5 . 5 . . . . 
        . . 5 5 . . . . 5 5 . 5 5 . . . 
        . 5 5 . . . . . 5 5 . . 5 5 . . 
        . 5 . . . . . . 5 5 . . . 5 . . 
        . . . . . . . 5 5 5 . . . 5 . . 
        . . . . . . . . 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.powerup)
    otherSprite.setImage(img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)
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
    pickax = sprites.create(img`
        . . . . . . . . . 5 . . . . . . 
        . . . . 5 . . . . 5 . . . 5 . . 
        . . . . 5 5 . . . 5 . 5 5 5 . . 
        5 5 . . . . . . . . . 5 . . . . 
        . 5 5 . . f f f . . . . . . . . 
        . . 5 . . . f f f f . . 5 5 . 5 
        . . . . . . . . e f . . . . 5 5 
        . . . . . . . e . f f . . . . . 
        . . . . . . e . . f f . . . . . 
        . . . . . e . . . . f . . . . . 
        . . . . e . . . . . . . 5 . . . 
        . . . e . . . . . . . . 5 5 . . 
        . . e . . . . . 5 5 . . . 5 5 . 
        . . . . . . . . . 5 . . . . . . 
        . . . . . . . . . 5 . . . . . . 
        . . . . . . . . . 5 . . . . . . 
        `, SpriteKind.powerup)
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    tiles.placeOnTile(pickax, tiles.getTileLocation(13, 11))
    while (!(controller.A.isPressed())) {
        game.showLongText("You found a pickaxe! (Can break cracked brick tiles)", DialogLayout.Bottom)
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
let pickax: Sprite = null
let keys: Sprite = null
let player1: Sprite = null
let Chest: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let list = [
sprites.create(img`
    . . . . . 5 . . . . . . . . . . 
    . 5 5 . . . 5 . . . . 5 5 . . . 
    . . 5 5 . . 5 5 . . 5 5 . . . . 
    . . . 5 . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 . 5 . 5 . 5 5 5 5 . 
    5 5 5 . . 5 5 . 5 5 . . . . . . 
    . . . . . 5 . 5 . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . 5 . . . . 
    . . 5 5 . . . . 5 5 . 5 5 . . . 
    . 5 5 . . . . . 5 5 . . 5 5 . . 
    . 5 . . . . . . 5 5 . . . 5 . . 
    . . . . . . . 5 5 5 . . . 5 . . 
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup),
sprites.create(img`
    . . . . . 3 . . . . . . . . . . 
    . 3 3 . . . 3 . . . . 3 3 . . . 
    . . 3 3 . . 3 3 . . 3 3 . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 . 3 . 3 . 3 3 3 3 . 
    3 3 3 . . 3 3 . 3 3 . . . . . . 
    . . . . . 3 . 3 . 3 . . . . . . 
    . . . . . 3 3 3 3 3 . 3 . . . . 
    . . 3 3 . . . . 3 3 . 3 3 . . . 
    . 3 3 . . . . . 3 3 . . 3 3 . . 
    . 3 . . . . . . 3 3 . . . 3 . . 
    . . . . . . . 3 3 3 . . . 3 . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup),
sprites.create(img`
    . . . . . 6 . . . . . . . . . . 
    . 6 6 . . . 6 . . . . 6 6 . . . 
    . . 6 6 . . 6 6 . . 6 6 . . . . 
    . . . 6 . . . . . . . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 . 6 . 6 . 6 6 6 6 . 
    6 6 6 . . 6 6 . 6 6 . . . . . . 
    . . . . . 6 . 6 . 6 . . . . . . 
    . . . . . 6 6 6 6 6 . 6 . . . . 
    . . 6 6 . . . . 6 6 . 6 6 . . . 
    . 6 6 . . . . . 6 6 . . 6 6 . . 
    . 6 . . . . . . 6 6 . . . 6 . . 
    . . . . . . . 6 6 6 . . . 6 . . 
    . . . . . . . . 6 6 . . . . . . 
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup),
sprites.create(img`
    . . . . . b . . . . . . . . . . 
    . b b . . . b . . . . b b . . . 
    . . b b . . b b . . b b . . . . 
    . . . b . . . . . . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b . b . b . b b b b . 
    b b b . . b b . b b . . . . . . 
    . . . . . b . b . b . . . . . . 
    . . . . . b b b b b . b . . . . 
    . . b b . . . . b b . b b . . . 
    . b b . . . . . b b . . b b . . 
    . b . . . . . . b b . . . b . . 
    . . . . . . . b b b . . . b . . 
    . . . . . . . . b b . . . . . . 
    . . . . . . . b b b . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
]
let mySprite = game.askForString("Choose Difficulty (E,M,H)", 1)
if (mySprite == "E") {
    info.startCountdown(600)
} else if (mySprite == "M") {
    info.startCountdown(480)
} else {
    info.startCountdown(300)
}
for (let value of tiles.getTilesByType(sprites.dungeon.darkGroundNorthEast1)) {
    Chest = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.chest_)
    Chest.setPosition(value.x, value.y)
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
