input.onButtonPressed(Button.A, function () {
    if (SWITCH == 0) {
        _1_NUMBER += 1
        basic.showNumber(_1_NUMBER)
    }
    if (SWITCH == 1) {
        _2_NUMBER += 1
        basic.showNumber(_2_NUMBER)
    }
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (OP == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (OP == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (OP == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    OP = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    SWITCH += 1
    if (SWITCH == 2) {
        if (OP == 1) {
            basic.showNumber(_1_NUMBER + _2_NUMBER)
        } else {
            if (OP == 2) {
                basic.showNumber(_1_NUMBER - _2_NUMBER)
            } else {
                if (OP == 3) {
                    basic.showNumber(_1_NUMBER * _2_NUMBER)
                } else {
                    if (OP == 3) {
                        basic.showNumber(_1_NUMBER * _2_NUMBER)
                    } else {
                        basic.showNumber(_1_NUMBER / _2_NUMBER)
                    }
                    basic.clearScreen()
                }
            }
        }
    }
})
let OP = 0
let SWITCH = 0
let _2_NUMBER = 0
let _1_NUMBER = 0
_1_NUMBER = 0
_2_NUMBER = 0
SWITCH = 0
OP = 0
