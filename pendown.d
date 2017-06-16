/*
    This file is part of the Pendown distribution.

    https://github.com/senselogic/GENESIS

    Copyright (C) 2017 Eric Pelzer (ecstatic.coder@gmail.com)

    Pendown is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, version 3.

    Pendown is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
*/

// == LOCAL

// -- IMPORTS

import std.ascii : isAlpha, isDigit, isLower, isUpper;
import std.file : readText;
import std.stdio : writeln;
import std.string : indexOf, replace, startsWith, toLower, toUpper;

// == GLOBAL

// -- TYPES

enum TOKEN_TYPE
{
    None,
    ShortComment,
    LongComment,
    String,
    Number,
    Constant,
    LowerCaseIdentifier,
    UpperCaseIdentifier,
    MinorCaseIdentifier,
    MajorCaseIdentifier,
    Identifier,
    Keyword,
    Type,
    Qualifier,
    Pragma,
    Operator,
    Separator,
    Delimiter,
    Special,
    Spacing,
    Count
}

// ~~

class TOKEN
{
    // -- ATTRIBUTES

    TOKEN_TYPE
        Type;
    string
        Text;
}

// ~~

class CODE
{
    TOKEN[]
        TokenArray;
    string[ TOKEN_TYPE.Count ]
        ColorPrefixArray,
        ColorSuffixArray;
        
    // ~~
        
    this(
        )
    {
        ColorPrefixArray[ TOKEN_TYPE.ShortComment ] = "°";
        ColorPrefixArray[ TOKEN_TYPE.LongComment ] = "°";
        ColorPrefixArray[ TOKEN_TYPE.String ] = "²";
        ColorPrefixArray[ TOKEN_TYPE.Number ] = "²";
        ColorPrefixArray[ TOKEN_TYPE.Constant ] = "²";
        ColorPrefixArray[ TOKEN_TYPE.LowerCaseIdentifier ] = "";
        ColorPrefixArray[ TOKEN_TYPE.UpperCaseIdentifier ] = "²²";
        ColorPrefixArray[ TOKEN_TYPE.MinorCaseIdentifier ] = "";
        ColorPrefixArray[ TOKEN_TYPE.MajorCaseIdentifier ] = "";
        ColorPrefixArray[ TOKEN_TYPE.Identifier ] = "²";
        ColorPrefixArray[ TOKEN_TYPE.Keyword ] = "¹";
        ColorPrefixArray[ TOKEN_TYPE.Type ] = "²";
        ColorPrefixArray[ TOKEN_TYPE.Qualifier ] = "²";
        ColorPrefixArray[ TOKEN_TYPE.Pragma ] = "²";
        ColorPrefixArray[ TOKEN_TYPE.Operator ] = "°";
        ColorPrefixArray[ TOKEN_TYPE.Separator ] = "°";
        ColorPrefixArray[ TOKEN_TYPE.Delimiter ] = "°";
        ColorPrefixArray[ TOKEN_TYPE.Special ] = "°";
        
        ColorSuffixArray = ColorPrefixArray;
    }

    // ~~
        
