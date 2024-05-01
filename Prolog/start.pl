% query-> temperature_converter.

% Conversion Functions
celsius_to_fahrenheit(C, F) :-
    F is (C * 9 / 5) + 32.

celsius_to_Kelvin(C, K) :-
    K is (C + 273.15).

fahrenheit_to_celsius(F, C) :-
    C is (F - 32) * 5/9.

fahrenheit_to_Kelvin(F, K) :-
    K is (F - 32) * 5/9 + 273.15.

kelvin_to_Fahrenheit(K, F) :-
    F is (K - 273.15) * 9/5 + 32.

kelvin_to_Celsius(K, C) :-
    C is K - 273.15.

% Predicate query 
temperature_converter :-
    writeln('Welcome to Temperature converter calculator'),
    writeln('Give a Temperature Number'),
    read_line_to_string(user_input, Temp),
    atom_number(Temp, Number),
    writeln('Enter a Temperature Scale for the Temperature that you have input (k for Kelvin, f for Fahrenheit, c for Celsius)'),
    read_line_to_string(user_input, TScaleInput),
    downcase_atom(TScaleInput, TScale),
    (   TScale = 'c' ->
            writeln('Give Scale to convert to (k for Kelvin, f for Fahrenheit)'),
            read_line_to_string(user_input, ScaledInput),
            downcase_atom(ScaledInput, Scaled),
            (   Scaled = 'f' ->
                    celsius_to_fahrenheit(Number, Converted),
                    writeln('Converted to: '),
                    atom_concat(Converted, ' Fahrenheit', Output),
                    writeln(Output)
                ;   Scaled = 'k' ->
                    celsius_to_Kelvin(Number, Converted),
                    writeln('Converted to: '),
                    atom_concat(Converted, ' Kelvin', Output),
                    writeln(Output)
                ;   writeln('Invalid scale for conversion')
            )
        ;   TScale = 'f' ->
            writeln('Give Scale to convert to (k for Kelvin, c for Celsius)'),
            read_line_to_string(user_input, ScaledInput),
            downcase_atom(ScaledInput, Scaled),
            (   Scaled = 'c' ->
                    fahrenheit_to_celsius(Number, Converted),
                    writeln('Converted to: '),
                    atom_concat(Converted, ' Celsius', Output),
                    writeln(Output)
                ;   Scaled = 'k' ->
                    fahrenheit_to_Kelvin(Number, Converted),
                    writeln('Converted to: '),
                    atom_concat(Converted, ' Kelvin', Output),
                    writeln(Output)
                ;   writeln('Invalid scale for conversion')
            )
        ;   TScale = 'k' ->
            writeln('Give Scale to convert to (f for Fahrenheit, c for Celsius)'),
            read_line_to_string(user_input, ScaledInput),
            downcase_atom(ScaledInput, Scaled),
            (   Scaled = 'f' ->
                    kelvin_to_Fahrenheit(Number, Converted),
                    writeln('Converted to: '),
                    atom_concat(Converted, ' Fahrenheit', Output),
                    writeln(Output)
                ;   Scaled = 'c' ->
                    kelvin_to_Celsius(Number, Converted),
                    writeln('Converted to: '),
                    atom_concat(Converted, ' Celsius', Output),
                    writeln(Output)
                ;   writeln('Invalid scale for conversion')
            )
        ;   writeln('Invalid input for temperature scale')
    ).
