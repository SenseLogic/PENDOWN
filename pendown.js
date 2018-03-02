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

// == GLOBAL

// -- TYPES

function LANGUAGE(
    )
{
    this.IsConstant = function( code_token )
    {
        return (
            code_token.Text === "false"
            || code_token.Text === "true"
            );
    }

    // ~~

    this.IsType = function( code_token )
    {
        return false;
    }

    // ~~

    this.IsKeyword = function( code_token )
    {
        return (
            code_token.Text === "if"
            || code_token.Text === "else"
            || code_token.Text === "do"
            || code_token.Text === "while"
            || code_token.Text === "for"
            || code_token.Text === "switch"
            || code_token.Text === "case"
            || code_token.Text === "default"
            || code_token.Text === "break"
            || code_token.Text === "continue"
            || code_token.Text === "return"
            );
    }
}

// ~~

function C_LANGUAGE(
    )
{
    this.IsConstant = function( code_token )
    {
        return (
            code_token.Text === "false"
            || code_token.Text === "true"
            );
    }

    // ~~

    this.IsType = function( code_token )
    {
        return (
            code_token.Text === "void"
            || code_token.Text === "bool"
            || code_token.Text === "char"
            || code_token.Text === "short"
            || code_token.Text === "int"
            || code_token.Text === "long"
            || code_token.Text === "signed"
            || code_token.Text === "unsigned"
            || code_token.Text === "float"
            || code_token.Text === "double"
            || code_token.Text === "auto"
            );
    }

    // ~~

    this.IsKeyword = function( code_token )
    {
        return (
            code_token.Text === "if"
            || code_token.Text === "else"
            || code_token.Text === "do"
            || code_token.Text === "while"
            || code_token.Text === "for"
            || code_token.Text === "switch"
            || code_token.Text === "case"
            || code_token.Text === "default"
            || code_token.Text === "break"
            || code_token.Text === "continue"
            || code_token.Text === "return"
            || code_token.Text === "goto"
            || code_token.Text === "sizeof"
            || code_token.Text === "struct"
            || code_token.Text === "union"
            || code_token.Text === "enum"
            || code_token.Text === "typedef"
            || code_token.Text === "const"
            || code_token.Text === "register"
            || code_token.Text === "volatile"
            || code_token.Text === "restrict"
            || code_token.Text === "inline"
            || code_token.Text === "static"
            || code_token.Text === "extern"
            || code_token.Text === "asm"
            );
    }
}

// ~~

function CPP_LANGUAGE(
    )
{
    this.IsConstant = function( code_token )
    {
        return (
            code_token.Text === "false"
            || code_token.Text === "true"
            || code_token.Text === "nullptr"
            );
    }

    // ~~

    this.IsType = function( code_token )
    {
        return (
            code_token.Text === "void"
            || code_token.Text === "bool"
            || code_token.Text === "char"
            || code_token.Text === "short"
            || code_token.Text === "int"
            || code_token.Text === "long"
            || code_token.Text === "signed"
            || code_token.Text === "unsigned"
            || code_token.Text === "float"
            || code_token.Text === "double"
            || code_token.Text === "auto"
            );
    }

    // ~~

    this.IsKeyword = function( code_token )
    {
        return (
            code_token.Text === "if"
            || code_token.Text === "else"
            || code_token.Text === "do"
            || code_token.Text === "while"
            || code_token.Text === "for"
            || code_token.Text === "switch"
            || code_token.Text === "case"
            || code_token.Text === "default"
            || code_token.Text === "break"
            || code_token.Text === "continue"
            || code_token.Text === "return"
            || code_token.Text === "goto"
            || code_token.Text === "try"
            || code_token.Text === "catch"
            || code_token.Text === "throw"
            || code_token.Text === "new"
            || code_token.Text === "delete"
            || code_token.Text === "this"
            || code_token.Text === "sizeof"
            || code_token.Text === "reinterpret_cast"
            || code_token.Text === "static_cast"
            || code_token.Text === "dynamic_cast"
            || code_token.Text === "using"
            || code_token.Text === "namespace"
            || code_token.Text === "public"
            || code_token.Text === "protected"
            || code_token.Text === "private"
            || code_token.Text === "template"
            || code_token.Text === "typename"
            || code_token.Text === "class"
            || code_token.Text === "struct"
            || code_token.Text === "union"
            || code_token.Text === "enum"
            || code_token.Text === "typedef"
            || code_token.Text === "operator"
            || code_token.Text === "virtual"
            || code_token.Text === "final"
            || code_token.Text === "override"
            || code_token.Text === "const"
            || code_token.Text === "mutable"
            || code_token.Text === "volatile"
            || code_token.Text === "register"
            || code_token.Text === "explicit"
            || code_token.Text === "friend"
            || code_token.Text === "inline"
            || code_token.Text === "static"
            || code_token.Text === "extern"
            );
    }
}

// ~~

function CSHARP_LANGUAGE(
    )
{
    this.IsConstant = function( code_token )
    {
        return (
            code_token.Text === "false"
            || code_token.Text === "true"
            || code_token.Text === "null"
            );
    }

    // ~~

    this.IsType = function( code_token )
    {
        return (
            code_token.Text === "void"
            || code_token.Text === "bool"
            || code_token.Text === "char"
            || code_token.Text === "byte"
            || code_token.Text === "sbyte"
            || code_token.Text === "short"
            || code_token.Text === "int"
            || code_token.Text === "uint"
            || code_token.Text === "long"
            || code_token.Text === "ulong"
            || code_token.Text === "float"
            || code_token.Text === "double"
            || code_token.Text === "decimal"
            || code_token.Text === "string"
            );
    }

    // ~~

    this.IsKeyword = function( code_token )
    {
        return (
            code_token.Text === "if"
            || code_token.Text === "else"
            || code_token.Text === "do"
            || code_token.Text === "while"
            || code_token.Text === "for"
            || code_token.Text === "foreach"
            || code_token.Text === "switch"
            || code_token.Text === "case"
            || code_token.Text === "default"
            || code_token.Text === "break"
            || code_token.Text === "continue"
            || code_token.Text === "return"
            || code_token.Text === "goto"
            || code_token.Text === "try"
            || code_token.Text === "catch"
            || code_token.Text === "finally"
            || code_token.Text === "throw"
            || code_token.Text === "lock"
            || code_token.Text === "new"
            || code_token.Text === "stackalloc"
            || code_token.Text === "sizeof"
            || code_token.Text === "typeof"
            || code_token.Text === "is"
            || code_token.Text === "as"
            || code_token.Text === "params"
            || code_token.Text === "this"
            || code_token.Text === "base"
            || code_token.Text === "using"
            || code_token.Text === "namespace"
            || code_token.Text === "public"
            || code_token.Text === "protected"
            || code_token.Text === "private"
            || code_token.Text === "class"
            || code_token.Text === "interface"
            || code_token.Text === "enum"
            || code_token.Text === "operator"
            || code_token.Text === "object"
            || code_token.Text === "event"
            || code_token.Text === "static"
            || code_token.Text === "const"
            || code_token.Text === "in"
            || code_token.Text === "out"
            || code_token.Text === "ref"
            || code_token.Text === "readonly"
            || code_token.Text === "delegate"
            || code_token.Text === "abstract"
            || code_token.Text === "override"
            || code_token.Text === "implicit"
            || code_token.Text === "volatile"
            || code_token.Text === "checked"
            || code_token.Text === "unchecked"
            || code_token.Text === "unsafe"
            || code_token.Text === "fixed"
            || code_token.Text === "sealed"
            || code_token.Text === "internal"
            || code_token.Text === "extern"
            );
    }
}

