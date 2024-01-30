namespace SpriteKind {
    export const powerup = SpriteKind.create()
    export const chest_ = SpriteKind.create()
    export const open_chest = SpriteKind.create()
    export const decoration = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    player1.setPosition(120, 27)
    for (let value of tiles.getTilesByType(sprites.dungeon.darkGroundNorthEast1)) {
        if (Chest == sprites.create(img`
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
            `, SpriteKind.open_chest)) {
            Chest.setImage(img`
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
            tiles.placeOnTile(Chest, chest_position.removeAt(randint(0, chest_position.length - 1)))
        } else {
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
            tiles.placeOnTile(Chest, chest_position.removeAt(randint(0, chest_position.length - 1)))
        }
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
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
        if (sprite.tileKindAt(TileDirection.Left, sprites.dungeon.floorDark3)) {
            tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(location, false)
        } else if (sprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorDark3)) {
            tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
            tiles.setWallAt(location, false)
        } else if (sprite.tileKindAt(TileDirection.Left, sprites.dungeon.floorLight5)) {
            tiles.setTileAt(location, assets.tile`myTile1`)
            tiles.setWallAt(location, false)
        } else if (sprite.tileKindAt(TileDirection.Top, sprites.dungeon.floorLight5)) {
            tiles.setTileAt(location, assets.tile`myTile1`)
            tiles.setWallAt(location, false)
        } else if (sprite.tileKindAt(TileDirection.Right, sprites.dungeon.floorLight5)) {
            tiles.setTileAt(location, assets.tile`myTile1`)
            tiles.setWallAt(location, false)
        } else if (sprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLight5)) {
            tiles.setTileAt(location, assets.tile`myTile1`)
            tiles.setWallAt(location, false)
        } else if (sprite.tileKindAt(TileDirection.Left, assets.tile`myTile9`)) {
            tiles.setTileAt(location, assets.tile`myTile3`)
            tiles.setWallAt(location, false)
        } else if (sprite.tileKindAt(TileDirection.Right, assets.tile`myTile9`)) {
            tiles.setTileAt(location, assets.tile`myTile3`)
            tiles.setWallAt(location, false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    for (let value4 of sprites.allOfKind(SpriteKind.powerup)) {
        if (value4.image.equals(img`
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
            sprites.destroyAllSpritesOfKind(SpriteKind.open_chest)
            sprites.destroyAllSpritesOfKind(SpriteKind.chest_)
            SpawnEnemies(Enemies)
        }
    }
    chest_position = [
    tiles.getTileLocation(13, 2),
    tiles.getTileLocation(3, 3),
    tiles.getTileLocation(4, 6),
    tiles.getTileLocation(11, 8),
    tiles.getTileLocation(1, 14)
    ]
})
function SpawnEnemies (enemylist: Image[]) {
    for (let value2 of tiles.getTilesByType(sprites.dungeon.collectibleInsignia)) {
        Creatures = sprites.create(enemylist[randint(0, enemylist.length - 1)], SpriteKind.Enemy)
        tiles.placeOnTile(Creatures, value2)
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 0), assets.tile`myTile4`)) {
            tiles.setTileAt(value2, assets.tile`myTile3`)
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(4, 0), sprites.dungeon.greenOuterNorthEast)) {
            tiles.setTileAt(value2, sprites.dungeon.floorDarkDiamond)
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 0), sprites.dungeon.floorLight2)) {
            tiles.setTileAt(value2, assets.tile`myTile1`)
        }
        Creatures.setVelocity(50, 0)
        Creatures.setBounceOnWall(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(player1, tiles.getTileLocation(8, 1))
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value10 of sprites.allOfKind(SpriteKind.powerup)) {
        if (value10.image.equals(img`
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
            `)) {
            animation.runImageAnimation(
            player1,
            [img`
                . f f f . f f f f . f f f . . . . . 
                f f f f f c c c c f f f f f . . . . 
                f f f f b c c c c b f f f f . . . . 
                f f f c 3 c c c c 3 c f f f . . . . 
                . f 3 3 c c c c c c 3 3 f . . . . . 
                . f c c c c c c c c c c f . . . . . 
                . f f c c c c c c c c f f . . . . . 
                . f f f c c c c c c f f f . . d d . 
                . f f f f f f f f f f f f . d 7 d . 
                . . f f f f f f f f f e . d 7 d . . 
                . . e f f f f f f f f e e e d . . . 
                . e 4 f f f f f f f f 4 7 e . . . . 
                . 4 d f 3 3 3 3 3 3 c d 4 e e . . . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . . . . . 
                . . . . f f f f f f . . . . . . . . 
                . . . . f f . . f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . . . . . 
                f f f f f c c c c f f f f f . . . . 
                f f f f b c c c c b f f f f . . . . 
                f f f c 3 c c c c 3 c f f f . . . . 
                . f 3 3 c c c c c c 3 3 f . . . . . 
                . f c c c c c c c c c f f . . . . . 
                . f f c c c c c c c c f f . . . . . 
                . f f c c c c c c f f f f . . . . . 
                . f f f f f f f f f f f f . . . . . 
                . . f f f f f f f f f f . e e . . . 
                . . e f f f f f f f f e 7 e . . . . 
                . . e f f f f f f f f 4 e e d . . . 
                . . 4 f 3 3 3 3 3 e d d e d 7 d . . 
                . . e f f f f f f e e 4 . . d 7 d . 
                . . . f f f . . . . . . . . . d d . 
                `,img`
                . . . . . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . . . . . 
                f f f f f c c c c f f f f f . . . . 
                f f f f b c c c c b f f f f . . . . 
                f f f c 3 c c c c 3 c f f f . . . . 
                . f 3 3 c c c c c c 3 3 f . . . . . 
                . f f c c c c c c c c c f . . . . . 
                . f f c c c c c c c c f f d . . . . 
                . f f f f c c c c c c f f d . . . . 
                . f f f f f f f f f f f f d . . . . 
                . . f f f f f f f f f f 7 d . . . . 
                . . e f f f f f f f f e e e . . . . 
                . e 4 f f f f f f f f e 7 e . . . . 
                . 4 d d e 3 3 3 3 3 f 4 e . . . . . 
                . . 4 e e f f f f f f e . . . . . . 
                . . . . . . . . f f f . . . . . . . 
                `,img`
                . f f f . f f f f . f f f . . . . . 
                f f f f f c c c c f f f f f . . . . 
                f f f f b c c c c b f f f f . . . . 
                f f f c 3 c c c c 3 c f f f . . . . 
                . f 3 3 c c c c c c 3 3 f . . . . . 
                . f c c c c c c c c c c f . . . . . 
                . f f c c c c c c c c f f . . . . . 
                . f f f c c c c c c f f f . . . . . 
                . f f f f f f f f f f f f . . . . . 
                . . f f f f f f f f f f . . . . . . 
                . . e f f f f f f f f e . . . . . . 
                . e 4 f f f f f f f f 4 e . . . . . 
                . 4 d f 3 3 3 3 3 3 c d 4 . . . . . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . . . . . 
                . . . . f f f f f f . . . . . . . . 
                . . . . f f . . f f . . . . . . . . 
                `],
            200,
            false
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(player1, tiles.getTileLocation(2, 1))
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.decoration)
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
    items(keys)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    for (let value8 of sprites.allOfKind(SpriteKind.powerup)) {
        if (value8.image.equals(img`
            . . . . . 9 . . . . . . . . . . 
            . 9 9 . . . 9 . . . . 9 9 . . . 
            . . 9 9 . . 9 9 . . 9 9 . . . . 
            . . . 9 . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . 9 . 9 . 9 . 9 9 9 9 . 
            9 9 9 . . 9 9 . 9 9 . . . . . . 
            . . . . . 9 . 9 . 9 . . . . . . 
            . . . . . 9 9 9 9 9 . 9 . . . . 
            . . 9 9 . . . . 9 9 . 9 9 . . . 
            . 9 9 . . . . . 9 9 . . 9 9 . . 
            . 9 . . . . . . 9 9 . . . 9 . . 
            . . . . . . . 9 9 9 . . . 9 . . 
            . . . . . . . . 9 9 . . . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            tiles.setCurrentTilemap(tilemap`level95`)
            tiles.placeOnTile(player1, tiles.getTileLocation(7, 14))
            game.setGameOverMessage(true, "You Escaped!")
            game.gameOver(true)
        }
    }
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(false, "You didn't escape :(")
    game.gameOver(false)
})
function items (list: Image[]) {
    if (list.length == 5) {
        inventory_1.setImage(list.removeAt(randint(0, keys.length - 1)))
    } else if (list.length == 4) {
        inventory_2.setImage(list.removeAt(randint(0, keys.length - 1)))
    } else if (list.length == 3) {
        inventory_3.setImage(list.removeAt(randint(0, keys.length - 1)))
    } else if (list.length == 2) {
        inventory_4.setImage(list.removeAt(randint(0, keys.length - 1)))
    } else {
        inventory_5.setImage(list.removeAt(randint(0, keys.length - 1)))
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
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverMessage(false, "You didn't escape :(")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    for (let value7 of sprites.allOfKind(SpriteKind.powerup)) {
        if (value7.image.equals(img`
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
            `)) {
            tiles.setCurrentTilemap(tilemap`level24`)
            tiles.placeOnTile(sprite, tiles.getTileLocation(8, 14))
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.decoration)
            SpawnEnemies(Enemies)
        }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    for (let value9 of sprites.allOfKind(SpriteKind.powerup)) {
        if (value9.image.equals(img`
            . . . . . 9 . . . . . . . . . . 
            . 9 9 . . . 9 . . . . 9 9 . . . 
            . . 9 9 . . 9 9 . . 9 9 . . . . 
            . . . 9 . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . 9 . 9 . 9 . 9 9 9 9 . 
            9 9 9 . . 9 9 . 9 9 . . . . . . 
            . . . . . 9 . 9 . 9 . . . . . . 
            . . . . . 9 9 9 9 9 . 9 . . . . 
            . . 9 9 . . . . 9 9 . 9 9 . . . 
            . 9 9 . . . . . 9 9 . . 9 9 . . 
            . 9 . . . . . . 9 9 . . . 9 . . 
            . . . . . . . 9 9 9 . . . 9 . . 
            . . . . . . . . 9 9 . . . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            tiles.setCurrentTilemap(tilemap`level95`)
            tiles.placeOnTile(player1, tiles.getTileLocation(7, 14))
            game.setGameOverMessage(true, "You Escaped!")
            game.gameOver(true)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    for (let value6 of sprites.allOfKind(SpriteKind.powerup)) {
        if (value6.image.equals(img`
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
            `)) {
            tiles.setCurrentTilemap(tilemap`level24`)
            tiles.placeOnTile(sprite, tiles.getTileLocation(8, 14))
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            SpawnEnemies(Enemies)
        }
    }
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
    for (let value5 of sprites.allOfKind(SpriteKind.powerup)) {
        if (value5.image.equals(img`
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
            tiles.placeOnTile(sprite, tiles.getTileLocation(8, 14))
            couch = sprites.create(img`
                ..cccc..........
                .c7776c.........
                c67776cccccccc..
                c67776cccccccc..
                c67776c6677777c.
                c67776c77777766c
                c67776c66666666c
                c67776c66666666c
                c67776ccccccc66c
                c67776c777776ccc
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67776c7777776c.
                c67766c7777766c.
                c66666ccccccccc.
                c66666ccccccccc.
                c66666c6677777c.
                c66666c77777766c
                c66666c77777766c
                c66666c66666666c
                c66666c66666666c
                c66666c66666666c
                c66666c66666666c
                .ccccccccccccccc
                .cbbc......cbbc.
                `, SpriteKind.decoration)
            tiles.placeOnTile(couch, tiles.getTileLocation(1, 6))
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            SpawnEnemies(Enemies)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(player1, tiles.getTileLocation(7, 1))
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.decoration)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    for (let value0 of sprites.allOfKind(SpriteKind.powerup)) {
        if (value0.image.equals(img`
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
            `)) {
            havesword = "yes"
        }
    }
    if (havesword == "yes") {
        if (controller.A.isPressed()) {
            animation.runImageAnimation(
            player1,
            [img`
                . f f f . f f f f . f f f . . . . . 
                f f f f f c c c c f f f f f . . . . 
                f f f f b c c c c b f f f f . . . . 
                f f f c 3 c c c c 3 c f f f . . . . 
                . f 3 3 c c c c c c 3 3 f . . . . . 
                . f c c c c c c c c c c f . . . . . 
                . f f c c c c c c c c f f . . . . . 
                . f f f c c c c c c f f f . . d d . 
                . f f f f f f f f f f f f . d 7 d . 
                . . f f f f f f f f f e . d 7 d . . 
                . . e f f f f f f f f e e e d . . . 
                . e 4 f f f f f f f f 4 7 e . . . . 
                . 4 d f 3 3 3 3 3 3 c d 4 e e . . . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . . . . . 
                . . . . f f f f f f . . . . . . . . 
                . . . . f f . . f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . . . . . 
                f f f f f c c c c f f f f f . . . . 
                f f f f b c c c c b f f f f . . . . 
                f f f c 3 c c c c 3 c f f f . . . . 
                . f 3 3 c c c c c c 3 3 f . . . . . 
                . f c c c c c c c c c f f . . . . . 
                . f f c c c c c c c c f f . . . . . 
                . f f c c c c c c f f f f . . . . . 
                . f f f f f f f f f f f f . . . . . 
                . . f f f f f f f f f f . e e . . . 
                . . e f f f f f f f f e 7 e . . . . 
                . . e f f f f f f f f 4 e e d . . . 
                . . 4 f 3 3 3 3 3 e d d e d 7 d . . 
                . . e f f f f f f e e 4 . . d 7 d . 
                . . . f f f . . . . . . . . . d d . 
                `,img`
                . . . . . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . . . . . 
                f f f f f c c c c f f f f f . . . . 
                f f f f b c c c c b f f f f . . . . 
                f f f c 3 c c c c 3 c f f f . . . . 
                . f 3 3 c c c c c c 3 3 f . . . . . 
                . f f c c c c c c c c c f . . . . . 
                . f f c c c c c c c c f f d . . . . 
                . f f f f c c c c c c f f d . . . . 
                . f f f f f f f f f f f f d . . . . 
                . . f f f f f f f f f f 7 d . . . . 
                . . e f f f f f f f f e e e . . . . 
                . e 4 f f f f f f f f e 7 e . . . . 
                . 4 d d e 3 3 3 3 3 f 4 e . . . . . 
                . . 4 e e f f f f f f e . . . . . . 
                . . . . . . . . f f f . . . . . . . 
                `,img`
                . f f f . f f f f . f f f . . . . . 
                f f f f f c c c c f f f f f . . . . 
                f f f f b c c c c b f f f f . . . . 
                f f f c 3 c c c c 3 c f f f . . . . 
                . f 3 3 c c c c c c 3 3 f . . . . . 
                . f c c c c c c c c c c f . . . . . 
                . f f c c c c c c c c f f . . . . . 
                . f f f c c c c c c f f f . . . . . 
                . f f f f f f f f f f f f . . . . . 
                . . f f f f f f f f f f . . . . . . 
                . . e f f f f f f f f e . . . . . . 
                . e 4 f f f f f f f f 4 e . . . . . 
                . 4 d f 3 3 3 3 3 3 c d 4 . . . . . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . . . . . 
                . . . . f f f f f f . . . . . . . . 
                . . . . f f . . f f . . . . . . . . 
                `],
            500,
            false
            )
            sprites.destroy(otherSprite)
            info.changeScoreBy(1)
        } else {
            statusbarplayer1.value += -1
            pause(100)
        }
    } else {
        statusbarplayer1.value += -1
        pause(100)
    }
})
let havesword = ""
let couch: Sprite = null
let Creatures: Sprite = null
let chest_position: tiles.Location[] = []
let pickaxe: Sprite = null
let Chest: Sprite = null
let Enemies: Image[] = []
let keys: Image[] = []
let inventory_5: Sprite = null
let inventory_4: Sprite = null
let inventory_3: Sprite = null
let inventory_2: Sprite = null
let inventory_1: Sprite = null
let player1: Sprite = null
let statusbarplayer1: StatusBarSprite = null
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
statusbarplayer1 = statusbars.create(100, 4, StatusBarKind.Health)
statusbarplayer1.attachToSprite(player1)
statusbarplayer1.positionDirection(CollisionDirection.Bottom)
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
keys = [
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
    . . . . . 9 . . . . . . . . . . 
    . 9 9 . . . 9 . . . . 9 9 . . . 
    . . 9 9 . . 9 9 . . 9 9 . . . . 
    . . . 9 . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 . 9 . 9 . 9 9 9 9 . 
    9 9 9 . . 9 9 . 9 9 . . . . . . 
    . . . . . 9 . 9 . 9 . . . . . . 
    . . . . . 9 9 9 9 9 . 9 . . . . 
    . . 9 9 . . . . 9 9 . 9 9 . . . 
    . 9 9 . . . . . 9 9 . . 9 9 . . 
    . 9 . . . . . . 9 9 . . . 9 . . 
    . . . . . . . 9 9 9 . . . 9 . . 
    . . . . . . . . 9 9 . . . . . . 
    . . . . . . . 9 9 9 . . . . . . 
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
Enemies = [
img`
    . . . . . . f f f f . . . . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . f b 1 1 1 1 1 1 b f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . f d 1 1 1 1 1 1 1 1 d f . . 
    . . f d 1 1 1 1 1 1 1 1 d f . . 
    . . f d d d 1 1 1 1 d d d f . . 
    . . f b d b f d d f b d b f . . 
    . . f c d c f 1 1 f c d c f . . 
    . . . f b 1 1 1 1 1 1 b f . . . 
    . . f f f c d b 1 b d f f f f . 
    f c 1 1 1 c b f b f c 1 1 1 c f 
    f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
    f b f b f f f f f f b f b f b f 
    . . . . . f f f f f f . . . . . 
    . . . . . . . f f f . . . . . . 
    `,
img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,
img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `,
img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `
]
let Difficulty = game.askForString("Choose Difficulty (e,m,h)", 1)
if (Difficulty == "e") {
    info.startCountdown(300)
} else if (Difficulty == "m") {
    info.startCountdown(180)
} else {
    info.startCountdown(80)
}
for (let value3 of tiles.getTilesByType(sprites.dungeon.darkGroundNorthEast1)) {
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
    Chest.setPosition(value3.x, value3.y)
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
