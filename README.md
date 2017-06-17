# Pendown

Lightweight markup for colored documents.

## Features

* Simple, concise and consistent syntax to quickly write colored documents.
* Complete : styles, colors, alignments, breaks, links, lists, code blocks, tables, quotes, frames and images.
* Fast conversion to HTML by a standalone command line tool or by a web browser script.
* Source code syntax highlighting.

## Getting Started

Create a HTML file with the ".html" extension.

Open it with a plain text editor like Geany or Notepad++.

Edit your text between these lines:

```html
<meta charset="utf8"/>
<link rel="stylesheet" href="../pendown.css">
<xmp>
! Title

**Pendown** tags are automatically converted into **HTML** tags when the file is opened in a web browser.

---

!! Line break

Manual line break§
inside a paragraph.

Another paragraph.

!! Escape

\_\_

`** <b>not bold</b> **`

!! Alignment

<<left<<

$$center$$

>>right>>

!! Styling

**bold**

%%italics%%

^^superscript^^

,,subscript,,

~~strikethrough~~

__underlined__

__f00\underlined__

##highlighted##

##fce\highlighted##

{{0cc\colored}}

{{6f42c1\colored}}

°°black°°

¹¹cyan¹¹

²²orange²²

³³green³³

°gray°

¹pink¹

²red²

³blue³

!! Block

{{{
Block
}}}

{{{cfe\
Block
}}}
    
!! Box

###
Box
###

###cfe\
Box
###

!! Frame

+++
Frame
+++

+++f00\
Frame
+++

{{{ffd\
+++f00\
Frame
+++
}}}

!! Quote

>>>
Quote
>>>

>>>f00\
Quote
>>>

{{{ffd\
>>>f00\
Quote
>>>
}}}

!! Table

%%%
      |Monday|Tuesday|Wednesday
Apple |1     |2      |3
Orange|1     |2      |3
Banana|1     |3      |3
%%%

!! Code

:::
##// ²Colored source code²##

²if² ³(³ ... ³)³
³{³
    ...
³}³
²else²
³{³
    ...
³}³
:::

!! List

Two spaces per level.

# List
# List
  # Sub-list
  # Sub-list
    @ Numbered sub-list
    @ Numbered sub-list
      @ Numbered sub-list
      @ Numbered sub-list
    @ Numbered sub-list
# List§
  ...

!! Link

@@http://www.github.com This is a link@@

@@http://www.github.com [[image.jpg]]@@

@@http://www.github.com@@

!! Image

Small :

[[image.jpg]][[image_2.jpg]]§
[[image_3.jpg]][[image_4.jpg]][[image_5.jpg]]

Medium :

[[[image_3.jpg]]][[[image_4.jpg]]]

Large :

[[[[image_5.jpg]]]]

!! HTML

²Pendown tags² can be mixed with <span style="color:green">HTML tags</span>.
</xmp>
<script src="../pendown.js"></script>
```

Open it in a browser to see the [result](SAMPLE/sample.png).

## Limitations

* Lists are not processed inside preformatted blocks.
* The Pendown text can't contain the string `</xmp>` if it is converted by the web browser.

## Installation

Install the [DMD 2 compiler](https://dlang.org/download.html).

Build the executable with the following command line :

```bash
dmd -m64 pendown.d
```

Put the "pendown.css" and "pendown.js" files in a local folder directly accessible from your Pendown HTML files.

## Command line

```bash
pendown [options] input_file output_file
```

### Options

```
--colorize : generate a Pendown file from a source code file
--process : generate a HTML file from a Pendown file
--script : make the HTML file import the Pendown script file
--style : make the HTML file import the Pendown style file
--language c|cpp|csharp|d|java|javascript|typescript : set the source code language
--path PENDOWN_FOLDER/ : set the path of the imported Pendown files 
``` 

### File extensions

The source code language is automatically deduced from the following file extensions :

* C : .c, .h
* C++ : .cpp, .hpp, .cxx, .hxx
* C# : .cs
* D : .d
* JavaScript : .js
* TypeScript : .ts

### Examples

```bash
pendown --process --style --path ../ document.pd document.html
```

Converts a Pendown file to a HTML file which imports the Pendown style file.

```bash
pendown --script --style --path ../ document.pd document.html
```

Converts a Pendown file to a HTML file which imports the Pendown script and style files to convert the Pendown tags inside the web browser.

```bash
pendown --colorize code.d code.pd
```

Converts a D source code file to a Pendown file.

```bash
pendown --colorize --process --style --path ../ code.d code.html
```

Converts a D source code file to a HTML file which imports the Pendown style file.

```bash
pendown --colorize --script --style --path ../ code.d code.html
```

Converts a D source code file to a HTML file which imports the Pendown script and style files to convert the Pendown tags inside the web browser.

## Troubleshooting

> The Pendown page doesn't show the converted text.

Check that the Pendown file extension is ".html".

Check that your text is between the `<xmp>` and `</xmp>` tags.

Check that the relative paths to "pendown.css" and "pendown.js" are correct.

> The Pendown page doesn't use the Comic Sans MS or Consolas font as in the "sample.png" image.

Check that both fonts are properly installed on your system.

## Frequently asked questions

> How can I force Pendown to use black as the default text color ?

Replace `<xmp>` by `<xmp class="black">` in the HTML file.

> How can I hide the Pendown text until it has been converted into HTML ?

Replace `<xmp>` by `<xmp style="display:none">` in the HTML file.

## Version

0.2

## Author

Eric Pelzer (ecstatic.coder@gmail.com).

## License

This project is licensed under the GNU General Public License version 3.

See the [LICENSE.md](LICENSE.md) file for details.
