place template new_create:new_create ~-6 ~ ~-12
tp @s ~ ~4 ~
execute at @s run setworldspawn ~ ~ ~
data modify storage new_create spawnpoint_structure set value "111"