// ~~

function D_LANGUAGE(
    )
{
    this.IsConstant = function( code_token )
    {
        return (
            code_token.Text === "false"
            || code_token.Text === "true"
            || code_token.Text === "null"
            );
    }

    // ~~

    this.IsType = function( code_token )
    {
        return (
            code_token.Text === "void"
            || code_token.Text === "bool"
            || code_token.Text === "char"
            || code_token.Text === "wchar"
            || code_token.Text === "dchar"
            || code_token.Text === "byte"
            || code_token.Text === "ubyte"
            || code_token.Text === "short"
            || code_token.Text === "ushort"
            || code_token.Text === "int"
            || code_token.Text === "uint"
            || code_token.Text === "long"
            || code_token.Text === "ulong"
            || code_token.Text === "float"
            || code_token.Text === "double"
            || code_token.Text === "string"
            || code_token.Text === "wstring"
            || code_token.Text === "dstring"
            || code_token.Text === "auto"
            );
    }

    // ~~

    this.IsKeyword = function( code_token )
    {
        return (
            code_token.Text === "if"
            || code_token.Text === "else"
            || code_token.Text === "do"
            || code_token.Text === "while"
            || code_token.Text === "for"
            || code_token.Text === "foreach"
            || code_token.Text === "switch"
            || code_token.Text === "case"
            || code_token.Text === "default"
            || code_token.Text === "break"
            || code_token.Text === "continue"
            || code_token.Text === "return"
            || code_token.Text === "try"
            || code_token.Text === "catch"
            || code_token.Text === "throw"
            || code_token.Text === "new"
            || code_token.Text === "delete"
            || code_token.Text === "import"
            || code_token.Text === "this"
            || code_token.Text === "public"
            || code_token.Text === "protected"
            || code_token.Text === "private"
            || code_token.Text === "class"
            || code_token.Text === "struct"
            || code_token.Text === "union"
            || code_token.Text === "enum"
            || code_token.Text === "final"
            || code_token.Text === "override"
            );
    }
}

// ~~

function JAVA_LANGUAGE(
    )
{
    this.IsConstant = function( code_token )
    {
        return (
            code_token.Text === "false"
            || code_token.Text === "true"
            || code_token.Text === "null"
            );
    }

    // ~~

    this.IsType = function( code_token )
    {
        return (
            code_token.Text === "void"
            || code_token.Text === "boolean"
            || code_token.Text === "char"
            || code_token.Text === "byte"
            || code_token.Text === "short"
            || code_token.Text === "int"
            || code_token.Text === "long"
            || code_token.Text === "float"
            || code_token.Text === "double"
            );
    }

    // ~~

    this.IsKeyword = function( code_token )
    {
        return (
            code_token.Text === "if"
            || code_token.Text === "else"
            || code_token.Text === "do"
            || code_token.Text === "while"
            || code_token.Text === "for"
            || code_token.Text === "switch"
            || code_token.Text === "case"
            || code_token.Text === "default"
            || code_token.Text === "break"
            || code_token.Text === "continue"
            || code_token.Text === "return"
            || code_token.Text === "goto"
            || code_token.Text === "try"
            || code_token.Text === "catch"
            || code_token.Text === "finally"
            || code_token.Text === "throw"
            || code_token.Text === "new"
            || code_token.Text === "instanceof"
            || code_token.Text === "this"
            || code_token.Text === "super"
            || code_token.Text === "import"
            || code_token.Text === "public"
            || code_token.Text === "protected"
            || code_token.Text === "private"
            || code_token.Text === "package"
            || code_token.Text === "class"
            || code_token.Text === "interface"
            || code_token.Text === "enum"
            || code_token.Text === "extends"
            || code_token.Text === "implements"
            || code_token.Text === "throws"
            || code_token.Text === "static"
            || code_token.Text === "const"
            || code_token.Text === "final"
            || code_token.Text === "abstract"
            || code_token.Text === "volatile"
            || code_token.Text === "transient"
            || code_token.Text === "native"
            || code_token.Text === "synchronized"
            || code_token.Text === "strictfp"
            );
    }
}

// ~~

function JAVASCRIPT_LANGUAGE(
    )
{
    this.IsConstant = function( code_token )
    {
        return (
            code_token.Text === "false"
            || code_token.Text === "true"
            || code_token.Text === "null"
            || code_token.Text === "undefined"
            );
    }

    // ~~

    this.IsType = function( code_token )
    {
        return (
            code_token.Text === "void"
            || code_token.Text === "boolean"
            || code_token.Text === "char"
            || code_token.Text === "byte"
            || code_token.Text === "short"
            || code_token.Text === "int"
            || code_token.Text === "long"
            || code_token.Text === "float"
            || code_token.Text === "double"
            );
    }

    // ~~

    this.IsKeyword = function( code_token )
    {
        return (
            code_token.Text === "var"
            || code_token.Text === "let"
            || code_token.Text === "if"
            || code_token.Text === "else"
            || code_token.Text === "do"
            || code_token.Text === "while"
            || code_token.Text === "for"
            || code_token.Text === "switch"
            || code_token.Text === "case"
            || code_token.Text === "default"
            || code_token.Text === "break"
            || code_token.Text === "continue"
            || code_token.Text === "return"
            || code_token.Text === "goto"
            || code_token.Text === "try"
            || code_token.Text === "catch"
            || code_token.Text === "finally"
            || code_token.Text === "throw"
            || code_token.Text === "new"
            || code_token.Text === "delete"
            || code_token.Text === "yield"
            || code_token.Text === "await"
            || code_token.Text === "eval"
            || code_token.Text === "with"
            || code_token.Text === "in"
            || code_token.Text === "debugger"
            || code_token.Text === "instanceof"
            || code_token.Text === "typeof"
            || code_token.Text === "arguments"
            || code_token.Text === "this"
            || code_token.Text === "super"
            || code_token.Text === "import"
            || code_token.Text === "export"
            || code_token.Text === "public"
            || code_token.Text === "protected"
            || code_token.Text === "private"
            || code_token.Text === "package"
            || code_token.Text === "class"
            || code_token.Text === "interface"
            || code_token.Text === "enum"
            || code_token.Text === "function"
            || code_token.Text === "extends"
            || code_token.Text === "implements"
            || code_token.Text === "throws"
            || code_token.Text === "static"
            || code_token.Text === "const"
            || code_token.Text === "final"
            || code_token.Text === "abstract"
            || code_token.Text === "volatile"
            || code_token.Text === "transient"
            || code_token.Text === "native"
            || code_token.Text === "synchronized"
            );
    }
}

// ~~

