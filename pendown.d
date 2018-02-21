/*
    This file is part of the Pendown distribution.

    https://github.com/senselogic/PENDOWN

    Copyright (C) 2017 Eric Pelzer (ecstatic.coder@gmail.com)

    Pendown is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, version 3.

    Pendown is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Pendown.  If not, see <http://www.gnu.org/licenses/>.
*/

// == LOCAL

// -- IMPORTS

import core.stdc.stdlib : exit;
import std.ascii : isAlpha, isDigit, isLower, isUpper;
import std.conv : to;
import std.file : readText, write;
import std.stdio : writeln;
import std.string : endsWith, indexOf, join, replace, split, startsWith, strip, toLower, toUpper;

// == GLOBAL

// -- TYPES

class LANGUAGE
{
    bool IsConstant(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "false"
            || code_token.Text == "true"
            );
    }

    // ~~

    bool IsType(
        CODE_TOKEN code_token
        )
    {
        return false;
    }

    // ~~

    bool IsKeyword(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "if"
            || code_token.Text == "else"
            || code_token.Text == "do"
            || code_token.Text == "while"
            || code_token.Text == "for"
            || code_token.Text == "switch"
            || code_token.Text == "case"
            || code_token.Text == "default"
            || code_token.Text == "break"
            || code_token.Text == "continue"
            || code_token.Text == "return"
            );
    }
}

// ~~

class C_LANGUAGE : LANGUAGE
{
    override bool IsConstant(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "false"
            || code_token.Text == "true"
            );
    }

    // ~~

    override bool IsType(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "void"
            || code_token.Text == "bool"
            || code_token.Text == "char"
            || code_token.Text == "short"
            || code_token.Text == "int"
            || code_token.Text == "long"
            || code_token.Text == "signed"
            || code_token.Text == "unsigned"
            || code_token.Text == "float"
            || code_token.Text == "double"
            || code_token.Text == "auto"
            );
    }

    // ~~

    override bool IsKeyword(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "if"
            || code_token.Text == "else"
            || code_token.Text == "do"
            || code_token.Text == "while"
            || code_token.Text == "for"
            || code_token.Text == "switch"
            || code_token.Text == "case"
            || code_token.Text == "default"
            || code_token.Text == "break"
            || code_token.Text == "continue"
            || code_token.Text == "return"
            || code_token.Text == "goto"
            || code_token.Text == "sizeof"
            || code_token.Text == "struct"
            || code_token.Text == "union"
            || code_token.Text == "enum"
            || code_token.Text == "typedef"
            || code_token.Text == "const"
            || code_token.Text == "register"
            || code_token.Text == "volatile"
            || code_token.Text == "restrict"
            || code_token.Text == "inline"
            || code_token.Text == "static"
            || code_token.Text == "extern"
            || code_token.Text == "asm"
            );
    }
}

// ~~

class CPP_LANGUAGE : LANGUAGE
{
    override bool IsConstant(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "false"
            || code_token.Text == "true"
            || code_token.Text == "nullptr"
            );
    }

    // ~~

    override bool IsType(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "void"
            || code_token.Text == "bool"
            || code_token.Text == "char"
            || code_token.Text == "short"
            || code_token.Text == "int"
            || code_token.Text == "long"
            || code_token.Text == "signed"
            || code_token.Text == "unsigned"
            || code_token.Text == "float"
            || code_token.Text == "double"
            || code_token.Text == "auto"
            );
    }

    // ~~

    override bool IsKeyword(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "if"
            || code_token.Text == "else"
            || code_token.Text == "do"
            || code_token.Text == "while"
            || code_token.Text == "for"
            || code_token.Text == "switch"
            || code_token.Text == "case"
            || code_token.Text == "default"
            || code_token.Text == "break"
            || code_token.Text == "continue"
            || code_token.Text == "return"
            || code_token.Text == "goto"
            || code_token.Text == "try"
            || code_token.Text == "catch"
            || code_token.Text == "throw"
            || code_token.Text == "new"
            || code_token.Text == "delete"
            || code_token.Text == "this"
            || code_token.Text == "sizeof"
            || code_token.Text == "reinterpret_cast"
            || code_token.Text == "static_cast"
            || code_token.Text == "dynamic_cast"
            || code_token.Text == "using"
            || code_token.Text == "namespace"
            || code_token.Text == "public"
            || code_token.Text == "protected"
            || code_token.Text == "private"
            || code_token.Text == "template"
            || code_token.Text == "typename"
            || code_token.Text == "class"
            || code_token.Text == "struct"
            || code_token.Text == "union"
            || code_token.Text == "enum"
            || code_token.Text == "typedef"
            || code_token.Text == "operator"
            || code_token.Text == "virtual"
            || code_token.Text == "final"
            || code_token.Text == "override"
            || code_token.Text == "const"
            || code_token.Text == "mutable"
            || code_token.Text == "volatile"
            || code_token.Text == "register"
            || code_token.Text == "explicit"
            || code_token.Text == "friend"
            || code_token.Text == "inline"
            || code_token.Text == "static"
            || code_token.Text == "extern"
            );
    }
}

// ~~

class CSHARP_LANGUAGE : LANGUAGE
{
    override bool IsConstant(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "false"
            || code_token.Text == "true"
            || code_token.Text == "null"
            );
    }

    // ~~

    override bool IsType(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "void"
            || code_token.Text == "bool"
            || code_token.Text == "char"
            || code_token.Text == "byte"
            || code_token.Text == "sbyte"
            || code_token.Text == "short"
            || code_token.Text == "int"
            || code_token.Text == "uint"
            || code_token.Text == "long"
            || code_token.Text == "ulong"
            || code_token.Text == "float"
            || code_token.Text == "double"
            || code_token.Text == "decimal"
            || code_token.Text == "string"
            );
    }

    // ~~

    override bool IsKeyword(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "if"
            || code_token.Text == "else"
            || code_token.Text == "do"
            || code_token.Text == "while"
            || code_token.Text == "for"
            || code_token.Text == "foreach"
            || code_token.Text == "switch"
            || code_token.Text == "case"
            || code_token.Text == "default"
            || code_token.Text == "break"
            || code_token.Text == "continue"
            || code_token.Text == "return"
            || code_token.Text == "goto"
            || code_token.Text == "try"
            || code_token.Text == "catch"
            || code_token.Text == "finally"
            || code_token.Text == "throw"
            || code_token.Text == "lock"
            || code_token.Text == "new"
            || code_token.Text == "stackalloc"
            || code_token.Text == "sizeof"
            || code_token.Text == "typeof"
            || code_token.Text == "is"
            || code_token.Text == "as"
            || code_token.Text == "params"
            || code_token.Text == "this"
            || code_token.Text == "base"
            || code_token.Text == "using"
            || code_token.Text == "namespace"
            || code_token.Text == "public"
            || code_token.Text == "protected"
            || code_token.Text == "private"
            || code_token.Text == "class"
            || code_token.Text == "interface"
            || code_token.Text == "enum"
            || code_token.Text == "operator"
            || code_token.Text == "object"
            || code_token.Text == "event"
            || code_token.Text == "static"
            || code_token.Text == "const"
            || code_token.Text == "in"
            || code_token.Text == "out"
            || code_token.Text == "ref"
            || code_token.Text == "readonly"
            || code_token.Text == "delegate"
            || code_token.Text == "abstract"
            || code_token.Text == "override"
            || code_token.Text == "implicit"
            || code_token.Text == "volatile"
            || code_token.Text == "checked"
            || code_token.Text == "unchecked"
            || code_token.Text == "unsafe"
            || code_token.Text == "fixed"
            || code_token.Text == "sealed"
            || code_token.Text == "internal"
            || code_token.Text == "extern"
            );
    }
}

// ~~

