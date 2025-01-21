# Calc library API

## **sum(a,b)**

Function returns the sum of 2 numbers

Numbers are passed as parameters a and b

parameters:
a number, -500 <= a <= 500
b number, -500 <= b <= 500

returns the sum of given numbers a and b as number, -1000 <= sum <= 1000

if parameter is missing, then it throws an exception ` 'parameter missing'``
if there is only one parameter and it is not number throws an exception `'parameter is missing'`

if parameter are not numbers, then it throws an exception ` 'only numbers allowed'``
if parameter are not right intervall, then it throws an exception  `'numbers not between -500 and 500'``

we dont know with which language it is written we just need to know

# Test cases

## sum with integers

sum(1,1) returns 2
sum(2,3) returns 5

a, b, result
[1, 1, 2],
[2, 3, 5],
[-2, -4, -6],
[2, -4, -2],
[-2, 4, 2],
[0, 0, 0],
[0, 3, 3],
[3, 0, 3],
[-3, 0, -3],
[0, -3, -3],
[123, 200, 323],
[-500, -500, -1000],
[500, 500, 1000],
[500, -500, 0],
[-500, 500, 0],

## sum with floats

a, b, result
[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[2.4, -2.5, -0.1],
[499.9, 500.0, 999.9],
[-499.9, 500.0, 0.1],

## testing missing parameter

```
sum() throws an exception 'parameter missing',
sum(1) throws an exception 'parameter missing',
sum('a') throws an exception 'parameter missing'
```

## testing parameters are not numbers

```
sum('1','2') throws an exception 'only numbers allowed'
sum('1',2)
sum(1,'2')
sum('a','b')
sum('','')
sum(true,true)
sum(false,false)
```

## testing parameters not between -500 and 500

```
sum(1000,500) throws on exception 'numbers not between -500 and 500'
sum(500,1000)
sum(500,501)
sum(-500.1, 200)
sum(300, 500.1)
```
