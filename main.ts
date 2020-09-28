let current_temperature = 0
// Created by: Nina Mathew
// Created on: 9/28/20
// This program uses Variables
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