class D_LANGUAGE : LANGUAGE
{
    override bool IsConstant(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "false"
            || code_token.Text == "true"
            || code_token.Text == "null"
            );
    }

    // ~~

    override bool IsType(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "void"
            || code_token.Text == "bool"
            || code_token.Text == "char"
            || code_token.Text == "wchar"
            || code_token.Text == "dchar"
            || code_token.Text == "byte"
            || code_token.Text == "ubyte"
            || code_token.Text == "short"
            || code_token.Text == "ushort"
            || code_token.Text == "int"
            || code_token.Text == "uint"
            || code_token.Text == "long"
            || code_token.Text == "ulong"
            || code_token.Text == "float"
            || code_token.Text == "double"
            || code_token.Text == "string"
            || code_token.Text == "wstring"
            || code_token.Text == "dstring"
            || code_token.Text == "auto"
            );
    }

    // ~~

    override bool IsKeyword(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "if"
            || code_token.Text == "else"
            || code_token.Text == "do"
            || code_token.Text == "while"
            || code_token.Text == "for"
            || code_token.Text == "foreach"
            || code_token.Text == "switch"
            || code_token.Text == "case"
            || code_token.Text == "default"
            || code_token.Text == "break"
            || code_token.Text == "continue"
            || code_token.Text == "return"
            || code_token.Text == "try"
            || code_token.Text == "catch"
            || code_token.Text == "throw"
            || code_token.Text == "new"
            || code_token.Text == "delete"
            || code_token.Text == "import"
            || code_token.Text == "this"
            || code_token.Text == "public"
            || code_token.Text == "protected"
            || code_token.Text == "private"
            || code_token.Text == "class"
            || code_token.Text == "struct"
            || code_token.Text == "union"
            || code_token.Text == "enum"
            || code_token.Text == "final"
            || code_token.Text == "override"
            );
    }
}

// ~~

class JAVA_LANGUAGE : LANGUAGE
{
    override bool IsConstant(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "false"
            || code_token.Text == "true"
            || code_token.Text == "null"
            );
    }

    // ~~

    override bool IsType(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "void"
            || code_token.Text == "boolean"
            || code_token.Text == "char"
            || code_token.Text == "byte"
            || code_token.Text == "short"
            || code_token.Text == "int"
            || code_token.Text == "long"
            || code_token.Text == "float"
            || code_token.Text == "double"
            );
    }

    // ~~

    override bool IsKeyword(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "if"
            || code_token.Text == "else"
            || code_token.Text == "do"
            || code_token.Text == "while"
            || code_token.Text == "for"
            || code_token.Text == "switch"
            || code_token.Text == "case"
            || code_token.Text == "default"
            || code_token.Text == "break"
            || code_token.Text == "continue"
            || code_token.Text == "return"
            || code_token.Text == "goto"
            || code_token.Text == "try"
            || code_token.Text == "catch"
            || code_token.Text == "finally"
            || code_token.Text == "throw"
            || code_token.Text == "new"
            || code_token.Text == "instanceof"
            || code_token.Text == "this"
            || code_token.Text == "super"
            || code_token.Text == "import"
            || code_token.Text == "public"
            || code_token.Text == "protected"
            || code_token.Text == "private"
            || code_token.Text == "package"
            || code_token.Text == "class"
            || code_token.Text == "interface"
            || code_token.Text == "enum"
            || code_token.Text == "extends"
            || code_token.Text == "implements"
            || code_token.Text == "throws"
            || code_token.Text == "static"
            || code_token.Text == "const"
            || code_token.Text == "final"
            || code_token.Text == "abstract"
            || code_token.Text == "volatile"
            || code_token.Text == "transient"
            || code_token.Text == "native"
            || code_token.Text == "synchronized"
            || code_token.Text == "strictfp"
            );
    }
}

// ~~

class JAVASCRIPT_LANGUAGE : LANGUAGE
{
    override bool IsConstant(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "false"
            || code_token.Text == "true"
            || code_token.Text == "null"
            || code_token.Text == "undefined"
            );
    }

    // ~~

    override bool IsType(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "void"
            || code_token.Text == "boolean"
            || code_token.Text == "char"
            || code_token.Text == "byte"
            || code_token.Text == "short"
            || code_token.Text == "int"
            || code_token.Text == "long"
            || code_token.Text == "float"
            || code_token.Text == "double"
            );
    }

    // ~~

    override bool IsKeyword(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "var"
            || code_token.Text == "let"
            || code_token.Text == "if"
            || code_token.Text == "else"
            || code_token.Text == "do"
            || code_token.Text == "while"
            || code_token.Text == "for"
            || code_token.Text == "switch"
            || code_token.Text == "case"
            || code_token.Text == "default"
            || code_token.Text == "break"
            || code_token.Text == "continue"
            || code_token.Text == "return"
            || code_token.Text == "goto"
            || code_token.Text == "try"
            || code_token.Text == "catch"
            || code_token.Text == "finally"
            || code_token.Text == "throw"
            || code_token.Text == "new"
            || code_token.Text == "delete"
            || code_token.Text == "yield"
            || code_token.Text == "await"
            || code_token.Text == "eval"
            || code_token.Text == "with"
            || code_token.Text == "in"
            || code_token.Text == "debugger"
            || code_token.Text == "instanceof"
            || code_token.Text == "typeof"
            || code_token.Text == "arguments"
            || code_token.Text == "this"
            || code_token.Text == "super"
            || code_token.Text == "import"
            || code_token.Text == "export"
            || code_token.Text == "public"
            || code_token.Text == "protected"
            || code_token.Text == "private"
            || code_token.Text == "package"
            || code_token.Text == "class"
            || code_token.Text == "interface"
            || code_token.Text == "enum"
            || code_token.Text == "function"
            || code_token.Text == "extends"
            || code_token.Text == "implements"
            || code_token.Text == "throws"
            || code_token.Text == "static"
            || code_token.Text == "const"
            || code_token.Text == "final"
            || code_token.Text == "abstract"
            || code_token.Text == "volatile"
            || code_token.Text == "transient"
            || code_token.Text == "native"
            || code_token.Text == "synchronized"
            );
    }
}

// ~~

class TYPESCRIPT_LANGUAGE : LANGUAGE
{
    override bool IsConstant(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "false"
            || code_token.Text == "true"
            || code_token.Text == "null"
            || code_token.Text == "undefined"
            );
    }

    // ~~

    override bool IsType(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "boolean"
            || code_token.Text == "number"
            || code_token.Text == "string"
            || code_token.Text == "symbol"
            || code_token.Text == "any"
            );
    }

    // ~~

    override bool IsKeyword(
        CODE_TOKEN code_token
        )
    {
        return (
            code_token.Text == "var"
            || code_token.Text == "let"
            || code_token.Text == "if"
            || code_token.Text == "else"
            || code_token.Text == "do"
            || code_token.Text == "while"
            || code_token.Text == "for"
            || code_token.Text == "switch"
            || code_token.Text == "case"
            || code_token.Text == "default"
            || code_token.Text == "break"
            || code_token.Text == "continue"
            || code_token.Text == "return"
            || code_token.Text == "goto"
            || code_token.Text == "try"
            || code_token.Text == "catch"
            || code_token.Text == "finally"
            || code_token.Text == "throw"
            || code_token.Text == "new"
            || code_token.Text == "delete"
            || code_token.Text == "yield"
            || code_token.Text == "await"
            || code_token.Text == "eval"
            || code_token.Text == "with"
            || code_token.Text == "in"
            || code_token.Text == "debugger"
            || code_token.Text == "instanceof"
            || code_token.Text == "typeof"
            || code_token.Text == "arguments"
            || code_token.Text == "this"
            || code_token.Text == "super"
            || code_token.Text == "import"
            || code_token.Text == "export"
            || code_token.Text == "public"
            || code_token.Text == "protected"
            || code_token.Text == "private"
            || code_token.Text == "package"
            || code_token.Text == "class"
            || code_token.Text == "interface"
            || code_token.Text == "enum"
            || code_token.Text == "function"
            || code_token.Text == "constructor"
            || code_token.Text == "extends"
            || code_token.Text == "implements"
            || code_token.Text == "static"
            || code_token.Text == "const"
            || code_token.Text == "abstract"
            || code_token.Text == "volatile"
            || code_token.Text == "transient"
            || code_token.Text == "native"
            || code_token.Text == "synchronized"
            );
    }
}

// ~~

enum CODE_TOKEN_TYPE
{
    None,
    ShortComment,
    LongComment,
    String,
    Number,
    Constant,
    Type,
    Keyword,
    Pragma,
    LowerCaseIdentifier,
    UpperCaseIdentifier,
    MinorCaseIdentifier,
    MajorCaseIdentifier,
    Identifier,
    Operator,
    Separator,
    Delimiter,
    Special,
    Spacing,
    Count
}

// ~~

class CODE_TOKEN
{
    CODE_TOKEN_TYPE
        Type;
    dstring
        Text;
}

// ~~

class TOKEN
{
    dstring
        Text;
    bool
        StartsLine,
        IsSpace,
        IsEscaped;
}

// -- VARIABLES

bool
    ColorizeOptionIsEnabled,
    PageOptionIsEnabled,
    ProcessOptionIsEnabled,
    ScriptOptionIsEnabled,
    StyleOptionIsEnabled;
double
    PageBottomMargin,
    PageHeight,
    PageLeftMargin,
    PageRightMargin,
    PageTopMargin,
    PageWidth;
