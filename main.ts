namespace SpriteKind {
    export const powerup = SpriteKind.create()
    export const chest_ = SpriteKind.create()
    export const open_chest = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    player1.setPosition(120, 27)
    for (let value of tiles.getTilesByType(sprites.dungeon.darkGroundNorthEast1)) {
        Chest = sprites.create(img`
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
            `, SpriteKind.open_chest)
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
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (pickaxe.image.equals(img`
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
        `)) {
        if (player1.tileKindAt(TileDirection.Left, sprites.dungeon.floorDark3)) {
            tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(location, false)
        } else if (player1.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorDark3)) {
            tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(location, false)
        } else if (player1.tileKindAt(TileDirection.Left, sprites.dungeon.floorLight3)) {
            tiles.setTileAt(location, assets.tile`myTile3`)
            tiles.setWallAt(location, false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (inventory_1.image.equals(img`
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
        `)) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(player1, tiles.getTileLocation(2, 4))
        sprites.destroyAllSpritesOfKind(SpriteKind.chest_)
        sprites.destroyAllSpritesOfKind(SpriteKind.open_chest)
    } else if (inventory_2.image.equals(img`
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
        `)) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(player1, tiles.getTileLocation(2, 4))
        sprites.destroyAllSpritesOfKind(SpriteKind.chest_)
        sprites.destroyAllSpritesOfKind(SpriteKind.open_chest)
    } else if (inventory_3.image.equals(img`
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
        `)) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(player1, tiles.getTileLocation(2, 4))
        sprites.destroyAllSpritesOfKind(SpriteKind.chest_)
        sprites.destroyAllSpritesOfKind(SpriteKind.open_chest)
    } else if (inventory_4.image.equals(img`
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
        `)) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(player1, tiles.getTileLocation(2, 4))
        sprites.destroyAllSpritesOfKind(SpriteKind.chest_)
        sprites.destroyAllSpritesOfKind(SpriteKind.open_chest)
    } else if (inventory_5.image.equals(img`
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
        `)) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(player1, tiles.getTileLocation(2, 4))
        sprites.destroyAllSpritesOfKind(SpriteKind.chest_)
        sprites.destroyAllSpritesOfKind(SpriteKind.open_chest)
    } else {
        game.showLongText("You don't have the basement key yet!", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(player1, tiles.getTileLocation(2, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.chest_, function (sprite, otherSprite) {
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
    otherSprite.setKind(SpriteKind.open_chest)
    items(list)
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
function items (list: Image[]) {
    if (list.length == 5) {
        inventory_1.setImage(list.removeAt(randint(0, list.length - 1)))
    } else if (list.length == 4) {
        inventory_2.setImage(list.removeAt(randint(0, list.length - 1)))
    } else if (list.length == 3) {
        inventory_3.setImage(list.removeAt(randint(0, list.length - 1)))
    } else if (list.length == 2) {
        inventory_4.setImage(list.removeAt(randint(0, list.length - 1)))
    } else {
        inventory_5.setImage(list.removeAt(randint(0, list.length - 1)))
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    pickaxe = sprites.create(img`
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
    while (!(controller.A.isPressed())) {
        game.showLongText("You found a pickaxe! (Can break cracked brick tiles)", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level24`)
    tiles.placeOnTile(player1, tiles.getTileLocation(8, 14))
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level24`)
    tiles.placeOnTile(player1, tiles.getTileLocation(8, 14))
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
    for (let value of inventory) {
        if (inventory[value].image.equals(img`
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
            `)) {
            tiles.setCurrentTilemap(tilemap`level3`)
            tiles.placeOnTile(player1, tiles.getTileLocation(8, 14))
        } else {
            game.showLongText("You don't have the closet key yet!", DialogLayout.Bottom)
        }
    }
})
let pickaxe: Sprite = null
let player1: Sprite = null
let Chest: Sprite = null
let inventory: Sprite[] = []
let list: Image[] = []
let inventory_5: Sprite = null
let inventory_4: Sprite = null
let inventory_3: Sprite = null
let inventory_2: Sprite = null
let inventory_1: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
inventory_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup)
inventory_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup)
inventory_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup)
inventory_4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup)
inventory_5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup)
list = [
img`
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
    `,
img`
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
    `,
img`
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
    `,
img`
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
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . d d d . 
    . . . . . . . . . . . d d 7 d . 
    . . . . . . . . . . d d 7 d d . 
    . . . . . . . . . d d 7 d d . . 
    . . . . . . . . d d 7 d d . . . 
    . . . . . . . d d 7 d d . . . . 
    . e e . . . d d 7 d d . . . . . 
    . e 7 e . d d 7 d d . . . . . . 
    . . e e e e e d d . . . . . . . 
    . . . e 7 7 e d . . . . . . . . 
    . . e e 7 7 e . . . . . . . . . 
    . e e e e e e e . . . . . . . . 
    e e e e e . e 7 e . . . . . . . 
    e 7 e e . . . e e . . . . . . . 
    e e e . . . . . . . . . . . . . 
    `
]
inventory = [
inventory_1,
inventory_2,
inventory_3,
inventory_4,
inventory_5
]
let Difficulty = game.askForString("Choose Difficulty (E,M,H)", 1)
if (Difficulty == "E") {
    info.startCountdown(600)
} else if (Difficulty == "M") {
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
tiles.placeOnTile(player1, tiles.getTileLocation(7, 8))
controller.moveSprite(player1)
scene.cameraFollowSprite(player1)
pickaxe = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.powerup)
game.onUpdate(function () {
    pickaxe.setPosition(scene.cameraProperty(CameraProperty.X) - -45, scene.cameraProperty(CameraProperty.Y) - 50)
    inventory_1.setPosition(scene.cameraProperty(CameraProperty.X) - 70, scene.cameraProperty(CameraProperty.Y) - 50)
    inventory_2.setPosition(scene.cameraProperty(CameraProperty.X) - 55, scene.cameraProperty(CameraProperty.Y) - 50)
    inventory_3.setPosition(scene.cameraProperty(CameraProperty.X) - 40, scene.cameraProperty(CameraProperty.Y) - 50)
    inventory_4.setPosition(scene.cameraProperty(CameraProperty.X) - 25, scene.cameraProperty(CameraProperty.Y) - 50)
    inventory_5.setPosition(scene.cameraProperty(CameraProperty.X) - -30, scene.cameraProperty(CameraProperty.Y) - 50)
})