function TYPESCRIPT_LANGUAGE(
    )
{
    this.IsConstant = function( code_token )
    {
        return (
            code_token.Text === "false"
            || code_token.Text === "true"
            || code_token.Text === "null"
            || code_token.Text === "undefined"
            );
    }

    // ~~

    this.IsType = function( code_token )
    {
        return (
            code_token.Text === "boolean"
            || code_token.Text === "number"
            || code_token.Text === "string"
            || code_token.Text === "symbol"
            || code_token.Text === "any"
            );
    }

    // ~~

    this.IsKeyword = function( code_token )
    {
        return (
            code_token.Text === "var"
            || code_token.Text === "let"
            || code_token.Text === "if"
            || code_token.Text === "else"
            || code_token.Text === "do"
            || code_token.Text === "while"
            || code_token.Text === "for"
            || code_token.Text === "switch"
            || code_token.Text === "case"
            || code_token.Text === "default"
            || code_token.Text === "break"
            || code_token.Text === "continue"
            || code_token.Text === "return"
            || code_token.Text === "goto"
            || code_token.Text === "try"
            || code_token.Text === "catch"
            || code_token.Text === "finally"
            || code_token.Text === "throw"
            || code_token.Text === "new"
            || code_token.Text === "delete"
            || code_token.Text === "yield"
            || code_token.Text === "await"
            || code_token.Text === "eval"
            || code_token.Text === "with"
            || code_token.Text === "in"
            || code_token.Text === "debugger"
            || code_token.Text === "instanceof"
            || code_token.Text === "typeof"
            || code_token.Text === "arguments"
            || code_token.Text === "this"
            || code_token.Text === "super"
            || code_token.Text === "import"
            || code_token.Text === "export"
            || code_token.Text === "public"
            || code_token.Text === "protected"
            || code_token.Text === "private"
            || code_token.Text === "package"
            || code_token.Text === "class"
            || code_token.Text === "interface"
            || code_token.Text === "enum"
            || code_token.Text === "function"
            || code_token.Text === "constructor"
            || code_token.Text === "extends"
            || code_token.Text === "implements"
            || code_token.Text === "static"
            || code_token.Text === "const"
            || code_token.Text === "abstract"
            || code_token.Text === "volatile"
            || code_token.Text === "transient"
            || code_token.Text === "native"
            || code_token.Text === "synchronized"
            );
    }
}

// ~~

function CODE_TOKEN_TYPE(
    )
{
    this.None = 0;
    this.ShortComment = 1;
    this.LongComment = 2;
    this.String = 3;
    this.Number = 4;
    this.Constant = 5;
    this.Type = 6;
    this.Keyword = 7;
    this.Pragma = 8;
    this.LowerCaseIdentifier = 9;
    this.UpperCaseIdentifier = 10;
    this.MinorCaseIdentifier = 11;
    this.MajorCaseIdentifier = 12;
    this.Identifier = 13;
    this.Operator = 14;
    this.Separator = 15;
    this.Delimiter = 16;
    this.Special = 17;
    this.Spacing = 18;
    this.Count = 19;
}

// ~~

function CODE_TOKEN(
    )
{
    this.Type = CODE_TOKEN_TYPE.None;
    this.Text = "";
}

// ~~

function TOKEN(
    )
{
    this.Text = "";
    this.StartsLine = false;
    this.IsSpace = false;
    this.IsEscaped = false;
}

// ~~

function TAG(
    )
{
    this.Name = "";
    this.DefinitionArray = [];
    this.DefinitionIndex = 0;
}

// -- FUNCTIONS

String.prototype.isDigit = function()
{
    return (
        this.length === 1
        && this >= '0'
        && this <= '9'
        );
}

// ~~

String.prototype.isAlpha = function()
{
    return (
        this.length === 1
        && ( ( this >= 'a' && this <= 'z' )
             || ( this >= 'A' && this <= 'Z' ) )
        );
}

// ~~

String.prototype.isLower = function()
{
    return this >= 'a' && this <= 'z';
}

// ~~

String.prototype.isUpper = function()
{
    return this >= 'A' && this <= 'Z';
}

// ~~

String.prototype.toLower = function()
{
    return this.toLowerCase();
}

// ~~

String.prototype.toUpper = function()
{
    return this.toUpperCase();
}

// ~~