long
    IndentationSpaceCount,
    TabulationSpaceCount;
string
    InputFilePath,
    LanguageName,
    OutputFilePath,
    ScriptFolderPath,
    StyleFolderPath;
dstring[ dstring ]
    ClassDefinitionMap;

// -- FUNCTIONS

void PrintError(
    string message
    )
{
    writeln( "*** ERROR : ", message );
}

// ~~

void Abort(
    string message
    )
{
    PrintError( message );

    exit( -1 );
}

// ~~

dchar charAt(
    dstring text,
    long character_index
    )
{
    return text[ character_index ];
}

// ~~

dstring slice(
    dstring text,
    long first_character_index,
    long post_character_index
    )
{
    if ( first_character_index < 0 )
    {
        first_character_index += text.length;
    }

    if ( first_character_index > text.length )
    {
        first_character_index = text.length;
    }

    if ( post_character_index < 0 )
    {
        post_character_index += text.length;
    }

    if ( post_character_index > text.length )
    {
        post_character_index = text.length;
    }

    return text[ first_character_index .. post_character_index ];
}

// ~~

dstring slice(
    dstring text,
    long first_character_index
    )
{
    if ( first_character_index < 0 )
    {
        first_character_index += text.length;
    }

    if ( first_character_index > text.length )
    {
        first_character_index = text.length;
    }

    return text[ first_character_index .. $ ];
}

// ~~

dstring trim(
    dstring text
    )
{
    return text.strip();
}

// ~~

void splice( ELEMENT )(
    ref ELEMENT[] element_array,
    long element_index,
    long element_count,
    ELEMENT element
    )
{
    element_array = element_array[ 0 .. element_index ] ~ element ~ element_array[ element_index + element_count .. $ ];
}

// ~~

void push( ELEMENT )(
    ref ELEMENT[] element_array,
    ELEMENT element
    )
{
    element_array ~= element;
}

// ~~

ELEMENT pop( ELEMENT )(
    ref ELEMENT[] element_array
    )
{
    ELEMENT
        element;

    element = element_array[ $ - 1 ];

    element_array = element_array[ 0 .. $ - 1 ];

    return element;
}

// ~~

dstring ReplaceTabulations(
    dstring text
    )
{
    dchar
        character;
    dstring
        replaced_text;
    long
        character_index,
        line_character_index;

    text = text.replace( "\t\t", "\t    " ).replace( "\n\t", "\n    " );

    if ( text.indexOf( '\t' ) >= 0 )
    {
        replaced_text = "";

        line_character_index = 0;

        for ( character_index = 0;
              character_index < text.length;
              ++character_index )
        {
            character = text.charAt( character_index );

            if ( character == '\t' )
            {
                do
                {
                    replaced_text ~= ' ';

                    ++line_character_index;
                }
                while ( ( line_character_index % TabulationSpaceCount ) != 0 );
            }
            else
            {
                replaced_text ~= character;

                if ( character == '\n' )
                {
                    line_character_index = 0;
                }
                else
                {
                    ++line_character_index;
                }
            }
        }

        return replaced_text;
    }
    else
    {
        return text;
    }
}

// ~~

dstring GetCleanedText(
    dstring text
    )
{
    dstring
        cleaned_text;

    cleaned_text = ReplaceTabulations( text ).replace( "\r", "" );

    if ( !cleaned_text.endsWith( '\n' ) )
    {
        cleaned_text ~= '\n';
    }

    return cleaned_text;
}

// ~~

bool IsAlphabeticalCharacter(
    dchar character
    )
{
    return (
        ( character >= 'a' && character <= 'z' )
        || ( character >= 'A' && character <= 'Z' )
        );
}

// ~~

bool IsDecimalCharacter(
    dchar character
    )
{
    return character >= '0' && character <= '9';
}

// ~~

bool IsHexadecimalCharacter(
    dchar character
    )
{
    return (
        ( character >= '0' && character <= '9' )
        || ( character >= 'a' && character <= 'f' )
        || ( character >= 'A' && character <= 'F' )
        );
}

// ~~

long GetHexadecimalCharacterValue(
    dchar character
    )
{
    if ( character >= '0'
         && character <= '9' )
    {
        return character - 48;
    }
    else if ( character >= 'a'
              && character <= 'f' )
    {
        return character - 87;
    }
    else if ( character >= 'A'
              && character <= 'F' )
    {
        return character - 55;
    }
    else
    {
        return 0;
    }
}

// ~~

dstring GetColor(
    dstring color
    )
{
    long
        red,
        green,
        blue,
        alpha;

    if ( color.length == 4 )
    {
        red = GetHexadecimalCharacterValue( color.charAt( 0 ) );
        green = GetHexadecimalCharacterValue( color.charAt( 1 ) );
        blue = GetHexadecimalCharacterValue( color.charAt( 2 ) );
        alpha = GetHexadecimalCharacterValue( color.charAt( 3 ) );

        red += red * 16;
        green += green * 16;
        blue += blue * 16;
        alpha += alpha * 16;

        return ( "rgba(" ~ red.to!dstring() ~ "," ~ green.to!dstring() ~ "," ~ blue.to!dstring() ~ "," ~ ( alpha / 255.0 ).to!dstring() ~ ")" );
    }
    else if ( color.length == 8 )
    {
        red = GetHexadecimalCharacterValue( color.charAt( 0 ) ) * 16 + GetHexadecimalCharacterValue( color.charAt( 1 ) );
        green = GetHexadecimalCharacterValue( color.charAt( 2 ) ) * 16 + GetHexadecimalCharacterValue( color.charAt( 3 ) );
        blue = GetHexadecimalCharacterValue( color.charAt( 4 ) ) * 16 + GetHexadecimalCharacterValue( color.charAt( 5 ) );
        alpha = GetHexadecimalCharacterValue( color.charAt( 6 ) ) * 16 + GetHexadecimalCharacterValue( color.charAt( 7 ) );

        return "rgba(" ~ red.to!dstring() ~ "," ~ green.to!dstring() ~ "," ~ blue.to!dstring() ~ "," ~ ( alpha / 255.0 ).to!dstring() ~ ")";
    }
    else
    {
        return "#" ~ color;
    }
}

// ~~

bool HasUnit(
    dstring size
    )
{
    return (
        size == "auto"
        || size.endsWith( "%" )
        || size.endsWith( "ch" )
        || size.endsWith( "cm" )
        || size.endsWith( "em" )
        || size.endsWith( "ex" )
        || size.endsWith( "in" )
        || size.endsWith( "mm" )
        || size.endsWith( "pc" )
        || size.endsWith( "pt" )
        || size.endsWith( "px" )
        || size.endsWith( "rem" )
        || size.endsWith( "vh" )
        || size.endsWith( "vmax" )
        || size.endsWith( "vmin" )
        || size.endsWith( "vw" )
        );
}

// ~~

LANGUAGE GetLanguage(
    string file_path,
    string file_extension
    )
{
    if ( file_extension != "" )
    {
        if ( file_extension.startsWith( '.' ) )
        {
            file_path = file_extension;
        }
        else
        {
            file_path = "." ~ file_extension;
        }
    }

    if ( file_path.endsWith( ".c" )
         || file_path.endsWith( ".h" ) )
    {
        return new C_LANGUAGE();
    }
    else if ( file_path.endsWith( ".c++" )
              || file_path.endsWith( ".h++" )
              || file_path.endsWith( ".cpp" )
              || file_path.endsWith( ".hpp" )
              || file_path.endsWith( ".cxx" )
              || file_path.endsWith( ".hxx" ) )
    {
        return new CPP_LANGUAGE();
    }
    else if ( file_path.endsWith( ".c#" )
              || file_path.endsWith( ".cs" ) )
    {
        return new CSHARP_LANGUAGE();
    }
    else if ( file_path.endsWith( ".d" ) )
    {
        return new D_LANGUAGE();
    }
    else if ( file_path.endsWith( ".java" ) )
    {
        return new JAVA_LANGUAGE();
    }
    else if ( file_path.endsWith( ".js" ) )
    {
        return new JAVASCRIPT_LANGUAGE();
    }
    else if ( file_path.endsWith( ".ts" ) )
    {
        return new TYPESCRIPT_LANGUAGE();
    }
    else
    {
        return new LANGUAGE();
    }
}

// ~~

