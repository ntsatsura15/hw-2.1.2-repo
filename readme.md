# Три вида операторов

**1. унарный**
> операция применяется к одному операнду, но ничего не делается в арифметическом плане, операнд приводится к числовому типу

```
alert (-x);

let amount = -10;
```

**2. бинарный** 
> действие выполняется с двумя операндами

```
let item = 10;

let userName = “Anna”

alert (x-y)
```

**3. тернарный** 
> действие с тремя операндами

```
let ageUser = 20;

let accessВlocking = (ageUser < 18) ? Blocking : Allow
```

# Динамическая типизация данных 

- означает, что к переменной не привязано только одно значение типа, с учетом которого необходимо выбирать переменную
- после присоединения к переменной данных и запуска кода, типизация переменной произойдет автоматически согласно ее наполнению

```
Например, переменная возраст - age

age = 20 
    *типа Number*

age = “twenty” 
    *типа String*

age = true 
    *типа Boolean*
```