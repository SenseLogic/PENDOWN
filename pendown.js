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
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
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

function GetCleanedText(
    text
    )
{
    var
        cleaned_text;

    cleaned_text = text.split( "\r" ).join( "" ).split( "\t" ).join( "    " );

    if ( !cleaned_text.endsWith( "\n" ) )
    {
        cleaned_text += "\n";
    }

    return cleaned_text;
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
                if ( "\\`°¹²³!#@".indexOf( character ) >= 0
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
    file_extension
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
        post_line_index;

    text = GetCleanedText( text );

    line_array = text.split( '\n' );

    for ( line_index = 0;
          line_index < line_array.length;
          ++line_index )
    {
        line = line_array[ line_index ].trim();

        if ( line.startsWith( ":::" ) )
        {
            if ( line === ":::c\\"
                 || line === ":::h\\"
                 || line === ":::c++\\"
                 || line === ":::h++\\"
                 || line === ":::cpp\\"
                 || line === ":::hpp\\"
                 || line === ":::cxx\\"
                 || line === ":::hxx\\"
                 || line === ":::c#\\"
                 || line === ":::cs\\"
                 || line === ":::d\\"
                 || line === ":::java\\"
                 || line === ":::js\\"
                 || line === ":::ts\\" )
            {
                file_extension = line.slice( 3, -1 );

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

function GetTokenArray(
    text
    )
{
    var
        color,
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
        it_is_in_table,
        it_is_in_u,
        token,
        token_array,
        token_starts_line,
        url;

    // ~~

    function ParseColor(
        )
    {
        color = "";

        if ( character_index + 3 < text.length
             && IsHexadecimalCharacter( text.charAt( character_index ) )
             && IsHexadecimalCharacter( text.charAt( character_index + 1 ) )
             && IsHexadecimalCharacter( text.charAt( character_index + 2 ) ) )
        {
            if ( text.charAt( character_index + 3 ) === '\\' )
            {
                color = text.slice( character_index, character_index + 3 );

                character_index += 4;
            }
            else if ( character_index + 3 < text.length
                      && IsHexadecimalCharacter( text.charAt( character_index + 3 ) )
                      && IsHexadecimalCharacter( text.charAt( character_index + 4 ) )
                      && IsHexadecimalCharacter( text.charAt( character_index + 5 ) )
                      && text.charAt( character_index + 6 ) === '\\' )
            {
                color = text.slice( character_index, character_index + 6 );

                character_index += 7;
            }
        }
    }

    // ~~

    token_array = [];
    token_starts_line = true;

    closing_tag = "";

    it_is_in_pre = false;
    it_is_in_table = false;
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
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 2 ) === "! " )
        {
            token.Text = "<h1>";
            closing_tag = "</h1>";

            character_index += 2;
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 3 ) === "!! " )
        {
            token.Text = "<h2>";
            closing_tag = "</h2>";

            character_index += 3;
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 4 ) === "!!! " )
        {
            token.Text = "<h3>";
            closing_tag = "</h3>";

            character_index += 4;
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 5 ) === "!!!! " )
        {
            token.Text = "<h4>";
            closing_tag = "</h4>";

            character_index += 5;
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 6 ) === "!!!!! " )
        {
            token.Text = "<h5>";
            closing_tag = "</h5>";

            character_index += 6;
        }
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 7 ) === "!!!!!! " )
        {
            token.Text = "<h6>";
            closing_tag = "</h6>";

            character_index += 7;
        }
        else if ( text.slice( character_index, character_index + 3 ) === "---" )
        {
            token.Text = "<hr/>";

            character_index += 3;
        }
        else if ( text.charAt( character_index ) === '§' )
        {
            token.Text = "<br/>";

            ++character_index;
        }
        else if ( text.slice( character_index, character_index + 4 ) === "[[[[" )
        {
            token.Text = "<img src=\"";

            character_index += 4;
        }
        else if ( text.slice( character_index, character_index + 4 ) === "]]]]" )
        {
            token.Text = "\" class=\"large\"/>";

            character_index += 4;
        }
        else if ( text.slice( character_index, character_index + 3 ) === "[[[" )
        {
            token.Text = "<img src=\"";

            character_index += 3;
        }
        else if ( text.slice( character_index, character_index + 3 ) === "]]]" )
        {
            token.Text = "\" class=\"medium\"/>";

            character_index += 3;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "[[" )
        {
            token.Text = "<img src=\"";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "]]" )
        {
            token.Text = "\"/>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 3 ) === ":::" )
        {
            it_is_in_pre = !it_is_in_pre;

            token.Text = it_is_in_pre ? "<pre>" : "</pre>";

            character_index += 3;
        }
        else if ( text.slice( character_index, character_index + 3 ) === "%%%" )
        {
            it_is_in_table = !it_is_in_table;

            token.Text = it_is_in_table ? "<table>" : "</table>";

            character_index += 3;
        }
        else if ( text.slice( character_index, character_index + 3 ) === ">>>" )
        {
            it_is_in_blockquote = !it_is_in_blockquote;

            character_index += 3;

            if ( it_is_in_blockquote )
            {
                ParseColor();

                if ( color === "" )
                {
                    token.Text = "<blockquote>";
                }
                else
                {
                    token.Text = "<blockquote style=\"border-color:#" + color + "\">";
                }
            }
            else
            {
                token.Text = "</blockquote>";
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) === "+++" )
        {
            it_is_in_frame_div = !it_is_in_frame_div;

            character_index += 3;

            if ( it_is_in_frame_div )
            {
                ParseColor();

                if ( color === "" )
                {
                    token.Text = "<div class=\"frame\">";
                }
                else
                {
                    token.Text = "<div class=\"frame\" style=\"border-color:#" + color + "\">";
                }
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) === "###" )
        {
            it_is_in_box_div = !it_is_in_box_div;

            character_index += 3;

            if ( it_is_in_box_div )
            {
                ParseColor();

                if ( color === "" )
                {
                    token.Text = "<div class=\"box\">";
                }
                else
                {
                    token.Text = "<div class=\"box\" style=\"background-color:#" + color + "\">";
                }
            }
            else
            {
                token.Text = "</div>";
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) === "{{{" )
        {
            character_index += 3;

            ParseColor();

            if ( color === "" )
            {
                token.Text = "<div class=\"block\">";
            }
            else
            {
                token.Text = "<div class=\"block\" style=\"background-color:" + color + "\">";
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) === "}}}" )
        {
            token.Text = "</div>";

            character_index += 3;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "##" )
        {
            it_is_in_mark_span = !it_is_in_mark_span;

            character_index += 2;

            if ( it_is_in_mark_span )
            {
                ParseColor();

                if ( color === "" )
                {
                    token.Text = "<span class=\"mark\">";
                }
                else
                {
                    token.Text = "<span class=\"mark\" style=\"background-color:" + color + "\">";
                }
            }
            else
            {
                token.Text = "</span>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) === "__" )
        {
            it_is_in_u = !it_is_in_u;

            character_index += 2;

            if ( it_is_in_u )
            {
                ParseColor();

                if ( color === "" )
                {
                    token.Text = "<u>";
                }
                else
                {
                    token.Text = "<u style=\"text-decoration-color:#" + color + "\">";
                }
            }
            else
            {
                token.Text = "</u>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) === "{{" )
        {
            character_index += 2;

            ParseColor();

            if ( color === "" )
            {
                token.Text = "<span style=\"color:#000\">";
            }
            else
            {
                token.Text = "<span style=\"color:#" + color + "\">";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) === "}}" )
        {
            token.Text = "</span>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "<<" )
        {
            it_is_in_left_div = !it_is_in_left_div;

            token.Text = it_is_in_left_div ? "<div class=\"left\">" : "</div>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "$$" )
        {
            it_is_in_center_div = !it_is_in_center_div;

            token.Text = it_is_in_center_div ? "<div class=\"center\">" : "</div>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === ">>" )
        {
            it_is_in_right_div = !it_is_in_right_div;

            token.Text = it_is_in_right_div ? "<div class=\"right\">" : "</div>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "**" )
        {
            it_is_in_b = !it_is_in_b;

            token.Text = it_is_in_b ? "<b>" : "</b>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "%%" )
        {
            it_is_in_i = !it_is_in_i;

            token.Text = it_is_in_i ? "<i>" : "</i>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "^^" )
        {
            it_is_in_sup = !it_is_in_sup;

            token.Text = it_is_in_sup ? "<sup>" : "</sup>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === ",," )
        {
            it_is_in_sub = !it_is_in_sub;

            token.Text = it_is_in_sub ? "<sub>" : "</sub>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "~~" )
        {
            it_is_in_strike = !it_is_in_strike;

            character_index += 2;

            if ( it_is_in_strike )
            {
                ParseColor();

                if ( color === "" )
                {
                    token.Text = "<strike>";
                }
                else
                {
                    token.Text = "<strike style=\"text-decoration-color:#" + color + "\">";
                }
            }
            else
            {
                token.Text = "</strike>";
            }
        }
        else if ( text.slice( character_index, character_index + 2 ) === "°°"
                  && !it_is_in_gray_span )
        {
            it_is_in_black_span = !it_is_in_black_span;

            token.Text = it_is_in_black_span ? "<span style=\"color:#000\">" : "</span>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "¹¹"
                  && !it_is_in_pink_span )
        {
            it_is_in_cyan_span = !it_is_in_cyan_span;

            token.Text = it_is_in_cyan_span ? "<span style=\"color:#0aa\">" : "</span>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "²²"
                  && !it_is_in_red_span )
        {
            it_is_in_orange_span = !it_is_in_orange_span;

            token.Text = it_is_in_orange_span ? "<span style=\"color:#f80\">" : "</span>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "³³"
                  && !it_is_in_blue_span )
        {
            it_is_in_green_span = !it_is_in_green_span;

            token.Text = it_is_in_green_span ? "<span style=\"color:#0a0\">" : "</span>";

            character_index += 2;
        }
        else if ( text.charAt( character_index ) === '°' )
        {
            it_is_in_gray_span = !it_is_in_gray_span;

            token.Text = it_is_in_gray_span ? "<span style=\"color:#888\">" : "</span>";

            ++character_index;
        }
        else if ( text.charAt( character_index ) === '¹' )
        {
            it_is_in_pink_span = !it_is_in_pink_span;

            token.Text = it_is_in_pink_span ? "<span style=\"color:#f4a\">" : "</span>";

            ++character_index;
        }
        else if ( text.charAt( character_index ) === '²' )
        {
            it_is_in_red_span = !it_is_in_red_span;

            token.Text = it_is_in_red_span ? "<span style=\"color:#f00\">" : "</span>";

            ++character_index;
        }
        else if ( text.charAt( character_index ) === '³' )
        {
            it_is_in_blue_span = !it_is_in_blue_span;

            token.Text = it_is_in_blue_span ? "<span style=\"color:#00f\">" : "</span>";

            ++character_index;
        }
        else if ( text.slice( character_index, character_index + 5 ) === "<pre>" )
        {
            token.Text = "<pre>";

            character_index += 5;
        }
        else if ( text.slice( character_index, character_index + 6 ) === "</pre>" )
        {
            token.Text = "</pre>";

            character_index += 6;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "@@" )
        {
            it_is_in_a = !it_is_in_a;

            token.Text = it_is_in_a ? "<a href=\"" : "</a>";

            character_index += 2;

            if ( it_is_in_a )
            {
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
        }
        else if ( text.charAt( character_index ) === ' ' )
        {
            token.Text = " ";

            ++character_index;

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
            if ( closing_tag !== "" )
            {
                closing_token = new TOKEN();
                closing_token.Text = closing_tag;
                closing_tag = "";

                token_array.push( closing_token );
            }

            token.Text = "\n";
            token_starts_line = true;

            ++character_index;
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
         && token_array[ token_index + 1 ].IsSpace )
    {
        token = token_array[ token_index ];

        if ( !token.IsEscaped )
        {
            if ( token.Text === "#" )
            {
                return "ul";
            }
            else if ( token.Text === "@" )
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
                        tag_count = 1 + ( token.Text.length / 2 );

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
            if ( token.Text === "<pre>" )
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

function MakeTables(
    token_array
    )
{
    var
        it_is_in_row,
        it_is_in_table,
        token,
        token_index;

    it_is_in_table = false;
    it_is_in_row = false;

    for ( token_index = 0;
          token_index < token_array.length;
          ++token_index )
    {
        token = token_array[ token_index ];

        if ( it_is_in_table )
        {
            if ( token.Text === "</table>" )
            {
                it_is_in_table = false;
            }
            else if ( token.StartsLine )
            {
                token = new TOKEN();
                token.Text = "<tr><td>";
                token_array.splice( token_index, 0, token );
                ++token_index;

                it_is_in_row = true;
            }
            else if ( token.Text === "|"
                      && !token.IsEscaped )
            {
                token.Text = "</td><td>";
            }
            else if ( token.Text === "\n" )
            {
                if ( it_is_in_row )
                {
                    token = new TOKEN();
                    token.Text = "</td></tr>";
                    token_array.splice( token_index, 0, token );
                    ++token_index;

                    it_is_in_row = false;
                }
            }
        }
        else
        {
            if ( token.Text === "<table>" )
            {
                it_is_in_table = true;
            }
        }
    }

    token = new TOKEN();
    token.Text = "</p>";
    token_array.push( token );
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
    MakeTables( token_array );

    return GetText( token_array );
}

// ~~

function ProcessElement(
    element
    )
{
    var
        processed_element,
        text;

    text = element.innerHTML.split( "\t" ).join( "    " ).split( "\r" ).join( "" ).replace( / +\n/g, "\n" );

    processed_element = document.createElement( "article" );
    processed_element.className = element.className;
    processed_element.innerHTML = GetProcessedText( text );

    element.parentNode.replaceChild( processed_element, element );
}

// ~~

function ProcessDocument(
    )
{
    var
        element_array,
        element_index;

    element_array = document.getElementsByTagName( "xmp" );

    for ( element_index = 0;
          element_index < element_array.length;
          ++element_index )
    {
        ProcessElement( element_array[ element_index ] );
    }
}

// -- STATEMENTS

CODE_TOKEN_TYPE = new CODE_TOKEN_TYPE();

ProcessDocument();