CODE_TOKEN[] GetCodeTokenArray(
    dstring text,
    LANGUAGE language
    )
{
    dchar
        character,
        delimiter_character,
        next_character;
    long
        character_index;
    CODE_TOKEN
        code_token;
    CODE_TOKEN[]
        code_token_array;

    text = GetCleanedText( text );

    code_token_array = [];

    code_token = null;
    delimiter_character = 0;

    for ( character_index = 0;
          character_index <= text.length;
          ++character_index )
    {
        if ( character_index < text.length )
        {
            character = text.charAt( character_index );
        }
        else
        {
            character = 0;
        }

        if ( character_index + 1 < text.length )
        {
            next_character = text.charAt( character_index + 1 );
        }
        else
        {
            next_character = 0;
        }

        if ( code_token !is null )
        {
            if ( code_token.Type == CODE_TOKEN_TYPE.String )
            {
                if ( character == delimiter_character )
                {
                    code_token.Text ~= character;

                    code_token = null;
                    character = 0;
                }
                else if ( character == '\\' )
                {
                    code_token.Text ~= character;
                    code_token.Text ~= next_character;

                    character = 0;

                    ++character_index;
                }
                else
                {
                    code_token.Text ~= character;
                }
            }
            else if ( code_token.Type == CODE_TOKEN_TYPE.ShortComment )
            {
                if ( character == '\r'
                     || character == '\n' )
                {
                    code_token = null;
                }
                else
                {
                    code_token.Text ~= character;
                }
            }
            else if ( code_token.Type == CODE_TOKEN_TYPE.LongComment )
            {
                if ( character == '*'
                     && next_character == '/' )
                {
                    code_token.Text ~= "*/";

                    code_token = null;
                    character = 0;

                    ++character_index;
                }
                else
                {
                    code_token.Text ~= character;
                }
            }
            else if ( ( code_token.Type == CODE_TOKEN_TYPE.Number
                        && ( character.isDigit()
                             || ( character == '.' && next_character.isDigit() )
                             || character.isAlpha() ) )
                      || ( code_token.Type == CODE_TOKEN_TYPE.Identifier
                           && ( character.isAlpha()
                                || character.isDigit()
                                || character == '_' ) )
                      || ( code_token.Type == CODE_TOKEN_TYPE.Operator
                           && "~+-*/%^$&|?:!=<>#".indexOf( character ) >= 0 ) )
            {
                code_token.Text ~= character;
            }
            else
            {
                if ( code_token.Type == CODE_TOKEN_TYPE.Identifier )
                {
                    if ( language.IsConstant( code_token ) )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.Constant;
                    }
                    else if ( language.IsType( code_token ) )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.Type;
                    }
                    else if ( language.IsKeyword( code_token ) )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.Keyword;
                    }
                    else if ( code_token.Text.startsWith( '#' ) )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.Pragma;
                    }
                    else if ( code_token.Text == code_token.Text.toLower() )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.LowerCaseIdentifier;
                    }
                    else if ( code_token.Text == code_token.Text.toUpper()
                              && code_token.Text.length >= 2 )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.UpperCaseIdentifier;
                    }
                    else if ( code_token.Text[ 0 ].isLower() )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.MinorCaseIdentifier;
                    }
                    else if ( code_token.Text[ 0 ].isUpper() )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.MajorCaseIdentifier;
                    }
                }

                code_token = null;
            }
        }

        if ( code_token is null
             && character != 0 )
        {
            code_token = new CODE_TOKEN();

            if ( character == '/'
                 && next_character == '/' )
            {
                code_token.Type = CODE_TOKEN_TYPE.ShortComment;
                code_token.Text = "//";

                ++character_index;
            }
            else if ( character == '/'
                      && next_character == '*' )
            {
                code_token.Type = CODE_TOKEN_TYPE.LongComment;
                code_token.Text = "/*";

                ++character_index;
            }
            else if ( character == '\''
                      || character == '\"'
                      || character == '`' )
            {
                code_token.Type = CODE_TOKEN_TYPE.String;
                code_token.Text ~= character;

                delimiter_character = character;
            }
            else if ( character.isDigit()
                      || ( character == '-'
                           && next_character.isDigit() ) )
            {
                code_token.Type = CODE_TOKEN_TYPE.Number;
                code_token.Text ~= character;
            }
            else if ( character.isAlpha()
                      || character == '_'
                      || ( character == '#' && next_character.isAlpha() ) )
            {
                code_token.Type = CODE_TOKEN_TYPE.Identifier;
                code_token.Text ~= character;
            }
            else if ( "~+-*/%^$&|!=<>#".indexOf( character ) >= 0 )
            {
                code_token.Type = CODE_TOKEN_TYPE.Operator;
                code_token.Text ~= character;
            }
            else if ( ".,;".indexOf( character ) >= 0 )
            {
                code_token.Type = CODE_TOKEN_TYPE.Separator;
                code_token.Text ~= character;
            }
            else if ( "()[]{}".indexOf( character ) >= 0 )
            {
                code_token.Type = CODE_TOKEN_TYPE.Delimiter;
                code_token.Text ~= character;
            }
            else if ( " \t\r\n".indexOf( character ) >= 0 )
            {
                code_token.Type = CODE_TOKEN_TYPE.Spacing;
                code_token.Text ~= character;
            }
            else
            {
                code_token.Type = CODE_TOKEN_TYPE.Special;
                code_token.Text ~= character;
            }

            code_token_array.push( code_token );

            if ( code_token.Type >= CODE_TOKEN_TYPE.Separator )
            {
                code_token = null;
            }
        }
    }

    return code_token_array;
}

// ~~

void EscapeSpecialCharacters(
    ref CODE_TOKEN[] code_token_array
    )
{
    dchar
        character,
        prior_character;
    dstring
        code_token_text;
    long
        character_index,
        code_token_index;
    CODE_TOKEN
        code_token;

    for ( code_token_index = 0;
          code_token_index < code_token_array.length;
          ++code_token_index )
    {
        code_token = code_token_array[ code_token_index ];

        code_token_text = "";
        prior_character = 0;

        for ( character_index = 0;
              character_index < code_token.Text.length;
              ++character_index )
        {
            character = code_token.Text.charAt( character_index );

            if ( character == '<' )
            {
                code_token_text ~= "&lt;";
            }
            else if ( character == '>' )
            {
                code_token_text ~= "&gt;";
            }
            else
            {
                if ( "\\`°¹²³!#@".indexOf( character ) >= 0
                     || ( "+-$*%^,~_{}[]:".indexOf( character ) >= 0
                          && character == prior_character ) )
                {
                    code_token_text ~= '\\';
                }

                code_token_text ~= character;
            }

            prior_character = character;
        }

        code_token.Text = code_token_text;
    }
}

// ~~

dstring GetColorizedText(
    dstring text,
    string file_path,
    string file_extension
    )
{
    dstring
        colorized_text;
    dstring[ CODE_TOKEN_TYPE.Count ]
        color_prefix_array,
        color_suffix_array;
    int
        code_token_index;
    LANGUAGE
        language;
    CODE_TOKEN
        code_token;
    CODE_TOKEN[]
        code_token_array;

    language = GetLanguage( file_path, file_extension );

    text = GetCleanedText( text );

    code_token_array = GetCodeTokenArray( text, language );

    EscapeSpecialCharacters( code_token_array );

    color_prefix_array[ CODE_TOKEN_TYPE.ShortComment ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.LongComment ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.String ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Number ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Constant ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Type ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Keyword ] = "¹";
    color_prefix_array[ CODE_TOKEN_TYPE.Pragma ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.LowerCaseIdentifier ] = "";
    color_prefix_array[ CODE_TOKEN_TYPE.UpperCaseIdentifier ] = "²²";
    color_prefix_array[ CODE_TOKEN_TYPE.MinorCaseIdentifier ] = "";
    color_prefix_array[ CODE_TOKEN_TYPE.MajorCaseIdentifier ] = "";
    color_prefix_array[ CODE_TOKEN_TYPE.Identifier ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Operator ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.Separator ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.Delimiter ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.Special ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.Spacing ] = "";

    color_suffix_array = color_prefix_array;

    colorized_text = ":::\n";

    for ( code_token_index = 0;
          code_token_index < code_token_array.length;
          ++code_token_index )
    {
        code_token = code_token_array[ code_token_index ];

        if ( code_token_index == 0
             || color_prefix_array[ code_token.Type ]
                != color_prefix_array[ code_token_array[ code_token_index - 1 ].Type ] )
        {
            colorized_text ~= color_prefix_array[ code_token.Type ];
        }

        colorized_text ~= code_token.Text;

        if ( code_token_index == code_token_array.length.to!long() - 1
             || color_suffix_array[ code_token.Type ]
                != color_suffix_array[ code_token_array[ code_token_index + 1 ].Type ] )
        {
            colorized_text ~= color_suffix_array[ code_token.Type ];
        }
    }

    colorized_text ~= ":::\n";

    return colorized_text;
}

