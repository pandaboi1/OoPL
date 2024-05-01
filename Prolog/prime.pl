%Setup
:- initialization(main).

%Main Function
main :-
    repeat,
    write('Enter a number (or type "exit" to quit): '),

    %Reads line from user and convers it to ASCII code and stores it in 'Input'
    read_line_to_codes(user_input, Input), 
    %Atoms are Prologs way of representing name, identifiers, or symbols
    atom_codes(AtomInput, Input), (
        AtomInput = 'exit' -> !; (
            atom_number(AtomInput, Number), (
                is_prime(Number) -> 
                format('~w is prime.~n', [Number]);
                format('~w is not prime.~n', [Number])
            ),
            fail
        )
    ),
    halt.

%is_Prime Method
is_prime(2) :- !. %if 2
is_prime(3) :- !. %if 3

is_prime(Num) :-
    integer(Num),    %Converts atom into integer
    Num > 3,         %Ensures num > 3
    Num mod 2 =\= 0, %If Num NOT divisible by 2
    \+ divisible(Num, 3). %If Num NOT divisible by 3, excuding 3

%divisible Methods
divisible(Num, Div) :-
    Num mod Div =:= 0.

divisible(Num, Div) :-
    Div * Div < Num,
    NextDiv is Div + 2,
    divisible(Num, NextDiv).