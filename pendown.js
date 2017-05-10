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

function TOKEN()
{
    this.Text = "";
    this.StartsLine = false;
    this.IsSpace = false;
    this.IsEscaped = false;
}

// -- FUNCTIONS

function IsAlphaNumericCharacter(
    character
    )
{
    return (
        ( character >= '0' && character <= '9' )
        || ( character >= 'a' && character <= 'z' )
        || ( character >= 'A' && character <= 'Z' )
        );
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
        it_is_in_blue_span,
        it_is_in_box_div,
        it_is_in_center_div,
        it_is_in_frame_div,
        it_is_in_gray_span,
        it_is_in_i,
        it_is_in_left_div,
        it_is_in_mark,
        it_is_in_orange_span,
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
        
        while ( character_index < text.length
                && IsAlphaNumericCharacter( text.charAt( character_index ) ) )
        {
            color += text.charAt( character_index );
            
            ++character_index;
        }

        if ( character_index < text.length
             && text.charAt( character_index ) === ':' )
        {
            ++character_index;
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
    it_is_in_left_div = false;
    it_is_in_center_div = false;
    it_is_in_right_div = false;
    it_is_in_b = false;
    it_is_in_i = false;
    it_is_in_u = false;
    it_is_in_strike = false;
    it_is_in_sup = false;
    it_is_in_sub = false;
    it_is_in_orange_span = false;
    it_is_in_gray_span = false;
    it_is_in_red_span = false;
    it_is_in_blue_span = false;
    it_is_in_mark = false;
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
        else if ( text.slice( character_index, character_index + 2 ) === "``" )
        {
            character_index += 2;

            while ( character_index < text.length )
            {
                if ( text.slice( character_index, character_index + 2 ) === "``" )
                {
                    character_index += 2;

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
        else if ( token.StartsLine
                  && text.slice( character_index, character_index + 3 ) === "---" )
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
        else if ( text.slice( character_index, character_index + 3 ) === "%%%" )
        {
            it_is_in_pre = !it_is_in_pre;

            token.Text = it_is_in_pre ? "<pre>" : "</pre>";

            character_index += 3;
        }
        else if ( text.slice( character_index, character_index + 3 ) === "###" )
        {
            it_is_in_table = !it_is_in_table;

            token.Text = it_is_in_table ? "<table>" : "</table>";

            character_index += 3;
        }
        else if ( text.slice( character_index, character_index + 3 ) === ">>>" )
        {
            it_is_in_blockquote = !it_is_in_blockquote;

            token.Text = it_is_in_blockquote ? "<blockquote>" : "</blockquote>";

            character_index += 3;
            
            if ( it_is_in_blockquote )
            {
                ParseColor();
                
                if ( color !== "" )
                {
                    token.Text = "<blockquote style=\"border-color:#" + color + "\">";
                }
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) === "+++" )
        {
            it_is_in_frame_div = !it_is_in_frame_div;

            token.Text = it_is_in_frame_div ? "<div class=\"frame\">" : "</div>";

            character_index += 3;
            
            if ( it_is_in_frame_div )
            {
                ParseColor();
                
                if ( color !== "" )
                {
                    token.Text = "<div class=\"frame\" style=\"border-color:#" + color + "\">";
                }
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) === "***" )
        {
            it_is_in_box_div = !it_is_in_box_div;

            token.Text = it_is_in_box_div ? "<div class=\"box\">" : "</div>";

            character_index += 3;
            
            if ( it_is_in_box_div )
            {
                ParseColor();
                
                if ( color !== "" )
                {
                    token.Text = "<div class=\"box\" style=\"background-color:#" + color + "\">";
                }
            }
        }
        else if ( text.slice( character_index, character_index + 3 ) === "{{{" )
        {
            character_index += 3;
            
            ParseColor();
                    
            token.Text = "<div style=\"background-color:" + color + "\">";
        }
        else if ( text.slice( character_index, character_index + 3 ) === "}}}" )
        {
            token.Text = "</div>";

            character_index += 3;
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
        else if ( text.slice( character_index, character_index + 2 ) === "__" )
        {
            it_is_in_u = !it_is_in_u;

            token.Text = it_is_in_u ? "<u>" : "</u>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "~~" )
        {
            it_is_in_strike = !it_is_in_strike;

            token.Text = it_is_in_strike ? "<strike>" : "</strike>";

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
        else if ( text.slice( character_index, character_index + 2 ) === "##" )
        {
            it_is_in_mark = !it_is_in_mark;

            token.Text = it_is_in_mark ? "<mark>" : "</mark>";

            character_index += 2;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "{{" )
        {
            character_index += 2;
            
            ParseColor();
                    
            token.Text = "<span style=\"background-color:" + color + "\">";
        }
        else if ( text.slice( character_index, character_index + 2 ) === "}}" )
        {
            token.Text = "</span>";

            character_index += 2;
        }
        else if ( text.charAt( character_index ) === '°' )
        {
            it_is_in_orange_span = !it_is_in_orange_span;

            token.Text = it_is_in_orange_span ? "<span style=\"color:darkorange\">" : "</span>";

            ++character_index;
        }
        else if ( text.charAt( character_index ) === '¹' )
        {
            it_is_in_gray_span = !it_is_in_gray_span;

            token.Text = it_is_in_gray_span ? "<span style=\"color:gray\">" : "</span>";

            ++character_index;
        }
        else if ( text.charAt( character_index ) === '²' )
        {
            it_is_in_red_span = !it_is_in_red_span;

            token.Text = it_is_in_red_span ? "<span style=\"color:red\">" : "</span>";

            ++character_index;
        }
        else if ( text.charAt( character_index ) === '³' )
        {
            it_is_in_blue_span = !it_is_in_blue_span;

            token.Text = it_is_in_blue_span ? "<span style=\"color:blue\">" : "</span>";

            ++character_index;
        }
        else if ( text.charAt( character_index ) === '{'
                  && character_index + 1 < text.length
                  && IsAlphaNumericCharacter( text.charAt( character_index + 1 ) ) )
        {
            ++character_index;
            
            color = "";
            
            while ( character_index < text.length
                    && text.charAt( character_index ) !== '}' )
            {
                color += text.charAt( character_index );
                
                ++character_index;
            }
                    
            token.Text = "<span style=\"color:#" + color + "\">";
            
            ++character_index;
        }
        else if ( text.slice( character_index, character_index + 2 ) === "{}" )
        {
            token.Text = "</span>";

            character_index += 2;
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
                tag_count = null;
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

                if ( tag_count !== null )
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

    text
        = element.innerHTML
              .split( "\t" )
              .join( "    " )
              .split( "\r" )
              .join( "" )
              .replace( / +\n/g, "\n" );


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

ProcessDocument();