    void SetTokenArray(
        string text
        )
    {
        char
            character,
            delimiter_character,
            next_character;
        long
            character_index;
        TOKEN
            token;

        TokenArray = [];

        token = null;
        delimiter_character = 0;

        for ( character_index = 0;
              character_index <= text.length;
              ++character_index )
        {
            if ( character_index < text.length )
            {
                character = text[ character_index ];
            }
            else
            {
                character = 0;
            }

            if ( character_index + 1 < text.length )
            {
                next_character = text[ character_index + 1 ];
            }
            else
            {
                next_character = 0;
            }

            if ( token !is null )
            {
                if ( token.Type == TOKEN_TYPE.String )
                {
                    if ( character == delimiter_character )
                    {
                        token.Text ~= character;

                        token = null;
                        character = 0;
                    }
                    else if ( character == '\\' )
                    {
                        token.Text ~= next_character;

                        ++character_index;
                    }
                    else
                    {
                        token.Text ~= character;
                    }
                }
                else if ( token.Type == TOKEN_TYPE.ShortComment )
                {
                    if ( character == '\r'
                         || character == '\n' )
                    {
                        token = null;
                    }
                    else
                    {
                        token.Text ~= character;
                    }
                }
                else if ( token.Type == TOKEN_TYPE.LongComment )
                {
                    if ( character == '*'
                         && next_character == '/' )
                    {
                        token.Text ~= "*/";

                        token = null;
                        character = 0;

                        ++character_index;
                    }
                    else
                    {
                        token.Text ~= character;
                    }
                }
                else if ( ( token.Type == TOKEN_TYPE.Number
                            && ( character.isDigit()
                                 || ( character == '.' && next_character.isDigit() )
                                 || character.isAlpha() ) )
                          || ( token.Type == TOKEN_TYPE.Identifier
                               && ( character.isAlpha()
                                    || character.isDigit()
                                    || character == '_' ) )
                          || ( token.Type == TOKEN_TYPE.Operator
                               && "~+-*/%^$&|?:!=<>#".indexOf( character ) >= 0 ) )
                {
                    token.Text ~= character;
                }
                else
                {
                    if ( token.Type == TOKEN_TYPE.Identifier )
                    {
                        if ( token.Text == "false"
                          || token.Text == "true"
                          || token.Text == "null"
                          || token.Text == "nullptr"
                          || token.Text == "undefined" )
                        {
                            token.Type = TOKEN_TYPE.Constant;
                        }
                        else if ( token.Text == "if"
                             || token.Text == "else"
                             || token.Text == "do"
                             || token.Text == "while"
                             || token.Text == "for"
                             || token.Text == "foreach"
                             || token.Text == "switch"
                             || token.Text == "case"
                             || token.Text == "default"
                             || token.Text == "break"
                             || token.Text == "continue"
                             || token.Text == "return"
                             || token.Text == "try"
                             || token.Text == "catch"
                             || token.Text == "throw"
                             || token.Text == "using"
                             || token.Text == "namespace"
                             || token.Text == "new"
                             || token.Text == "delete"
                             || token.Text == "import"
                             || token.Text == "this" )
                        {
                            token.Type = TOKEN_TYPE.Keyword;
                        }
                        else if ( token.Text == "void"
                                  || token.Text == "bool"
                                  || token.Text == "char"
                                  || token.Text == "dchar"
                                  || token.Text == "ubyte"
                                  || token.Text == "byte"
                                  || token.Text == "ushort"
                                  || token.Text == "short"
                                  || token.Text == "uint"
                                  || token.Text == "int"
                                  || token.Text == "ulong"
                                  || token.Text == "long"
                                  || token.Text == "signed"
                                  || token.Text == "unsigned"
                                  || token.Text == "float"
                                  || token.Text == "double"
                                  || token.Text == "string"
                                  || token.Text == "auto" )
                        {
                            token.Type = TOKEN_TYPE.Type;
                        }
                        else if ( token.Text == "const"
                                  || token.Text == "mutable"
                                  || token.Text == "virtual"
                                  || token.Text == "volatile"
                                  || token.Text == "register"
                                  || token.Text == "explicit"
                                  || token.Text == "friend"
                                  || token.Text == "inline"
                                  || token.Text == "template"
                                  || token.Text == "typename"
                                  || token.Text == "class"
                                  || token.Text == "struct"
                                  || token.Text == "union"
                                  || token.Text == "enum"
                                  || token.Text == "typedef"
                                  || token.Text == "static"
                                  || token.Text == "public"
                                  || token.Text == "protected"
                                  || token.Text == "private"
                                  || token.Text == "override"
                                  || token.Text == "final" )
                        {
                            token.Type = TOKEN_TYPE.Qualifier;
                        }
                        else if ( token.Text.startsWith( '#' ) )
                        {
                            token.Type = TOKEN_TYPE.Pragma;
                        }
                        else if ( token.Text == token.Text.toLower() )
                        {
                            token.Type = TOKEN_TYPE.LowerCaseIdentifier;
                        }
                        else if ( token.Text == token.Text.toUpper()
                                  && token.Text.length >= 2 )
                        {
                            token.Type = TOKEN_TYPE.UpperCaseIdentifier;
                        }
                        else if ( token.Text[ 0 ].isLower() )
                        {
                            token.Type = TOKEN_TYPE.MinorCaseIdentifier;
                        }
                        else if ( token.Text[ 0 ].isUpper() )
                        {
                            token.Type = TOKEN_TYPE.MajorCaseIdentifier;
                        }
                    }

                    token = null;
                }
            }

            if ( token is null
                 && character != 0 )
            {
                token = new TOKEN;

                if ( character == '/'
                          && next_character == '/' )
                {
                    token.Type = TOKEN_TYPE.ShortComment;
                    token.Text = "//";

                    ++character_index;
                }
                else if ( character == '/'
                          && next_character == '*' )
                {
                    token.Type = TOKEN_TYPE.LongComment;
                    token.Text = "/*";

                    ++character_index;
                }
                else if ( character == '\''
                     || character == '\"'
                     || character == '`' )
                {
                    token.Type = TOKEN_TYPE.String;
                    token.Text ~= character;

                    delimiter_character = character;
                }
                else if ( character.isDigit()
                          || ( character == '-'
                               &&  next_character.isDigit() ) )
                {
                    token.Type = TOKEN_TYPE.Number;
                    token.Text ~= character;
                }
                else if ( character.isAlpha()
                          || character == '_'
                          || ( character == '#' && next_character.isAlpha() ) )
                {
                    token.Type = TOKEN_TYPE.Identifier;
                    token.Text ~= character;
                }
                else if ( "~+-*/%^$&|!=<>#".indexOf( character ) >= 0 )
                {
                    token.Type = TOKEN_TYPE.Operator;
                    token.Text ~= character;
                }
                else if ( ".,;".indexOf( character ) >= 0 )
                {
                    token.Type = TOKEN_TYPE.Separator;
                    token.Text ~= character;
                }
                else if ( "()[]{}".indexOf( character ) >= 0 )
                {
                    token.Type = TOKEN_TYPE.Delimiter;
                    token.Text ~= character;
                }
                else if ( " \t\r\n".indexOf( character ) >= 0 )
                {
                    token.Type = TOKEN_TYPE.Spacing;
                    token.Text ~= character;
                }
                else
                {
                    token.Type = TOKEN_TYPE.Special;
                    token.Text ~= character;
                }

                TokenArray ~= token;

                if ( token.Type >= TOKEN_TYPE.Separator )
                {
                    token = null;
                }
            }
        }
    }

