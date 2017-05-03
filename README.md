# Pendown

Client-side Markdown alternative for note taking.

## Features

* Emulates handwritten notes.
* Edition directly inside the HTML document, using a simple, concise and consistent syntax.
* Fast and easy parsing without ambiguity.
* No collision with HTML tags and C-like code snippets.
* Complete : styles, colors, alignments, breaks, links, lists, code blocks, tables, quotes, frames and images.

## Getting Started

Create a HTML file with the ".html" extension.

Open it with a plain text editor like Geany or Notepad++.

Edit your text between these lines:

```html
<meta charset="utf8"/>
<link rel="stylesheet" href="pendown.css">
<xmp>
! My title

Hello world :)
</xmp>
<script src="pendown.js"></script>
```

Then simply open your HTML file with your favorite browser :)

Don't forget to use the appropriate relative path to your Pendown installation folder when referencing "pendown.css" and "pendown.js".

For instance :

```html
<meta charset="utf8"/>
<link rel="stylesheet" href="../PENDOWN/pendown.css">
<xmp>
...
</xmp>
<script src="../PENDOWN/pendown.js"></script>
```

## Syntax

The "sample.html" file contains a list of all available Pendown tags.

```html
<meta charset="utf8"/>
<link rel="stylesheet" href="../pendown.css">
<xmp>
! Quick reference

Pendown tags are automatically converted into HTML tags when the file is opened in a web browser.

---

!! Line break

Manual line break§
inside a paragraph.

Another paragraph.

!! Styling

**bold**

%%italics%%

__underlined__

~~strikethrough~~

^^superscript^^

,,subscript,,

`gray`

°orange°

¹magenta¹

²red²

³blue³

##highlighted##

!! Alignment

<<left<<

$$center$$

>>right>>

!! Escape

\_\_

``** <b>not bold</b> **``

!! Link

@@http://www.github.com This is a link@@

@@http://www.github.com [[image.jpg]]@@

@@http://www.github.com@@

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

!! Code

%%%
##// ²Colored source code²##

²if² ³(³ ... ³)³
³{³
    ...
³}³
²else²
³{³
    ...
³}³
%%%

!! Table

###
          |**Monday**|**Tuesday**|**Wednesday**
%%Apple%% |1         |2          |3
%%Orange%%|1         |2          |3
%%Banana%%|1         |3          |3
###

!! Quote

>>>
Quoted text.
>>>

!! Frame

***
Framed text.
***

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

## Installation

Put the "pendown.css" and "pendown.js" files in a local folder directly accessible from your Pendown HTML files.

## Limitations

* Your Pendown text can't contain the string `</xmp>`.
* Lists are not usable inside preformatted blocks.

## Troubleshooting

> The Pendown page doesn't show the converted text.

Check that the Pendown file extension is ".html".

Check that your text is between the `<xmp>` and `</xmp>` tags.

Check that the relative paths to "pendown.css" and "pendown.js" are correct.

> The Pendown page doesn't use the Comic Sans MS or Consolas font as in the "sample.png" image.

Check that both fonts are properly installed on your system.

## Frequently asked questions

> How can I force Pendown to use black as the default text color ?

Replace `<xmp>` by `<xmp class="black">`.

> How can I hide the Pendown text until it has been converted into HTML ?

Replace `<xmp>` by `<xmp style="display:none">`.

## Version

0.1

## Author

Eric Pelzer (exstatic.coder@gmail.com).

## License

This project is licensed under the GNU General Public License version 3.

See the [LICENSE.md](LICENSE.md) file for details.