function ReplaceTabulations(
    text
    )
{
    var
        character,
        character_index,
        replaced_text,
        line_character_index;

    text = text.split( "\t\t" ).join( "\t    " ).split( "\n\t" ).join( "\n    " );

    if ( text.indexOf( '\t' ) >= 0 )
    {
        replaced_text = "";

        line_character_index = 0;

        for ( character_index = 0;
              character_index < text.length;
              ++character_index )
        {
            character = text.charAt( character_index );

            if ( character === '\t' )
            {
                do
                {
                    replaced_text += ' ';

                    ++line_character_index;
                }
                while ( ( line_character_index % TabulationSpaceCount ) !== 0 );
            }
            else
            {
                replaced_text += character;

                if ( character === '\n' )
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

function GetCleanedText(
    text
    )
{
    var
        cleaned_text;

    cleaned_text = ReplaceTabulations( text ).split( "\r" ).join( "" );

    if ( !cleaned_text.endsWith( '\n' ) )
    {
        cleaned_text += '\n';
    }

    return cleaned_text;
}

// ~~

function IsAlphabeticalCharacter(
    character
    )
{
    return (
        ( character >= 'a' && character <= 'z' )
        || ( character >= 'A' && character <= 'Z' )
        );
}

// ~~

function IsDecimalCharacter(
    character
    )
{
    return character >= '0' && character <= '9';
}

// ~~

function IsHexadecimalCharacter(
    character
    )
{
    return (
        ( character >= '0' && character <= '9' )
        || ( character >= 'a' && character <= 'f' )
        || ( character >= 'A' && character <= 'F' )
        );
}

// ~~

function GetHexadecimalCharacterValue(
    character
    )
{
    if ( character >= '0'
         && character <= '9' )
    {
        return character.charCodeAt( 0 ) - 48;
    }
    else if ( character >= 'a'
              && character <= 'f' )
    {
        return character.charCodeAt( 0 ) - 87;
    }
    else if ( character >= 'A'
              && character <= 'F' )
    {
        return character.charCodeAt( 0 ) - 55;
    }
    else
    {
        return 0;
    }
}

// ~~

function GetColor(
    color
    )
{
    var
        red,
        green,
        blue,
        alpha;

    if ( color.length === 4 )
    {
        red = GetHexadecimalCharacterValue( color.charAt( 0 ) );
        green = GetHexadecimalCharacterValue( color.charAt( 1 ) );
        blue = GetHexadecimalCharacterValue( color.charAt( 2 ) );
        alpha = GetHexadecimalCharacterValue( color.charAt( 3 ) );

        red += red * 16;
        green += green * 16;
        blue += blue * 16;
        alpha += alpha * 16;

        return "rgba(" + red + "," + green + "," + blue + "," + ( alpha / 255.0 ) + ")";
    }
    else if ( color.length === 8 )
    {
        red = GetHexadecimalCharacterValue( color.charAt( 0 ) ) * 16 + GetHexadecimalCharacterValue( color.charAt( 1 ) );
        green = GetHexadecimalCharacterValue( color.charAt( 2 ) ) * 16 + GetHexadecimalCharacterValue( color.charAt( 3 ) );
        blue = GetHexadecimalCharacterValue( color.charAt( 4 ) ) * 16 + GetHexadecimalCharacterValue( color.charAt( 5 ) );
        alpha = GetHexadecimalCharacterValue( color.charAt( 6 ) ) * 16 + GetHexadecimalCharacterValue( color.charAt( 7 ) );

        return "rgba(" + red + "," + green + "," + blue + "," + ( alpha / 255.0 ) + ")";
    }
    else
    {
        return "#" + color;
    }
}

// ~~

function HasUnit(
    size
    )
{
    return (
        size === "auto"
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

function GetFormat(
    url
    )
{
    var
        dot_character_index;
        
    dot_character_index = url.lastIndexOf( '.' );
    
    if ( dot_character_index >= 0 )
    {
        return url.slice( dot_character_index + 1 );
    }
    else
    {
        return "";
    }
}

// ~~

function IsImageFormat(
    format
    )
{
    return (
        format == "apng"
        || format == "bmp"
        || format == "gif"
        || format == "ico"
        || format == "jpg"
        || format == "jpeg"
        || format == "png"
        || format == "svg"
        );
}

// ~~

function GetLanguage(
    file_path,
    file_extension
    )
{
    if ( file_extension !== "" )
    {
        if ( file_extension.startsWith( '.' ) )
        {
            file_path = file_extension;
        }
        else
        {
            file_path = "." + file_extension;
        }
    }

    if ( file_path.endsWith( ".c" )
         || file_path.endsWith( ".h" ) )
    {
        return new C_LANGUAGE();
    }
    else if ( file_path.endsWith( ".cpp" )
              || file_path.endsWith( ".hpp" )
              || file_path.endsWith( ".cxx" )
              || file_path.endsWith( ".hxx" ) )
    {
        return new CPP_LANGUAGE();
    }
    else if ( file_path.endsWith( ".cs" ) )
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

function GetCodeTokenArray(
    text,
    language
    )
{
    var
        character,
        character_index,
        code_token,
        code_token_array,
        delimiter_character,
        next_character;

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

        if ( code_token !== null )
        {
            if ( code_token.Type === CODE_TOKEN_TYPE.String )
            {
                if ( character === delimiter_character )
                {
                    code_token.Text += character;

                    code_token = null;
                    character = 0;
                }
                else if ( character === '\\' )
                {
                    code_token.Text += character;
                    code_token.Text += next_character;

                    character = 0;

                    ++character_index;
                }
                else
                {
                    code_token.Text += character;
                }
            }
            else if ( code_token.Type === CODE_TOKEN_TYPE.ShortComment )
            {
                if ( character === '\r'
                     || character === '\n' )
                {
                    code_token = null;
                }
                else
                {
                    code_token.Text += character;
                }
            }
            else if ( code_token.Type === CODE_TOKEN_TYPE.LongComment )
            {
                if ( character === '*'
                     && next_character === '/' )
                {
                    code_token.Text += "*/";

                    code_token = null;
                    character = 0;

                    ++character_index;
                }
                else
                {
                    code_token.Text += character;
                }
            }
            else if ( ( code_token.Type === CODE_TOKEN_TYPE.Number
                        && ( character.isDigit()
                             || ( character === '.' && next_character.isDigit() )
                             || character.isAlpha() ) )
                      || ( code_token.Type === CODE_TOKEN_TYPE.Identifier
                           && ( character.isAlpha()
                                || character.isDigit()
                                || character === '_' ) )
                      || ( code_token.Type === CODE_TOKEN_TYPE.Operator
                           && "~+-*/%^$&|?:!=<>#".indexOf( character ) >= 0 ) )
            {
                code_token.Text += character;
            }
            else
            {
                if ( code_token.Type === CODE_TOKEN_TYPE.Identifier )
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
                    else if ( code_token.Text === code_token.Text.toLower() )
                    {
                        code_token.Type = CODE_TOKEN_TYPE.LowerCaseIdentifier;
                    }
                    else if ( code_token.Text === code_token.Text.toUpper()
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

        if ( code_token === null
             && character !== 0 )
        {
            code_token = new CODE_TOKEN();

            if ( character === '/'
                 && next_character === '/' )
            {
                code_token.Type = CODE_TOKEN_TYPE.ShortComment;
                code_token.Text = "//";

                ++character_index;
            }
            else if ( character === '/'
                      && next_character === '*' )
            {
                code_token.Type = CODE_TOKEN_TYPE.LongComment;
                code_token.Text = "/*";

                ++character_index;
            }
            else if ( character === '\''
                      || character === '\"'
                      || character === '`' )
            {
                code_token.Type = CODE_TOKEN_TYPE.String;
                code_token.Text += character;

                delimiter_character = character;
            }
            else if ( character.isDigit()
                      || ( character === '-'
                           && next_character.isDigit() ) )
            {
                code_token.Type = CODE_TOKEN_TYPE.Number;
                code_token.Text += character;
            }
            else if ( character.isAlpha()
                      || character === '_'
                      || ( character === '#' && next_character.isAlpha() ) )
            {
                code_token.Type = CODE_TOKEN_TYPE.Identifier;
                code_token.Text += character;
            }
            else if ( "~+-*/%^$&|!=<>#".indexOf( character ) >= 0 )
            {
                code_token.Type = CODE_TOKEN_TYPE.Operator;
                code_token.Text += character;
            }
            else if ( ".,;".indexOf( character ) >= 0 )
            {
                code_token.Type = CODE_TOKEN_TYPE.Separator;
                code_token.Text += character;
            }
            else if ( "()[]{}".indexOf( character ) >= 0 )
            {
                code_token.Type = CODE_TOKEN_TYPE.Delimiter;
                code_token.Text += character;
            }
            else if ( " \t\r\n".indexOf( character ) >= 0 )
            {
                code_token.Type = CODE_TOKEN_TYPE.Spacing;
                code_token.Text += character;
            }
            else
            {
                code_token.Type = CODE_TOKEN_TYPE.Special;
                code_token.Text += character;
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

function EscapeSpecialCharacters(
    code_token_array
    )
{
    var
        character,
        character_index,
        code_token,
        code_token_index,
        code_token_text,
        prior_character;

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

            if ( character === '<' )
            {
                code_token_text += "&lt;";
            }
            else if ( character === '>' )
            {
                code_token_text += "&gt;";
            }
            else
            {
                if ( "\\`°⁰¹²³⁴⁵⁶⁷⁸⁹!#@".indexOf( character ) >= 0
                     || ( "+-$*%^,~_{}[]:".indexOf( character ) >= 0
                          && character === prior_character ) )
                {
                    code_token_text += '\\';
                }

                code_token_text += character;
            }

            prior_character = character;
        }

        code_token.Text = code_token_text;
    }
}

// ~~

function GetColorizedText(
    text,
    file_path,
    file_extension,
    style
    )
{
    var
        code_token,
        code_token_array,
        code_token_index,
        color_prefix_array,
        color_suffix_array,
        colorized_text,
        language;

    language = GetLanguage( file_path, file_extension );

    text = GetCleanedText( text );

    code_token_array = GetCodeTokenArray( text, language );

    EscapeSpecialCharacters( code_token_array );

    color_prefix_array = [];
    color_prefix_array[ CODE_TOKEN_TYPE.ShortComment ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.LongComment ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.String ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Number ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Constant ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Type ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Keyword ] = "¹";
    color_prefix_array[ CODE_TOKEN_TYPE.Pragma ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.LowerCaseIdentifier ] = "";
    color_prefix_array[ CODE_TOKEN_TYPE.UpperCaseIdentifier ] = "⁰";
    color_prefix_array[ CODE_TOKEN_TYPE.MinorCaseIdentifier ] = "";
    color_prefix_array[ CODE_TOKEN_TYPE.MajorCaseIdentifier ] = "";
    color_prefix_array[ CODE_TOKEN_TYPE.Identifier ] = "²";
    color_prefix_array[ CODE_TOKEN_TYPE.Operator ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.Separator ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.Delimiter ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.Special ] = "°";
    color_prefix_array[ CODE_TOKEN_TYPE.Spacing ] = "";

    color_suffix_array = color_prefix_array;

    colorized_text = ":::" + style + "\n";

    for ( code_token_index = 0;
          code_token_index < code_token_array.length;
          ++code_token_index )
    {
        code_token = code_token_array[ code_token_index ];

        if ( code_token_index === 0
             || color_prefix_array[ code_token.Type ]
                !== color_prefix_array[ code_token_array[ code_token_index - 1 ].Type ] )
        {
            colorized_text += color_prefix_array[ code_token.Type ];
        }

        colorized_text += code_token.Text;

        if ( code_token_index === code_token_array.length - 1
             || color_suffix_array[ code_token.Type ]
                !== color_suffix_array[ code_token_array[ code_token_index + 1 ].Type ] )
        {
            colorized_text += color_suffix_array[ code_token.Type ];
        }
    }

    colorized_text += ":::\n";

    return colorized_text;
}

// ~~

function GetPreprocessedText(
    text
    )
{
    var
        code_line,
        code_line_array,
        code_line_index,
        code_text,
        file_extension,
        line,
        line_array,
        line_index,
        post_line_index,
        style;

    text = GetCleanedText( text );

    line_array = text.split( '\n' );

    for ( line_index = 0;
          line_index < line_array.length;
          ++line_index )
    {
        line = line_array[ line_index ].trim();

        if ( line === "" )
        {
            line_array[ line_index ] = "";
        }
        else if ( line.startsWith( ":::" ) )
        {
            if ( line.startsWith( ":::^c\\" )
                 || line.startsWith( ":::^h\\" )
                 || line.startsWith( ":::^cpp\\" )
                 || line.startsWith( ":::^hpp\\" )
                 || line.startsWith( ":::^cxx\\" )
                 || line.startsWith( ":::^hxx\\" )
                 || line.startsWith( ":::^cs\\" )
                 || line.startsWith( ":::^d\\" )
                 || line.startsWith( ":::^java\\" )
                 || line.startsWith( ":::^js\\" )
                 || line.startsWith( ":::^ts\\" ) )
            {
                file_extension = line.split( '\\' )[ 0 ].slice( 4 );
                style = line.slice( line.indexOf( '\\' ) + 1 );

                code_text = "";

                for ( post_line_index = line_index + 1;
                      post_line_index < line_array.length;
                      ++post_line_index )
                {
                    code_line = line_array[ post_line_index ];

                    if ( code_line.trim() === ":::" )
                    {
                        break;
                    }
                    else
                    {
                        code_text += code_line;
                        code_text += '\n';
                    }
                }

                if ( code_text !== "" )
                {
                    code_text = GetColorizedText( code_text, "", file_extension, style );

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

function AddTag(
    name,
    definition
    )
{
    var
        tag,
        tag_index;
        
    for ( tag_index = 0;
          tag_index < TagArray.length;
          ++tag_index )
    {
        if ( TagArray[ tag_index ].Name === name )
        {
            TagArray[ tag_index ].DefinitionArray.push( definition );
            
            return;
        }
    }
    
    tag = new TAG();
    tag.Name = name;
    tag.DefinitionArray.push( definition );
    tag.DefinitionIndex = 0;
    
    TagArray.push( tag );
}

// ~~

function RemoveTag(
    name
    )
{
    var
        tag_index;
        
    for ( tag_index = 0;
          tag_index < TagArray.length;
          ++tag_index )
    {
        if ( TagArray[ tag_index ].Name === name )
        {
            TagArray.splice( tag_index, 1 );
            
            return;
        }
    }
}

// ~~

function GetTokenArray(
    text
    )
{
    var
        attributes,
        character_index,
        closing_tag,
        closing_token,
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
        it_is_in_violet_span,
        it_is_in_white_span,
        it_is_in_yellow_span,
        table_count,
        token,
        token_array,
        token_character_index,
        token_starts_line,
        token_text,
        url;

    // ~~

    function ReplaceDefinitions(
        modifiers
        )
    {
        var
            modifier,
            modifier_array,
            modifier_index,
            old_modifiers;

        do
        {
            old_modifiers = modifiers;

            modifier_array = modifiers.split( '\f' );

            for ( modifier_index = 0;
                  modifier_index < modifier_array.length;
                  ++modifier_index )
            {
                modifier = modifier_array[ modifier_index ];

                if ( ModifierMap.hasOwnProperty( modifier ) )
                {
                    modifier_array[ modifier_index ] = ModifierMap[ modifier ];
                }
            }

            modifiers = modifier_array.join( '\f' );
        }
        while ( modifiers !== old_modifiers );

        return modifiers;
    }
    
    // ~~
    
    function GetAttributes(
        styles
        )
    {
        var
            style_character_index;
            
        style_character_index = attributes.indexOf( " style=\"" );
        
        if ( style_character_index >= 0 )
        {
            return attributes.slice( 0, style_character_index + 8 ) + styles + ";" + attributes.slice( style_character_index + 8 );
        }
        else
        {
            return attributes + " style=\"" + styles + "\"";
        }
    }

    // ~~

    function ParseAttributes(
        modifiers
        )
    {
        var
            added_modifiers,
            colon_character_index,
            character,
            classes,
            modifier,
            modifier_array,
            modifier_character_index,
            modifier_index,
            modifier_list_is_valid,
            modifier_name,
            equal_character_index,
            id,
            other_attributes,
            part_array,
            size,
            space_character_index,
            span,
            styles;

        id = "";
        styles = "";
        span = "";
        other_attributes = "";

        modifier_list_is_valid = true;

        while ( character_index < text.length
                && text.charAt( character_index ) === '^'
                && modifier_list_is_valid )
        {
            modifier_list_is_valid = false;
            
            colon_character_index = 0;
            
            added_modifiers = "";

            for ( modifier_character_index = character_index + 1;
                  modifier_character_index < text.length;
                  ++modifier_character_index )
            {
                character = text.charAt( modifier_character_index );

                if ( character === '\\' )
                {
                    if ( added_modifiers !== "" )
                    {
                        if ( colon_character_index > 0 )
                        {
                            modifier_name = added_modifiers.slice( colon_character_index + 1 );
                            added_modifiers = added_modifiers.slice( 0, colon_character_index );
                            
                            ModifierMap[ modifier_name ] = added_modifiers;
                        }

                        if ( modifiers !== "" )
                        {
                            modifiers += "\f";
                        }

                        modifiers += added_modifiers;

                        character_index = modifier_character_index + 1;
                        modifier_list_is_valid = true;
                    }

                    break;
                }
                else if ( character === '\n' )
                {
                    break;
                }
                else if ( character === ',' )
                {
                    added_modifiers += '\f';
                }
                else if ( character === '^'
                         && modifier_character_index + 1 < text.length )
                {
                    ++modifier_character_index;
                    
                    added_modifiers += text.charAt( modifier_character_index );
                }
                else
                {
                    added_modifiers += character;
                    
                    if ( character === ':' )
                    {
                        colon_character_index = added_modifiers.length - 1;
                    }
                }
            }
        }

        modifiers = ReplaceDefinitions( modifiers );
        modifier_array = modifiers.split( '\f' );
        
        classes = "";

        for ( modifier_index = 0;
              modifier_index < modifier_array.length;
              ++modifier_index )
        {
            modifier = modifier_array[ modifier_index ];

            if ( modifier.startsWith( '!' ) )
            {
                space_character_index = modifier.indexOf( ' ' );
                
                if ( space_character_index > 0 )
                {
                    AddTag( modifier.slice( 1, space_character_index ), modifier.slice( space_character_index + 1 ) );
                }
                else
                {
                    RemoveTag( modifier.slice( 1 ) );
                }
            }
            else if ( modifier.startsWith( '?' ) )
            {
                id = modifier.slice( 1 );
            }
            else if ( modifier.startsWith( '$' ) )
            {
                if ( styles !== "" )
                {
                    styles += ";";
                }

                styles += "color:" + GetColor( modifier.slice( 1 ) );
            }
            else if ( modifier.startsWith( '~' ) )
            {
                if ( styles !== "" )
                {
                    styles += ";";
                }

                styles += "text-decoration-color:" + GetColor( modifier.slice( 1 ) );
            }
            else if ( modifier.startsWith( '#' ) )
            {
                if ( styles !== "" )
                {
                    styles += ";";
                }

                styles += "background-color:" + GetColor( modifier.slice( 1 ) );
            }
            else if ( modifier.startsWith( '+' ) )
            {
                if ( styles !== "" )
                {
                    styles += ";";
                }

                styles += "border-color:" + GetColor( modifier.slice( 1 ) );
            }
            else if ( modifier.startsWith( '@' ) )
            {
                size = modifier.slice( 1 );

                if ( !HasUnit( size ) )
                {
                    size += "rem";
                }

                if ( styles !== "" )
                {
                    styles += ";";
                }

                styles += "font-size:" + size;
            }
            else if ( modifier.startsWith( '=' ) )
            {
                span = modifier.slice( 1 );
            }
            else if ( modifier.startsWith( '&' ) )
            {
                other_attributes += " " + modifier.slice( 1 );
            }
            else
            {
                equal_character_index = modifier.indexOf( '=' );

                if ( equal_character_index > 0 )
                {
                    if ( styles !== "" )
                    {
                        styles += ";";
                    }

                    styles += modifier.slice( 0, equal_character_index ) + ":" + modifier.slice( equal_character_index + 1 );
                }
                else
                {
                    if ( classes !== "" )
                    {
                        classes += " ";
                    }

                    classes += modifier;
                }
            }
        }

        attributes = "";

        if ( id !== "" )
        {
            attributes += " id=\"" + id + "\"";
        }

        if ( classes !== "" )
        {
            attributes += " class=\"" + classes + "\"";
        }

        if ( styles !== "" )
        {
            attributes += " style=\"" + styles + "\"";
        }

        if ( span !== "" )
        {
            attributes += " colspan=\"" + span + "\"";
        }

        if ( other_attributes !== "" )
        {
            attributes += other_attributes;
        }
    }

    // ~~

    function ParseTag(
        tag_prefix,
        modifiers,
        tag_suffix
        )
    {
        var
            character,
            modifier_character_index,
            modifier_list_is_valid,
            tag_character_index;

        if ( text.slice( character_index, character_index + tag_prefix.length ) === tag_prefix )
        {
            if ( tag_suffix.length === 0 )
            {
                character_index += tag_prefix.length;

                ParseAttributes( modifiers );

                return true;
            }
            else
            {
                tag_character_index = character_index + tag_prefix.length;
                modifier_list_is_valid = true;

                while ( tag_character_index < text.length
                        && text.charAt( tag_character_index ) === '^'
                        && modifier_list_is_valid )
                {
                    modifier_list_is_valid = false;

                    for ( modifier_character_index = tag_character_index + 1;
                          modifier_character_index < text.length;
                          ++modifier_character_index )
                    {
                        character = text.charAt( modifier_character_index );

                        if ( character === '\\' )
                        {
                            tag_character_index = modifier_character_index + 1;
                            modifier_list_is_valid = true;

                            break;
                        }
                        else if ( character === '^'
                                  && modifier_character_index + 1 < text.length )
                        {
                            ++modifier_character_index;
                        }
                        else if ( character === '\n' )
                        {
                            break;
                        }
                    }
                }

                if ( tag_suffix.length === 0
                     || text.slice( tag_character_index, tag_character_index + tag_suffix.length ) === tag_suffix )
                {
                    character_index += tag_prefix.length;

                    ParseAttributes( modifiers );

                    character_index += tag_suffix.length;

                    return true;
                }
            }
        }

        return false;
    }

    // ~~
    
    function ParseDefinedTag(
        )
    {
        var
            tag,
            tag_index;
            
        for ( tag_index = 0;
              tag_index < TagArray.length;
              ++tag_index )
        {
            tag = TagArray[ tag_index ];
            
            if ( ParseTag( tag.Name, "", "" ) )
            {
                token_text = tag.DefinitionArray[ tag.DefinitionIndex ].split( "$" ).join( attributes );
                
                tag.DefinitionIndex = ( tag.DefinitionIndex + 1 ) % tag.DefinitionArray.length;
                
                return true;
            }
        }
        
        return false;
    }
    
    // ~~

    function ParseImage(
        )
    {
        var
            character,
            format,
            height,
            size_array,
            size_is_parsed,
            size,
            width;

        url = "";
        size = "";
        size_is_parsed = false;

        while ( character_index < text.length )
        {
            character = text.charAt( character_index );

            if ( character === ']'
                 && character_index + 1 < text.length
                 && text.charAt( character_index + 1 ) === ']' )
            {
                character_index += 2;

                break;
            }
            else if ( size_is_parsed )
            {
                size += character;
            }
            else if ( character === ':' )
            {
                size_is_parsed = true;
            }
            else 
            {
                if ( character === '\\'
                     && character_index + 1 < text.length )
                {
                    ++character_index;
                    
                    character = text.charAt( character_index );
                }

                if ( character === '\"' )
                {
                    url += "&quot;";
                }
                else
                {
                    url += character;
                }
            }

            ++character_index;
        }

        if ( size === "" )
        {
            size = ",100";
        }

        size_array = size.split( ',' );

        if ( size_array.length === 1 )
        {
            height = size_array[ 0 ];
            width = "";
        }
        else if ( size_array.length === 2 )
        {
            height = size_array[ 0 ];
            width = size_array[ 1 ];
        }
        else
        {
            height = "";
            width = "100";
        }

        if ( height === "" )
        {
            height = "auto";
        }
        else if ( !HasUnit( height ) )
        {
            height += "vw";
        }

        if ( width === "" )
        {
            width = "auto";
        }
        else if ( !HasUnit( width ) )
        {
            width += "%";
        }
        
        format = GetFormat( url );
        
        if ( IsImageFormat( format ) )
        {
            return (
                "<img" 
                + GetAttributes( "height:" + height + ";width:" + width ) 
                + " src=\"" 
                + url 
                + "\"/>"
                );
        }
        else
        {
            return (
                "<video"
                + GetAttributes( "height:" + height + ";width:" + width )
                + "><source src=\""
                + url
                + "\" type=\"video/" + format + "\"></video>"
                );
        }
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
    it_is_in_gray_span = false;
    it_is_in_orange_span = false;
    it_is_in_pink_span = false;
    it_is_in_red_span = false;
    it_is_in_blue_span = false;
    it_is_in_violet_span = false;
    it_is_in_cyan_span = false;
    it_is_in_black_span = false;
    it_is_in_yellow_span = false;
    it_is_in_white_span = false;
    it_is_in_green_span = false;
    it_is_in_a = false;

    table_count = 0;
    character_index = 0;

    while ( character_index < text.length )
    {
        token = new TOKEN();
        token.StartsLine = token_starts_line;
        token_starts_line = false;

        if ( text.charAt( character_index ) === '\\'
             && character_index + 1 < text.length )
        {
            token.Text = text.charAt( character_index + 1 );
            token.IsEscaped = true;

            character_index += 2;
        }
        else if ( text.charAt( character_index ) === '`' )
        {
            ++character_index;

            while ( character_index < text.length )
            {
                if ( text.charAt( character_index ) === '`' )
                {
                    ++character_index;

                    break;
                }
                else
                {
                    token.Text += text.charAt( character_index );

                    ++character_index;
                }
            }

            token.Text = token.Text.split( "<" ).join( "&lt;" ).split( ">" ).join( "&gt;" );
            token.IsEscaped = true;
        }
        else if ( ParseDefinedTag() )
        {
            token.Text = token_text;
        }
        else if ( token.StartsLine
                  && ParseTag( "!", "", " " ) )
        {
            token.Text = "<h1" + attributes + ">";
            closing_tag = "</h1>";
        }
        else if ( token.StartsLine
                  && ParseTag( "!!", "", " " ) )
        {
            token.Text = "<h2" + attributes + ">";
            closing_tag = "</h2>";
        }
        else if ( token.StartsLine
                  && ParseTag( "!!!", "", " " ) )
        {
            token.Text = "<h3" + attributes + ">";
            closing_tag = "</h3>";
        }
        else if ( token.StartsLine
                  && ParseTag( "!!!!", "", " " ) )
        {
            token.Text = "<h4" + attributes + ">";
            closing_tag = "</h4>";
        }
        else if ( token.StartsLine
                  && ParseTag( "!!!!!", "", " " ) )
        {
            token.Text = "<h5" + attributes + ">";
            closing_tag = "</h5>";
        }
        else if ( token.StartsLine
                  && ParseTag( "!!!!!!", "", " " ) )
        {
            token.Text = "<h6" + attributes + ">";
            closing_tag = "</h6>";
        }
        else if ( ParseTag( "---", "", "" ) )
        {
            token.Text = "<hr" + attributes + "/>";
        }
        else if ( ParseTag( "~~~", "", "" ) )
        {
            token.Text = "<pb" + attributes + "/>";
        }
        else if ( ParseTag( "§", "", "" ) )
        {
            token.Text = "<br" + attributes + "/>";
        }
        else if ( ParseTag( "[[[", "", "" ) )
        {
            ++table_count;

            token.Text = "<table" + attributes + "><tbody>";
        }
        else if ( table_count > 0
                  && ParseTag( "((", "", "" ) )
        {
            token.Text = "<tr><td" + attributes + ">";
        }
        else if ( table_count > 0
                  && ParseTag( "|", "", "" ) )
        {
            token.Text = "</td><td" + attributes + ">";
        }
        else if ( table_count > 0
                  && ParseTag( "))", "", "" ) )
        {
            token.Text = "</td></tr>";
        }
        else if ( table_count > 0
                  && ParseTag( "]]]", "", "" ) )
        {
            --table_count;

            token.Text = "</tbody></table>";
        }
        else if ( ParseTag( "[[", "", "" ) )
        {
            token.Text = ParseImage();
        }
        else if ( ParseTag( ":::", "", "" ) )
        {
            it_is_in_pre = !it_is_in_pre;

            if ( it_is_in_pre )
            {
                token.Text = "<pre" + attributes + ">";
            }
            else
            {
                token.Text = "</pre>";
            }
        }
        else if ( ParseTag( ">>>", "", "" ) )
        {
            it_is_in_blockquote = !it_is_in_blockquote;

            if ( it_is_in_blockquote )
            {
                token.Text = "<blockquote" + attributes + ">";
            }
            else
            {
                token.Text = "</blockquote>";
            }
        }
        else if ( ParseTag( "+++", "frame", "" ) )
        {
            it_is_in_frame_div = !it_is_in_frame_div;

            if ( it_is_in_frame_div )
            {
                token.Text = "<div" + attributes + ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( ParseTag( "###", "box", "" ) )
        {
            it_is_in_box_div = !it_is_in_box_div;

            if ( it_is_in_box_div )
            {
                token.Text = "<div" + attributes + ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( ParseTag( "{{{", "", "" ) )
        {
            token.Text = "<div" + attributes + ">";
        }
        else if ( ParseTag( "}}}", "", "" ) )
        {
            token.Text = "</div>";
        }
        else if ( ParseTag( "##", "mark", "" ) )
        {
            it_is_in_mark_span = !it_is_in_mark_span;

            if ( it_is_in_mark_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "__", "", "" ) )
        {
            it_is_in_u = !it_is_in_u;

            if ( it_is_in_u )
            {
                token.Text = "<u" + attributes + ">";
            }
            else
            {
                token.Text = "</u>";
            }
        }
        else if ( ParseTag( "{{", "", "" ) )
        {
            token.Text = "<span" + attributes + ">";
        }
        else if ( ParseTag( "}}", "", "" ) )
        {
            token.Text = "</span>";
        }
        else if ( ParseTag( "<<", "left", "" ) )
        {
            it_is_in_left_div = !it_is_in_left_div;

            if ( it_is_in_left_div )
            {
                token.Text = "<div" + attributes + ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( ParseTag( "$$", "center", "" ) )
        {
            it_is_in_center_div = !it_is_in_center_div;

            if ( it_is_in_center_div )
            {
                token.Text = "<div" + attributes + ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( ParseTag( ">>", "right", "" ) )
        {
            it_is_in_right_div = !it_is_in_right_div;

            if ( it_is_in_right_div )
            {
                token.Text = "<div" + attributes + ">";
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( ParseTag( "**", "", "" ) )
        {
            it_is_in_b = !it_is_in_b;

            if ( it_is_in_b )
            {
                token.Text = "<b" + attributes + ">";
            }
            else
            {
                token.Text = "</b>";
            }
        }
        else if ( ParseTag( "%%", "", "" ) )
        {
            it_is_in_i = !it_is_in_i;

            if ( it_is_in_i )
            {
                token.Text = "<i" + attributes + ">";
            }
            else
            {
                token.Text = "</i>";
            }
        }
        else if ( ParseTag( "^^", "", "" ) )
        {
            it_is_in_sup = !it_is_in_sup;

            if ( it_is_in_sup )
            {
                token.Text = "<sup" + attributes + ">";
            }
            else
            {
                token.Text = "</sup>";
            }
        }
        else if ( ParseTag( ",,", "", "" ) )
        {
            it_is_in_sub = !it_is_in_sub;

            if ( it_is_in_sub )
            {
                token.Text = "<sub" + attributes + ">";
            }
            else
            {
                token.Text = "</sub>";
            }
        }
        else if ( ParseTag( "~~", "", "" ) )
        {
            it_is_in_strike = !it_is_in_strike;

            if ( it_is_in_strike )
            {
                token.Text = "<strike" + attributes + ">";
            }
            else
            {
                token.Text = "</strike>";
            }
        }
        else if ( ParseTag( "°", "°", "" ) )
        {
            it_is_in_gray_span = !it_is_in_gray_span;

            if ( it_is_in_gray_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "⁰", "⁰", "" ) )
        {
            it_is_in_orange_span = !it_is_in_orange_span;

            if ( it_is_in_orange_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "¹", "¹", "" ) )
        {
            it_is_in_pink_span = !it_is_in_pink_span;

            if ( it_is_in_pink_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "²", "²", "" ) )
        {
            it_is_in_red_span = !it_is_in_red_span;

            if ( it_is_in_red_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "³", "³", "" ) )
        {
            it_is_in_blue_span = !it_is_in_blue_span;

            if ( it_is_in_blue_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "⁴", "⁴", "" ) )
        {
            it_is_in_violet_span = !it_is_in_violet_span;

            if ( it_is_in_violet_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "⁵", "⁵", "" ) )
        {
            it_is_in_cyan_span = !it_is_in_cyan_span;

            if ( it_is_in_cyan_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "⁶", "⁶", "" ) )
        {
            it_is_in_black_span = !it_is_in_black_span;

            if ( it_is_in_black_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "⁷", "⁷", "" ) )
        {
            it_is_in_yellow_span = !it_is_in_yellow_span;

            if ( it_is_in_yellow_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "⁸", "⁸", "" ) )
        {
            it_is_in_white_span = !it_is_in_white_span;

            if ( it_is_in_white_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( ParseTag( "⁹", "⁹", "" ) )
        {
            it_is_in_green_span = !it_is_in_green_span;

            if ( it_is_in_green_span )
            {
                token.Text = "<span" + attributes + ">";
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.slice( character_index, character_index + 5 ) === "<pre>" )
        {
            character_index += 5;

            token.Text = "<pre>";
        }
        else if ( text.slice( character_index, character_index + 6 ) === "</pre>" )
        {
            character_index += 6;

            token.Text = "</pre>";
        }
        else if ( ParseTag( "@@", "", "" ) )
        {
            it_is_in_a = !it_is_in_a;

            if ( it_is_in_a )
            {
                token.Text = "<a" + attributes + " href=\"";

                url = "";

                while ( character_index < text.length )
                {
                    if ( text.charAt( character_index ) === ' ' )
                    {
                        token.Text += url + "\">";

                        ++character_index;

                        break;
                    }
                    else if ( text.slice( character_index, character_index + 2 ) === "@@" )
                    {
                        it_is_in_a = false;

                        token.Text += url + "\">" + url + "</a>";

                        character_index += 2;

                        break;
                    }
                    else
                    {
                        url += text.charAt( character_index );

                        ++character_index;
                    }
                }
            }
            else
            {
                token.Text = "</a>";
            }
        }
        else if ( text.charAt( character_index ) === ' ' )
        {
            ++character_index;

            token.Text = " ";

            while ( character_index < text.length
                    && text.charAt( character_index ) === ' ' )
            {
                token.Text += " ";

                ++character_index;
            }

            token.IsSpace = true;
        }
        else if ( text.charAt( character_index ) === '\n' )
        {
            ++character_index;

            if ( closing_tag !== "" )
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
            token.Text = text.charAt( character_index );

            ++character_index;
        }

        token_array.push( token );
    }

    return token_array;
}

// ~~

function GetListTag(
    token_array,
    token_index
    )
{
    var
        token;

    if ( token_index >= 0
         && token_index + 1 < token_array.length
         && !token_array[ token_index + 1 ].StartsLine
         && token_array[ token_index + 1 ].IsSpace
         && token_array[ token_index + 1 ].Text.length === IndentationSpaceCount - 1 )
    {
        token = token_array[ token_index ];

        if ( !token.IsEscaped )
        {
            if ( token.Text === "*" )
            {
                return "ul";
            }
            else if ( token.Text === "#" )
            {
                return "ol";
            }
        }
    }

    return null;
}

// ~~

function MakeLists(
    token_array
    )
{
    var
        it_is_in_pre,
        tag,
        tag_array,
        tag_count,
        tag_token,
        tag_token_index,
        tag_token_text,
        token,
        token_index;

    tag_array = [];

    it_is_in_pre = false;

    for ( token_index = 0;
          token_index < token_array.length;
          ++token_index )
    {
        token = token_array[ token_index ];

        if ( it_is_in_pre )
        {
            if ( token.Text === "</pre>" )
            {
                it_is_in_pre = false;
            }
        }
        else
        {
            if ( token.Text === "<pre>" )
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

                    if ( tag !== null )
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

                    if ( tag !== null )
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
                            tag_token_text += "<" + tag + "><li>";
                        }
                    }
                    else if ( tag_count === tag_array.length )
                    {
                        tag_token_text += "</li><li>";
                    }
                    else if ( tag_count < tag_array.length )
                    {
                        while ( tag_count < tag_array.length )
                        {
                            tag_token_text += "</li></" + tag_array.pop() + ">";
                        }

                        if ( tag !== null )
                        {
                            tag_token_text += "</li><li>";
                        }
                    }

                    if ( tag_token_text !== "" )
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

function MakeParagraphs(
    token_array
    )
{
    var
        it_is_in_pre,
        token,
        token_index;

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
            if ( token.Text === "</pre>" )
            {
                it_is_in_pre = false;
            }
        }
        else
        {
            if ( token.Text === "<pre>"
                 || token.Text.startsWith( "<pre " ) )
            {
                it_is_in_pre = true;
            }
            else if ( token.StartsLine
                      && token.Text === "\n" )
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

function MakeBreaks(
    token_array
    )
{
    var
        page_break_is_added,
        token,
        token_character_index,
        token_index;

    page_break_is_added = false;

    for ( token_index = 0;
          token_index < token_array.length;
          ++token_index )
    {
        token = token_array[ token_index ];

        if ( token.Text === "<pb/>" )
        {
            token.Text = "";

            page_break_is_added = true;
        }
        else if ( page_break_is_added
                  && token.Text.length >= 3
                  && token.Text.startsWith( '<' )
                  && ( !token.Text.startsWith( "</" )
                       || token.Text === "</p><p>\n" ) )
        {
            if ( token.Text.endsWith( "</p><p>\n" ) )
            {
                token_character_index = 6;
            }
            else if ( token.Text.endsWith( ">" ) )
            {
                token_character_index = token.Text.length - 1;
            }
            else
            {
                token_character_index = token.Text.indexOf( ' ' );
            }

            token.Text
                = token.Text.slice( 0, token_character_index )
                  + " style=\"page-break-before: always\""
                  + token.Text.slice( token_character_index, token.Text.length );

            page_break_is_added = false;
        }
    }
}

// ~~

function GetText(
    token_array
    )
{
    var
        text,
        token_index;

    text = "";

    for ( token_index = 0;
          token_index < token_array.length;
          ++token_index )
    {
        text += token_array[ token_index ].Text;
    }

    return text;
}

// ~~

function GetProcessedText(
    text
    )
{
    var
        token_array;

    text = GetPreprocessedText( text );

    token_array = GetTokenArray( text );

    MakeLists( token_array );
    MakeParagraphs( token_array );
    MakeBreaks( token_array );

    return GetText( token_array );
}

// ~~

function ProcessElement(
    element,
    html_class_name
    )
{
    var
        processed_element;

    processed_element = document.createElement( html_class_name );
    processed_element.className = element.className;
    processed_element.innerHTML = GetProcessedText( element.innerHTML );

    element.parentNode.replaceChild( processed_element, element );
}

// ~~

function ProcessDocument(
    pendown_class_name,
    html_class_name
    )
{
    var
        element_array,
        element_index;

    element_array = document.getElementsByTagName( pendown_class_name );

    for ( element_index = 0;
          element_index < element_array.length;
          ++element_index )
    {
        ProcessElement( element_array[ element_index ], html_class_name );
    }
}

// -- STATEMENTS

CODE_TOKEN_TYPE = new CODE_TOKEN_TYPE();

TabulationSpaceCount = 4;
IndentationSpaceCount = 4;

ModifierMap = [];
ModifierMap[ "°" ] = "gray";
ModifierMap[ "⁰" ] = "orange";
ModifierMap[ "¹" ] = "pink";
ModifierMap[ "²" ] = "red";
ModifierMap[ "³" ] = "blue";
ModifierMap[ "⁴" ] = "violet";
ModifierMap[ "⁵" ] = "cyan";
ModifierMap[ "⁶" ] = "black";
ModifierMap[ "⁷" ] = "yellow";
ModifierMap[ "⁸" ] = "white";
ModifierMap[ "⁹" ] = "green";

TagArray = [];

ProcessDocument( "xmp", "article" );