    // ~~

    void EscapeCharacters(
        )
    {
        dchar
            character,
            prior_character;
        string
            token_text;

        foreach ( ref token; TokenArray )
        {
            token_text = "";
            prior_character = 0;

            foreach ( wchar character; token.Text )
            {
                if ( "\\`°¹²³!#@".indexOf( character ) >= 0
                     || ( "+-<$>*%^,~_{}[]:".indexOf( character ) >= 0
                          && character == prior_character ) )
                {
                    token_text ~= '\\';
                }

                token_text ~= character;

                prior_character = character;
            }

            token.Text = token_text;
        }
    }

    // ~~

    void SetText(
        string text
        )
    {
        SetTokenArray( text );
        EscapeCharacters();
    }

    // ~~

    string GetHighlightedText(
        )
    {
        string
            highlighted_text;

        foreach ( ref token; TokenArray )
        {
            highlighted_text ~= ColorPrefixArray[ token.Type ];
            highlighted_text ~= token.Text;
            highlighted_text ~= ColorSuffixArray[ token.Type ];
        }

        return highlighted_text;
    }
}

// ~~

void HighlightFile(
    string file_path
    )
{
    string
        highlighted_text,
        text;
    CODE
        code;

    text = file_path.readText();

    code = new CODE;
    code.SetText( text );

    highlighted_text = code.GetHighlightedText();

    writeln( ":::" );
    writeln( highlighted_text );
    writeln( ":::" );
}

// ~~

void main(
    string[] argument_array
    )
{
    argument_array = argument_array[ 1 .. $ ];

    HighlightFile( argument_array[ 0 ] );
}

