execute store result score $daycurent DayCounterSc run time query day
execute if score $dayprevious DayCounterSc < $daycurent DayCounterSc run function new_create:showtitle
execute store result score $dayprevious DayCounterSc run time query day