// ~~

dstring GetPreprocessedText(
    dstring text
    )
{
    dstring
        code_line,
        code_text,
        line;
    dstring[]
        code_line_array,
        line_array;
    int
        code_line_index,
        line_index,
        post_line_index;
    string
        file_extension;

    text = GetCleanedText( text );

    line_array = text.split( '\n' );

    for ( line_index = 0;
          line_index < line_array.length;
          ++line_index )
    {
        line = line_array[ line_index ].trim();

        if ( line == "" )
        {
            line_array[ line_index ] = "";
        }
        else if ( line.startsWith( ":::" ) )
        {
            if ( line == ":::c\\"
                 || line == ":::h\\"
                 || line == ":::c++\\"
                 || line == ":::h++\\"
                 || line == ":::cpp\\"
                 || line == ":::hpp\\"
                 || line == ":::cxx\\"
                 || line == ":::hxx\\"
                 || line == ":::c#\\"
                 || line == ":::cs\\"
                 || line == ":::d\\"
                 || line == ":::java\\"
                 || line == ":::js\\"
                 || line == ":::ts\\" )
            {
                file_extension = line.slice( 3, -1 ).to!string();

                code_text = "";

                for ( post_line_index = line_index + 1;
                      post_line_index < line_array.length;
                      ++post_line_index )
                {
                    code_line = line_array[ post_line_index ];

                    if ( code_line.trim() == ":::" )
                    {
                        break;
                    }
                    else
                    {
                        code_text ~= code_line;
                        code_text ~= '\n';
                    }
                }

                if ( code_text != "" )
                {
                    code_text = GetColorizedText( code_text, "", file_extension );

                    code_line_array = code_text.split( '\n' );

                    for ( code_line_index = 0;
                          code_line_index < code_line_array.length
                          && line_index < post_line_index;
                          ++code_line_index )
                    {
                        line_array[ line_index ] = code_line_array[ code_line_index ];

                        ++line_index;
                    }
                }
            }
        }
    }

    text = line_array.join( '\n' );

    return text;
}

// ~~

TOKEN[] GetTokenArray(
    dstring text
    )
{
    bool
        it_is_in_a,
        it_is_in_b,
        it_is_in_blockquote,
        it_is_in_black_span,
        it_is_in_blue_span,
        it_is_in_box_div,
        it_is_in_center_div,
        it_is_in_cyan_span,
        it_is_in_frame_div,
        it_is_in_gray_span,
        it_is_in_green_span,
        it_is_in_i,
        it_is_in_left_div,
        it_is_in_mark_span,
        it_is_in_orange_span,
        it_is_in_pink_span,
        it_is_in_pre,
        it_is_in_red_span,
        it_is_in_right_div,
        it_is_in_strike,
        it_is_in_sup,
        it_is_in_sub,
        it_is_in_u,
        token_starts_line;
    dstring
        attributes,
        closing_tag,
        url;
    long
        character_index,
        table_count,
        token_character_index;
    TOKEN
        closing_token,
        token;
    TOKEN[]
        token_array;

    // ~~

    dstring ReplaceClassDefinitions(
        dstring classes
        )
    {
        dstring
            class_name,
            old_classes;
        dstring[]
            class_name_array;
        long
            class_name_index;
            
        do
        {
            old_classes = classes;

            class_name_array = classes.split( ' ' );

            for ( class_name_index = 0;
                  class_name_index < class_name_array.length;
                  ++class_name_index )
            {
                class_name = class_name_array[ class_name_index ];

                if ( ( class_name in ClassDefinitionMap ) !is null )
                {
                    class_name_array[ class_name_index ] = ClassDefinitionMap[ class_name ];
                }
            }

            classes = class_name_array.join( ' ' );
        }
        while ( classes != old_classes );
        
        return classes;
    }

    // ~~

    void ParseAttributes(
        dstring classes,
        char skipped_character = 0
        )
    {
        bool
            command_is_valid;
        dchar
            character;
        long
            class_name_index,
            next_character_index;
        dstring
            class_name,
            parsed_classes,
            size,
            span,
            styles;
        dstring[]
            class_name_array,
            part_array;

        attributes = "";
        styles = "";
        span = "";

        command_is_valid = true;

        while ( character_index < text.length
                && text.charAt( character_index ) == '^'
                && command_is_valid )
        {
            command_is_valid = false;

            parsed_classes = "";

            for ( next_character_index = character_index + 1;
                  next_character_index < text.length;
                  ++next_character_index )
            {
                character = text.charAt( next_character_index );

                if ( IsAlphabeticalCharacter( character )
                     || IsDecimalCharacter( character )
                     || "$~#+@=_-.:°¹²³".indexOf( character ) >= 0 )
                {
                    parsed_classes ~= character;
                }
                else if ( character == ',' )
                {
                    parsed_classes ~= ' ';
                }
                else if ( character == '\\' )
                {
                    if ( parsed_classes != "" )
                    {
                        if ( parsed_classes.indexOf( ':' ) >= 0 )
                        {
                            part_array = parsed_classes.split( ':' );
                            ClassDefinitionMap[ part_array[ 1 ] ] = part_array[ 0 ];
                            parsed_classes = part_array[ 0 ];
                        }

                        if ( classes != "" )
                        {
                            classes ~= " ";
                        }

                        classes ~= parsed_classes;

                        character_index = next_character_index + 1;
                        command_is_valid = true;
                    }

                    break;
                }
                else
                {
                    break;
                }
            }
        }

        classes = ReplaceClassDefinitions( classes );
        
        class_name_array = classes.split( ' ' );
        classes = "";

        for ( class_name_index = 0;
              class_name_index < class_name_array.length;
              ++class_name_index )
        {
            class_name = class_name_array[ class_name_index ];

            if ( class_name.startsWith( '$' ) )
            {
                if ( styles != "" )
                {
                    styles ~= ";";
                }

                styles ~= "color:" ~ GetColor( class_name.slice( 1 ) );
            }
            else if ( class_name.startsWith( '~' ) )
            {
                if ( styles != "" )
                {
                    styles ~= ";";
                }

                styles ~= "text-decoration-color:" ~ GetColor( class_name.slice( 1 ) );
            }
            else if ( class_name.startsWith( '#' ) )
            {
                if ( styles != "" )
                {
                    styles ~= ";";
                }

                styles ~= "background-color:" ~ GetColor( class_name.slice( 1 ) );
            }
            else if ( class_name.startsWith( '+' ) )
            {
                if ( styles != "" )
                {
                    styles ~= ";";
                }

                styles ~= "border-color:" ~ GetColor( class_name.slice( 1 ) );
            }
            else if ( class_name.startsWith( '@' ) )
            {
                size = class_name.slice( 1 );

                if ( !HasUnit( size ) )
                {
                    size ~= "rem";
                }

                if ( styles != "" )
                {
                    styles ~= ";";
                }

                styles ~= "font-size:" ~ size;
            }
            else if ( class_name.startsWith( '=' ) )
            {
                span = class_name.slice( 1 );
            }
            else
            {
                if ( classes != "" )
                {
                    classes ~= " ";
                }

                classes ~= class_name;
            }
        }

        if ( classes != "" )
        {
            attributes ~= " class=\"" ~ classes ~ "\"";
        }

        if ( styles != "" )
        {
            attributes ~= " style=\"" ~ styles ~ "\"";
        }

        if ( span != "" )
        {
            attributes ~= " colspan=\"" ~ span ~ "\"";
        }

        if ( skipped_character != 0 )
        {
            while ( character_index < text.length
                    && text.charAt( character_index ) == skipped_character )
            {
                ++character_index;
            }
        }
    }

    // ~~

    dstring ParseImage(
        )
    {
        bool
            size_is_parsed;
        dchar
            character;
        dstring
            height,
            image_text,
            size_text,
            width;
        dstring[]
            size_array;

        character_index += 2;

        ParseAttributes( "" );

        image_text = "<img" ~ attributes ~ " src=\"";
        size_text = "";
        size_is_parsed = false;

        while ( character_index < text.length )
        {
            character = text.charAt( character_index );

            if ( character == '\\'
                 && character_index + 1 < text.length )
            {
                ++character_index;

                image_text ~= text.charAt( character_index );
            }
            else if ( character == ']'
                      && character_index + 1 < text.length
                      && text.charAt( character_index + 1 ) == ']' )
            {
                character_index += 2;

                break;
            }
            else if ( size_is_parsed )
            {
                size_text ~= character;
            }
            else
            {
                if ( character == ':' )
                {
                    size_is_parsed = true;
                }
                else if ( character == '\"' )
                {
                    image_text ~= "&quot;";
                }
                else
                {
                    image_text ~= character;
                }
            }

            ++character_index;
        }

        if ( size_text == "" )
        {
            size_text = ",100";
        }

        size_array = size_text.split( ',' );

        if ( size_array.length == 1 )
        {
            height = size_array[ 0 ];
            width = "";
        }
        else if ( size_array.length == 2 )
        {
            height = size_array[ 0 ];
            width = size_array[ 1 ];
        }
        else
        {
            height = "";
            width = "100";
        }

        if ( height == "" )
        {
            height = "auto";
        }
        else if ( !HasUnit( height ) )
        {
            if ( PageOptionIsEnabled )
            {
                height
                    = ( height.to!double()
                        * ( PageWidth - PageLeftMargin - PageRightMargin )
                        / ( PageHeight - PageTopMargin - PageBottomMargin ) ).to!dstring() ~ "%";
            }
            else
            {
                height ~= "vw";
            }
        }

        if ( width == "" )
        {
            width = "auto";
        }
        else if ( !HasUnit( width ) )
        {
            width ~= "%";
        }

        image_text ~= "\" style=\"height:" ~ height ~ ";width:" ~ width ~ "\"/>";

        return image_text;
    }

    // ~~

    text = GetCleanedText( text );

    token_array = [];
    token_starts_line = true;

    closing_tag = "";

    it_is_in_pre = false;
    it_is_in_blockquote = false;
    it_is_in_frame_div = false;
    it_is_in_box_div = false;
    it_is_in_mark_span = false;
    it_is_in_u = false;
    it_is_in_left_div = false;
    it_is_in_center_div = false;
    it_is_in_right_div = false;
    it_is_in_b = false;
    it_is_in_i = false;
    it_is_in_sup = false;
    it_is_in_sub = false;
    it_is_in_strike = false;
    it_is_in_black_span = false;
    it_is_in_cyan_span = false;
    it_is_in_orange_span = false;
    it_is_in_green_span = false;
    it_is_in_gray_span = false;
    it_is_in_pink_span = false;
    it_is_in_red_span = false;
    it_is_in_blue_span = false;
    it_is_in_a = false;

    table_count = 0;
    character_index = 0;

    while ( character_index < text.length )
    {
        token = new TOKEN();
        token.StartsLine = token_starts_line;
        token_starts_line = false;

        if ( text.charAt( character_index ) == '\\'
             && character_index + 1 < text.length )
        {
            token.Text = text.charAt( character_index + 1 ).to!dstring();
            token.IsEscaped = true;

            character_index += 2;
        }
        else if ( text.charAt( character_index ) == '`' )
        {
            ++character_index;

            while ( character_index < text.length )
            {
                if ( text.charAt( character_index ) == '`' )
                {
                    ++character_index;

                    break;
                }
                else
                {
                    token.Text ~= text.charAt( character_index );

                    ++character_index;
                }
            }

            token.Text = token.Text.replace( "<", "&lt;" ).replace( ">", "&gt;" );
            token.IsEscaped = true;
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 2 ) == "!^" )
        {
            character_index += 1;

            ParseAttributes( "", ' ' );

            token.Text = "<h1" ~ attributes ~ ">";
            closing_tag = "</h1>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 2 ) == "! " )
        {
            character_index += 2;

            token.Text = "<h1>";
            closing_tag = "</h1>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 3 ) == "!!^" )
        {
            character_index += 2;

            ParseAttributes( "", ' ' );

            token.Text = "<h2" ~ attributes ~ ">";
            closing_tag = "</h2>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 3 ) == "!! " )
        {
            character_index += 3;

            token.Text = "<h2>";
            closing_tag = "</h2>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 4 ) == "!!!^" )
        {
            character_index += 3;

            ParseAttributes( "", ' ' );

            token.Text = "<h3" ~ attributes ~ ">";
            closing_tag = "</h3>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 4 ) == "!!! " )
        {
            character_index += 4;

            token.Text = "<h3>";
            closing_tag = "</h3>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 5 ) == "!!!!^" )
        {
            character_index += 4;

            ParseAttributes( "", ' ' );

            token.Text = "<h4" ~ attributes ~ ">";
            closing_tag = "</h4>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 5 ) == "!!!! " )
        {
            character_index += 5;

            token.Text = "<h4>";
            closing_tag = "</h4>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 6 ) == "!!!!!^" )
        {
            character_index += 5;

            ParseAttributes( "", ' ' );

            token.Text = "<h5" ~ attributes ~ ">";
            closing_tag = "</h5>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 6 ) == "!!!!! " )
        {
            character_index += 6;

            token.Text = "<h5>";
            closing_tag = "</h5>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 7 ) == "!!!!!!^" )
        {
            character_index += 6;

            ParseAttributes( "", ' ' );

            token.Text = "<h6" ~ attributes ~ ">";
            closing_tag = "</h6>";
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 7 ) == "!!!!!! " )
        {
            character_index += 7;

            token.Text = "<h6>";
            closing_tag = "</h6>";
        }
        else if ( text.slice( character_index, character_index + 3 ) == "---" )
        {
            character_index += 3;

            ParseAttributes( "" );

            token.Text = "<hr" ~ attributes ~ "/>";
        }
        else if ( text.slice( character_index, character_index + 3 ) == "~~~" )
        {
            character_index += 3;

            ParseAttributes( "" );

            token.Text = "<pb" ~ attributes ~ "/>";
        }
        else if ( text.charAt( character_index ) == '§' )
        {
            ++character_index;
            
            token.Text = "<br/>";
        }
        else if ( text.slice( character_index, character_index + 3 ) == "[[[" )
        {
            character_index += 3;

            ++table_count;

            ParseAttributes( "" );

            token.Text = "<table" ~ attributes ~ "><tbody>";
        }
        else if ( text.slice( character_index, character_index + 2 ) == "(("
                  && table_count > 0 )
        {
            character_index += 2;

            ParseAttributes( "" );

            token.Text = "<tr><td" ~ attributes ~ ">";
        }
        else if ( text.charAt( character_index ) == '|'
                  && table_count > 0 )
        {
            ++character_index;

            ParseAttributes( "" );

            token.Text = "</td><td" ~ attributes ~ ">";
        }
        else if ( text.slice( character_index, character_index + 2 ) == "))"
                  && table_count > 0 )
        {
            character_index += 2;
            
            token.Text = "</td></tr>";
        }
        else if ( text.slice( character_index, character_index + 3 ) == "]]]"
                  && table_count > 0 )
        {
            character_index += 3;
            
            --table_count;

            token.Text = "</tbody></table>";
        }
        else if ( text.slice( character_index, character_index + 2 ) == "[[" )
        {
            token.Text = ParseImage();
        }
        else if ( text.slice( character_index, character_index + 3 ) == ":::" )
        {
            character_index += 3;
            
            it_is_in_pre = !it_is_in_pre;

            token.Text = it_is_in_pre ? "<pre>" : "</pre>";
        }
        else if ( text.slice( character_index, character_index + 3 ) == ">>>" )
        {
            character_index += 3;

            it_is_in_blockquote = !it_is_in_blockquote;

            if ( it_is_in_blockquote )
            {
                ParseAttributes( "" );

                token.Text = "<blockquote" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</blockquote>";
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) == "+++" )
        {
            character_index += 3;

            it_is_in_frame_div = !it_is_in_frame_div;

            if ( it_is_in_frame_div )
            {
                ParseAttributes( "frame" );

                token.Text = "<div" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) == "###" )
        {
            character_index += 3;

            it_is_in_box_div = !it_is_in_box_div;

            if ( it_is_in_box_div )
            {
                ParseAttributes( "box" );

                token.Text = "<div" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) == "{{{" )
        {
            character_index += 3;

            ParseAttributes( "" );

            token.Text = "<div" ~ attributes ~ ">";
        }
        else if ( text.slice( character_index, character_index + 3 ) == "}}}" )
        {
            character_index += 3;

            token.Text = "</div>";
        }
        else if ( text.slice( character_index, character_index + 2 ) == "##" )
        {
            character_index += 2;

            it_is_in_mark_span = !it_is_in_mark_span;

            if ( it_is_in_mark_span )
            {
                ParseAttributes( "mark" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "__" )
        {
            character_index += 2;

            it_is_in_u = !it_is_in_u;

            if ( it_is_in_u )
            {
                ParseAttributes( "" );

                token.Text = "<u" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</u>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "{{" )
        {
            character_index += 2;

            ParseAttributes( "" );

            token.Text = "<span" ~ attributes ~ ">";
        }
        else if ( text.slice( character_index, character_index + 2 ) == "}}" )
        {
            character_index += 2;

            token.Text = "</span>";
        }
        else if ( text.slice( character_index, character_index + 2 ) == "<<" )
        {
            character_index += 2;

            it_is_in_left_div = !it_is_in_left_div;

            if ( it_is_in_left_div )
            {
                ParseAttributes( "left" );
                
                token.Text = "<div" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "$$" )
        {
            character_index += 2;

            it_is_in_center_div = !it_is_in_center_div;

            if ( it_is_in_center_div )
            {
                ParseAttributes( "center" );

                token.Text = "<div" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == ">>" )
        {
            character_index += 2;

            it_is_in_right_div = !it_is_in_right_div;

            if ( it_is_in_right_div )
            {
                ParseAttributes( "right" );

                token.Text = "<div" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "**" )
        {
            character_index += 2;

            it_is_in_b = !it_is_in_b;

            if ( it_is_in_b )
            {
                ParseAttributes( "" );

                token.Text = "<b" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</b>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "%%" )
        {
            character_index += 2;

            it_is_in_i = !it_is_in_i;

            if ( it_is_in_i )
            {
                ParseAttributes( "" );

                token.Text = "<i" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</i>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "^^" )
        {
            character_index += 2;

            it_is_in_sup = !it_is_in_sup;

            if ( it_is_in_sup )
            {
                ParseAttributes( "" );

                token.Text = "<sup" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</sup>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == ",," )
        {
            character_index += 2;

            it_is_in_sub = !it_is_in_sub;

            if ( it_is_in_sub )
            {
                ParseAttributes( "" );

                token.Text = "<sub" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</sub>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "~~" )
        {
            character_index += 2;

            it_is_in_strike = !it_is_in_strike;

            if ( it_is_in_strike )
            {
                ParseAttributes( "" );

                token.Text = "<strike" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</strike>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "°°"
                  && !it_is_in_gray_span )
        {
            character_index += 2;

            it_is_in_black_span = !it_is_in_black_span;

            if ( it_is_in_black_span )
            {
                ParseAttributes( "°°" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "¹¹"
                  && !it_is_in_pink_span )
        {
            character_index += 2;

            it_is_in_cyan_span = !it_is_in_cyan_span;

            if ( it_is_in_cyan_span )
            {
                ParseAttributes( "¹¹" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "²²"
                  && !it_is_in_red_span )
        {
            character_index += 2;

            it_is_in_orange_span = !it_is_in_orange_span;

            if ( it_is_in_orange_span )
            {
                ParseAttributes( "²²" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) == "³³"
                  && !it_is_in_blue_span )
        {
            character_index += 2;

            it_is_in_green_span = !it_is_in_green_span;

            if ( it_is_in_green_span )
            {
                ParseAttributes( "³³" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.charAt( character_index ) == '°' )
        {
            ++character_index;

            it_is_in_gray_span = !it_is_in_gray_span;

            if ( it_is_in_gray_span )
            {
                ParseAttributes( "°" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.charAt( character_index ) == '¹' )
        {
            ++character_index;

            it_is_in_pink_span = !it_is_in_pink_span;

            if ( it_is_in_pink_span )
            {
                ParseAttributes( "¹" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.charAt( character_index ) == '²' )
        {
            ++character_index;

            it_is_in_red_span = !it_is_in_red_span;

            if ( it_is_in_red_span )
            {
                ParseAttributes( "²" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.charAt( character_index ) == '³' )
        {
            ++character_index;

            it_is_in_blue_span = !it_is_in_blue_span;

            if ( it_is_in_blue_span )
            {
                ParseAttributes( "³" );

                token.Text = "<span" ~ attributes ~ ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.slice( character_index, character_index + 5 ) == "<pre>" )
        {
            character_index += 5;

            token.Text = "<pre>";
        }
        else if ( text.slice( character_index, character_index + 6 ) == "</pre>" )
        {
            character_index += 6;

            token.Text = "</pre>";
        }
        else if ( text.slice( character_index, character_index + 2 ) == "@@" )
        {
            character_index += 2;

            it_is_in_a = !it_is_in_a;

            if ( it_is_in_a )
            {
                ParseAttributes( "" );
                
                token.Text = "<a" ~ attributes ~ " href=\"";
                
                url = "";

                while ( character_index < text.length )
                {
                    if ( text.charAt( character_index ) == ' ' )
                    {
                        token.Text ~= url ~ "\">";

                        ++character_index;

                        break;
                    }
                    else if ( text.slice( character_index, character_index + 2 ) == "@@" )
                    {
                        it_is_in_a = false;

                        token.Text ~= url ~ "\">" ~ url ~ "</a>";

                        character_index += 2;

                        break;
                    }
                    else
                    {
                        url ~= text.charAt( character_index );

                        ++character_index;
                    }
                }
            }
            else
            {
                token.Text = "</a>";
            }
        }
        else if ( text.charAt( character_index ) == ' ' )
        {
            ++character_index;

            token.Text = " ";

            while ( character_index < text.length
                    && text.charAt( character_index ) == ' ' )
            {
                token.Text ~= " ";

                ++character_index;
            }

            token.IsSpace = true;
        }
        else if ( text.charAt( character_index ) == '\n' )
        {
            ++character_index;
            
            if ( closing_tag != "" )
            {
                closing_token = new TOKEN();
                closing_token.Text = closing_tag;
                closing_tag = "";

                token_array.push( closing_token );
            }

            token.Text = "\n";
            token_starts_line = true;
        }
        else
        {
            token.Text = text.charAt( character_index ).to!dstring();

            ++character_index;
        }

        token_array.push( token );
    }

    return token_array;
}

// ~~

dstring GetListTag(
    ref TOKEN[] token_array,
    long token_index
    )
{
    TOKEN
        token;

    if ( token_index >= 0
         && token_index + 1 < token_array.length
         && !token_array[ token_index + 1 ].StartsLine
         && token_array[ token_index + 1 ].IsSpace
         && token_array[ token_index + 1 ].Text.length == IndentationSpaceCount - 1 )
    {
        token = token_array[ token_index ];

        if ( !token.IsEscaped )
        {
            if ( token.Text == "*" )
            {
                return "ul";
            }
            else if ( token.Text == "#" )
            {
                return "ol";
            }
        }
    }

    return null;
}

// ~~

void MakeLists(
    ref TOKEN[] token_array
    )
{
    bool
        it_is_in_pre;
    dstring
        tag,
        tag_token_text;
    dstring[]
        tag_array;
    long
        tag_count,
        tag_token_index,
        token_index;
    TOKEN
        tag_token,
        token;

    tag_array = [];

    it_is_in_pre = false;

    for ( token_index = 0;
          token_index < token_array.length;
          ++token_index )
    {
        token = token_array[ token_index ];

        if ( it_is_in_pre )
        {
            if ( token.Text == "</pre>" )
            {
                it_is_in_pre = false;
            }
        }
        else
        {
            if ( token.Text == "<pre>" )
            {
                it_is_in_pre = true;
            }
            else if ( token.StartsLine )
            {
                tag_token_index = token_index;
                tag_token = token;
                tag_count = -1;
                tag = null;

                if ( token.IsSpace )
                {
                    tag = GetListTag( token_array, token_index + 1 );

                    if ( tag !is null )
                    {
                        tag_count = 1 + ( token.Text.length / IndentationSpaceCount );

                        ++token_index;

                        tag_token_index = token_index;
                        tag_token = token_array[ token_index ];

                        tag_token.Text = "";
                        token_array[ token_index + 1 ].Text = "";
                    }
                }
                else
                {
                    tag = GetListTag( token_array, token_index );

                    if ( tag !is null )
                    {
                        tag_count = 1;

                        tag_token.Text = "";
                        token_array[ token_index + 1 ].Text = "";
                    }
                    else if ( tag_array.length > 0 )
                    {
                        tag_count = 0;
                    }
                }

                if ( tag_count >= 0 )
                {
                    tag_token_text = "";

                    if ( tag_count > tag_array.length )
                    {
                        while ( tag_count > tag_array.length )
                        {
                            tag_array.push( tag );
                            tag_token_text ~= "<" ~ tag ~ "><li>";
                        }
                    }
                    else if ( tag_count == tag_array.length )
                    {
                        tag_token_text ~= "</li><li>";
                    }
                    else if ( tag_count < tag_array.length )
                    {
                        while ( tag_count < tag_array.length )
                        {
                            tag_token_text ~= "</li></" ~ tag_array.pop() ~ ">";
                        }

                        if ( tag !is null )
                        {
                            tag_token_text ~= "</li><li>";
                        }
                    }

                    if ( tag_token_text != "" )
                    {
                        token = new TOKEN();
                        token.Text = tag_token_text;
                        token_array.splice( tag_token_index, 0, token );

                        ++token_index;
                    }
                }
            }
        }
    }
}

// ~~

void MakeParagraphs(
    ref TOKEN[] token_array
    )
{
    bool
        it_is_in_pre;
    long
        token_index;
    TOKEN
        token;

    token = new TOKEN();
    token.Text = "<p>";
    token_array.splice( 0, 0, token );

    it_is_in_pre = false;

    for ( token_index = 0;
          token_index < token_array.length;
          ++token_index )
    {
        token = token_array[ token_index ];

        if ( it_is_in_pre )
        {
            if ( token.Text == "</pre>" )
            {
                it_is_in_pre = false;
            }
        }
        else
        {
            if ( token.Text == "<pre>" )
            {
                it_is_in_pre = true;
            }
            else if ( token.StartsLine
                      && token.Text == "\n" )
            {
                token.Text = "</p><p>\n";
            }
        }
    }

    token = new TOKEN();
    token.Text = "</p>";
    token_array.push( token );
}

// ~~

void MakeBreaks(
    ref TOKEN[] token_array
    )
{
    bool
        page_break_is_added;
    long
        token_character_index,
        token_index;
    TOKEN
        token;

    page_break_is_added = false;

    for ( token_index = 0;
          token_index < token_array.length;
          ++token_index )
    {
        token = token_array[ token_index ];

        if ( token.Text == "<pb/>" )
        {
            token.Text = "";

            page_break_is_added = true;
        }
        else if ( page_break_is_added
                  && token.Text.length >= 3
                  && token.Text.startsWith( '<' )
                  && ( !token.Text.startsWith( "</" )
                       || token.Text == "</p><p>\n" ) )
        {
            if ( token.Text.endsWith( "</p><p>\n" ) )
            {
                token_character_index = 6;
            }
            else if ( token.Text.endsWith( ">" ) )
            {
                token_character_index = token.Text.length.to!long() - 1;
            }
            else
            {
                token_character_index = token.Text.indexOf( ' ' );
            }

            token.Text
                = token.Text.slice( 0, token_character_index )
                  ~ " style=\"page-break-before: always\""
                  ~ token.Text.slice( token_character_index, token.Text.length );

            page_break_is_added = false;
        }
    }
}

// ~~

dstring GetText(
    ref TOKEN[] token_array
    )
{
    dstring
        text;
    long
        token_index;

    text = "";

    for ( token_index = 0;
          token_index < token_array.length;
          ++token_index )
    {
        text ~= token_array[ token_index ].Text;
    }

    return text;
}

// ~~

dstring GetProcessedText(
    dstring text
    )
{
    TOKEN[]
        token_array;

    text = GetPreprocessedText( text );

    token_array = GetTokenArray( text );

    MakeLists( token_array );
    MakeParagraphs( token_array );
    MakeBreaks( token_array );

    return GetText( token_array );
}

// ~~

void Process(
    )
{
    dstring
        text;

    text = InputFilePath.readText().to!dstring();

    if ( ColorizeOptionIsEnabled )
    {
        text = text.GetColorizedText( InputFilePath, LanguageName );
    }

    if ( ProcessOptionIsEnabled )
    {
        text = text.GetProcessedText();
    }

    if ( ScriptOptionIsEnabled )
    {
        text
            = "<xmp>\n"
              ~ text
              ~ "</xmp>\n"
              ~ "<script src=\"" ~ ScriptFolderPath.to!dstring() ~ "pendown.js\"></script>\n";
    }

    if ( StyleOptionIsEnabled )
    {
        text
            = "<meta charset=\"utf8\"/>\n"
              ~ "<link rel=\"stylesheet\" href=\"" ~ StyleFolderPath.to!dstring() ~ "pendown.css\">\n"
              ~ text;
    }

    OutputFilePath.write( text.to!string() );
}

// ~~

void main(
    string[] argument_array
    )
{
    string
        option;

    argument_array = argument_array[ 1 .. $ ];

    ColorizeOptionIsEnabled = false;
    ProcessOptionIsEnabled = false;
    ScriptOptionIsEnabled = false;
    StyleOptionIsEnabled = false;
    LanguageName = "";

    TabulationSpaceCount = 4;
    IndentationSpaceCount = 4;

    ClassDefinitionMap[ "°°" ] = "black";
    ClassDefinitionMap[ "¹¹" ] = "cyan";
    ClassDefinitionMap[ "²²" ] = "orange";
    ClassDefinitionMap[ "³³" ] = "green";
    ClassDefinitionMap[ "°" ] = "gray";
    ClassDefinitionMap[ "¹" ] = "pink";
    ClassDefinitionMap[ "²" ] = "red";
    ClassDefinitionMap[ "³" ] = "blue";

    PageOptionIsEnabled = false;
    PageWidth = 21.0;
    PageHeight = 29.7;
    PageLeftMargin = 2;
    PageRightMargin = 1;
    PageTopMargin = 1;
    PageBottomMargin = 1;
    ScriptFolderPath = "";
    StyleFolderPath = "";

    while ( argument_array.length >= 1
            && argument_array[ 0 ].startsWith( "--" ) )
    {
        option = argument_array[ 0 ];

        argument_array = argument_array[ 1 .. $ ];

        if ( option == "--colorize" )
        {
            ColorizeOptionIsEnabled = true;
        }
        else if ( option == "--process" )
        {
            ProcessOptionIsEnabled = true;
        }
        else if ( option == "--script" )
        {
            ScriptOptionIsEnabled = true;
        }
        else if ( option == "--style" )
        {
            StyleOptionIsEnabled = true;
        }
        else if ( option == "--language"
                  && argument_array.length >= 1 )
        {
            LanguageName = argument_array[ 0 ];

            argument_array = argument_array[ 1 .. $ ];
        }
        else if ( option == "--tabulation"
                  && argument_array.length >= 1 )
        {
            TabulationSpaceCount = argument_array[ 0 ].to!long();

            argument_array = argument_array[ 1 .. $ ];
        }
        else if ( option == "--indentation"
                  && argument_array.length >= 1 )
        {
            IndentationSpaceCount = argument_array[ 0 ].to!long();

            argument_array = argument_array[ 1 .. $ ];
        }
        else if ( option == "--page"
                  && argument_array.length >= 6 )
        {
            PageOptionIsEnabled = true;

            PageWidth = argument_array[ 0 ].to!double();
            PageHeight = argument_array[ 1 ].to!double();
            PageLeftMargin = argument_array[ 2 ].to!double();
            PageRightMargin = argument_array[ 3 ].to!double();
            PageTopMargin = argument_array[ 4 ].to!double();
            PageBottomMargin = argument_array[ 5 ].to!double();

            argument_array = argument_array[ 6 .. $ ];
        }
        else if ( option == "--path"
                  && argument_array.length >= 1
                  && argument_array[ 0 ].endsWith( '/' ) )
        {
            ScriptFolderPath = argument_array[ 0 ];
            StyleFolderPath = argument_array[ 0 ];

            argument_array = argument_array[ 1 .. $ ];
        }
        else
        {
            Abort( "Invalid option : " ~ option );
        }
    }

    if ( argument_array.length == 2 )
    {
        InputFilePath = argument_array[ 0 ];
        OutputFilePath = argument_array[ 1 ];

        Process();
    }
    else
    {
        writeln( "Usage :" );
        writeln( "    pendown [options] input_file output_file" );
        writeln( "Options :" );
        writeln( "    --colorize" );
        writeln( "    --process" );
        writeln( "    --script" );
        writeln( "    --style" );
        writeln( "    --language c|c++|cpp|c#|cs|d|java|js|ts" );
        writeln( "    --tabulation 4" );
        writeln( "    --indentation 4" );
        writeln( "    --page 21 29.7 2 1 1 1" );
        writeln( "    --path PENDOWN_FOLDER/" );
        writeln( "Examples :" );
        writeln( "    pendown --process --style --path ../ document.pd document.html" );
        writeln( "    pendown --process --loadable --style --path ../ document.pd document.html" );
        writeln( "    pendown --process --style --path ../ document.pd document.html" );
        writeln( "    pendown --colorize code.d code.pd" );
        writeln( "    pendown --colorize --process --style --path ../ code.d code.html" );
        writeln( "    pendown --colorize --script --style --path ../ code.d code.html" );

        Abort( "Invalid arguments : " ~ argument_array.to!string() );
    }
}
