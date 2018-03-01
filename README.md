![](https://github.com/senselogic/PENDOWN/blob/master/LOGO/pendown.png)

# Pendown

Text-to-HTML conversion tool for web writers, with integrated styling and tag customization.

## Description

Pendown allows web writers to write their content in plain text.

It provides a lightweight markup which can be efficiently converted to HTML in the web browser or on the server.

Its tags can be dynamically redefined and styled with any CSS property or HTML attribute, and code snippets can be automatically colorized.

## Rationale

While HTML tags are fine to define the structure and semantics of a documents, their verbosity can 
quickly become a terrible annoyance, especially when writing the actual text content of a page.

The classical solution for this problem is generally to use a HTML preprocessor to be able to use a more concise syntax.
    
On one hand, there are redactional preprocessors like Markdown or Creole, which allow to write a webpage content
in plain text, without requiring any prior HTML knowledge at all.

That's nice, but unfortunately the text presentation can't be freely changed on a case by case basis, unless we resign ourselves to 
use standard HTML tags where we want to diverge from the predefined CSS stylesheet.

On the other hand, there are templating preprocessors like Jade or Slim, which have absolutely no limitations at all, 
as they are actually complete alternatives to HTML.

They are very useful to build HTML pages for a dynamic website, but not really convenient to just write textual content.
    
Pendown tries to fill that gap.

While it's not an HTML replacement or a book generator, it's an advanced redactional preprocessor, which directly integrates
powerful style customization features.

## Syntax

Pendown was designed according to the following main goals :

*   Provide short and readable plain-text tags minimizing conflicts with most texts and code snippets;
*   Be available and efficient both on web servers and browsers;
*   Be customizable and extensible, by allowing to dynamically :
    *    change the tag colors, font sizes, CSS properties and HTML attributes;
    *    create new tags and redefine the existing tags.
*   Provide both manual and automatic syntax highlighting.

Here are a few sample tags : 

```
! Heading 1
!! Heading 2
!!! Heading 3
!!!! Heading 4
!!!!! Heading 5
!!!!!! Heading 6

**bold**
%%italics%%
^^superscript^^
,,subscript,,
~~strikethrough~~
__underlined__
##highlighted##

{{ span }}
{{{ div }}}
#box ###
+++ frame +++
>>> quote >>>
::: pre :::

[[[
(( Monday | Tuesday | Wednesday ))
(( 1      | 2       | 3         ))
(( 1      | 2       | 3         ))
(( 1      | 2       | 3         ))
]]]

*   List
*   List
    *   Sub-list
    *   Sub-list
        #   Numbered sub-list
        #   Numbered sub-list
            #   Numbered sub-list
            #   Numbered sub-list
        #   Numbered
            sub-list

@@http://www.github.com A link to Github@@
@@http://www.github.com [[image.jpg:20]]@@
@@http://www.github.com@@

[[image.jpg]]
[[image.jpg:20]]
[[image.jpg:20vw,20%]]
```

## Styling

Pendown tags can be followed by one or several lists of style modifiers :

```
{{^big,red,yellow_fill\ A big red text with a yellow background }}

{{^@2.5,$00f,#eee,black_outline\ A big blue text with a gray background and a black outline }}
```

These modifiers can be of several kinds :

*   Id : `?menu`
*   Class : `bold`
*   Property : `border-style=dotted`
*   Attribute : `&onclick="alert('Hello!')"`
*   Text color : `$rgb` `$rgba` `$rrggbb` `$rrggbbaa`
*   Decoration color : `~rgb` `~rgba` `~rrggbb` `~rrggbbaa`
*   Background color : `#rgb` `#rgba` `#rrggbb` `#rrggbbaa`
*   Border color : `+rgb` `+rgba` `+rrggbb` `+rrggbbaa`
*   Font size : `@1.25` `@1.25rem` `@1.25vw`
*   Column span : `=2`

Modifier lists can be named, so that they can be reused multiple times in the document :

```
{{^blue,italic:gangnam\ A blue text in italics }}

!^gangnam\ This title also uses the gangnam style.
```

In a modifier list, special characters can be escaped with the caret character :

```
{{^&onclick="alert('^\^\^,^:^^')"\Click me!}}
```

## Extensibility

The modifier list of a predefined color tag can also be redefined :

```
{{^#ffd,$f87:²\}}
This is a ²salmon text on a yellow background².
{{^red:²\}}
But this ²text is red².
```

Moreover, the special modifier `!` allows to override the definition of any predefined tag.

```
{{^![[ <del$>,!]] </del>\}}
[[This is not an image.]]
{{^![[,!]]\}}
```

The dollar sign in the definition will be replaced by the actual tag attributes.

A tag without definition is removed.

New tags are created in the same way.

```
{{^!%%% <progress max="100"$></progress>\}} 

Progress : %%%^&value="40"\ 
```

The same tag can be used to open or close a block, by defining it several times.

```
{{^!$$$ <del$>,!$$$ </del>\}}

$$$^~00f\ This text has been deleted.$$$
```

Custom tags are identified in their definition order, before any predefined tags.

## Syntax highlighting

Pendown can automatically add colors to C-like code snippets, by specifying their language through a dedicated modifier :

```
:::^cpp\
// Colorized source code

#include <iostream>

using namespace std;

int main()
{
    cout << "Hello world!";

    return 0;
}
:::
```

The following programming languages are currently supported :

*   C : c h
*   C++ : cpp hpp cxx hxx
*   C# : cs
*   D : d
*   Java : java
*   JavaScript : js
*   TypeScript : ts

Files with any of the above extensions can also be colorized individually, through the command line application.

## Client-side compiler

### Installation

Just put the `pendown.css` and `pendown.js` files in the same folder as your HTML files, or in any folder accessible from them.

### Usage

Include both files in your HTML file, and write your Pendown text inside one or several `<xmp>` blocks :

```html
<meta charset="utf8"/>
<link rel="stylesheet" href="pendown.css">
<xmp>
! This is the title
    
Put your **Pendown** text here :)
</xmp>
<script src="pendown.js"></script>
```

All the Pendown tags contained in those blocks will automatically be converted to HTML when the file is opened 
in a web browser.

Just make sure that the relative paths towards `pendown.css` and `pendown.js` are right.

### Sample

Open the `SAMPLE/sample.html` file in a modern web browser like `Firefox` or `Chrome`, and you should see this :

![](https://github.com/senselogic/PENDOWN/blob/master/SAMPLE/sample.png)

Here is its actual content, which can be edited with any plain text editor like `Geany` or `Notepad++`.

As you can see, no HTML tags where needed to write this text :

```html
<meta charset="utf8"/>
<link rel="stylesheet" href="../pendown.css">
<xmp>
**Pendown** tags are automatically converted into **HTML** tags when the file is opened in a web browser.

---

! Giant Title

!! Huge title

!!! Big title

!!!! Large title

!!!!! Medium title

!!!!!! Small title

!! Line break

Manual line break§
inside a paragraph.

Another paragraph.

!! Page break

~~~

This is printed on a new page.

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

~~^~f00\strikethrough~~

__underlined__

__^~f00\underlined__

##highlighted##

##^#fce\highlighted##

##^#0f02\highlighted##

{{^$6f42c1\colored}}

{{^$0cc\colored}}

{{^$f4f,@1.25\colored}}

{{^$80f,large:violet_large\colored}}

{{^violet_large,bold\colored}}

{{^cyan\colored}}

{{^pink,@1.25\colored}}

{{^blue,large:blue_large\colored}}

{{^blue_large,bold\colored}}

{{{^black_outline,large,bold\
°gray°

⁰orange⁰

¹pink¹

²red²

³blue³

⁴violet⁴

⁵cyan⁵

⁶black⁶

⁷yellow⁷

⁸white⁸

⁹green⁹
}}}

!! Code

:::
##// ²Colorized source code²##

²if² ³(³ ... ³)³
³{³
    ...
³}³
²else²
³{³
    ...
³}³
:::

:::^cpp\
// Colorized source code

#include <iostream>

using namespace std;

int main()
{
    cout << "Hello world!";

    return 0;
}
:::

!! Block

{{{^pastel_gray_fill\
Block
}}}

{{{^pastel_gray_fill,black\
Block
}}}

{{{^#cfe\
Block
}}}

{{{^#cfe,$000\
Block
}}}

!! Box

###
Box
###

###^black\
Box
###

###^#cfe\
Box
###

###^#cfe,$000\
Box
###

!! Frame

+++
Frame
+++

+++^red_border\
Frame
+++

+++^+f00,#ffd\
Frame
+++

+++^+f00,#ffd,$000\
Frame
+++

!! Quote

>>>
Quote
>>>

>>>^+f00\
Quote
>>>

>>>^+f00,#ffd\
Quote
>>>

>>>^+f00,#ffd,$000\
Quote
>>>

!! Column

+++^column_2\
Batlh biqsip 'ugh chang'eng chuy duran lung dir ghogh habli' jer lor motlh.
Qan siqwi' tuj muvwi' wogh yor 'o'megh be'etor boqha''egh lodni'pu' jij laq lol lo' law' mevyap.

Pivchem qid red rutlh saqjan say'qu'moh siq torgh tlhach mu'mey vilinhod vithay' yem 'iqnah 'irneh.
Ghitlhwi' jer loghqam me'nal nav habli' notqa' podmoh qaywi' qin qi'tu' red ril siqwi' tagh tahqeq.

Tiqnagh lemdu' 'och 'orghen rojmab 'urwi' bop chevwi' tlhoy' der mara nuh bey' peghmey vittlhegh.
Qa'meh quv qep'it qid qin ros saqjan serrum tahqeq tatlh toq van yu'egh 'aqtu' em.

Naq pach pujwi' qanwi' qutluch qi'lop ron rutlh say'qu'moh tennusnal tlhej.
Denibya'ngan ghay'cha' janluq dugh hu je lotlhmoq tlhoy' sas valqis ghubdaq hos chohwi' janluq.
+++

!! Table

[[[
((        | Monday | Tuesday | Wednesday ))
(( Apple  | 1      | 2       | 3         ))
(( Orange | 1      | 2       | 3         ))
(( Banana | 1      | 2       | 3         ))
]]]

{{^orange,bold:²\}}
[[[^orange_border,tiny_border,padding,black:table\
((^orange_fill,white,bold,center:title\^=2\ Subject pronouns ))
(( ²yo² | I ))
(( ²tú² | you ))
(( ²él², ²ella², ²usted² | he, she, %%you%% ))
(( ²nosotros², ²nosotras² | we ))
(( ²vosotros², ²vosotras² | you ))
(( ²ellos², ²ellas², ²ustedes² | they, %%you%% ))
]]]

[[[^table\
((^no_top_left_border\ |^title\ -AR§cantar |^title\ -ER§comer |^title\ -IR§vivir ))
(( °(yo)° | cant²o² | com²o² | viv²o² ))
(( °(tú)° | cant²as² | com²es² | viv²es² ))
(( °(él,ella,usted)° | cant²a² | com²e² | viv²e² ))
(( °(nosotros,-as)° | cant²amos² | com²emos² | viv²imos² ))
(( °(vosotros,-as)° | cant²áis² | com²éis² | viv²ís² ))
(( °(ellos,-as,uds)° | cant²an² | com²en² | viv²en² ))
]]]
{{^red:²\}}

[[[^width_5_6,border,light_gray_border,padding\
((^width_20\
    Batlh biqsip 'ugh chang'eng chuy duran lung dir ghogh habli' jer lor motlh.§
    Qan siqwi' tuj muvwi' wogh yor 'o'megh be'etor boqha''egh lodni'pu' jij laq lol lo' law' mevyap.
|
    Pivchem qid red rutlh saqjan say'qu'moh siq torgh tlhach mu'mey vilinhod vithay' yem 'iqnah 'irneh.§
    Ghitlhwi' jer loghqam me'nal nav habli' notqa' podmoh qaywi' qin qi'tu' red ril siqwi' tagh tahqeq.§
    Tiqnagh lemdu' 'och 'orghen rojmab 'urwi' bop chevwi' tlhoy' der mara nuh bey' peghmey vittlhegh.§
    Qa'meh quv qep'it qid qin ros saqjan serrum tahqeq tatlh toq van yu'egh 'aqtu' em.
|^width_20\
    Naq pach pujwi' qanwi' qutluch qi'lop ron rutlh say'qu'moh tennusnal tlhej.§
    Denibya'ngan ghay'cha' janluq dugh hu je lotlhmoq tlhoy' sas valqis ghubdaq hos chohwi' janluq.
))
]]]

[[[^width_100,no_padding\
((
    [[[^width_100,padding,small:table\
    ((^black_fill,dark_gray\ black ))
    ]]]
|
    [[[^table\
    ((^dark_gray_fill,gray\ dark gray ))
    ((^dark_orange_fill,orange\ dark orange ))
    ((^dark_red_fill,red\ dark red ))
    ((^dark_pink_fill,pink\ dark pink ))
    ((^dark_violet_fill,violet\ dark violet ))
    ((^dark_blue_fill,blue\ dark blue ))
    ((^dark_cyan_fill,cyan\ dark cyan ))
    ((^dark_green_fill,green\ dark green ))
    ((^dark_yellow_fill,yellow\ dark yellow ))
    ]]]
|
    [[[^table\
    ((^gray_fill,light_gray\ gray ))
    ((^orange_fill,light_orange\ orange ))
    ((^red_fill,light_red\ red ))
    ((^pink_fill,light_pink\ pink ))
    ((^violet_fill,light_violet\ violet ))
    ((^blue_fill,light_blue\ blue ))
    ((^cyan_fill,light_cyan\ cyan ))
    ((^green_fill,light_green\ green ))
    ((^yellow_fill,white\ yellow ))
    ]]]
|
    [[[^table\
    ((^light_gray_fill,pastel_gray\ light gray ))
    ((^light_orange_fill,pastel_orange\ light orange ))
    ((^light_red_fill,pastel_red\ light red ))
    ((^light_pink_fill,pastel_pink\ light pink ))
    ((^light_violet_fill,pastel_violet\ light violet ))
    ((^light_blue_fill,pastel_blue\ light blue ))
    ((^light_cyan_fill,pastel_cyan\ light cyan ))
    ((^light_green_fill,pastel_green\ light green ))
    ((^light_yellow_fill,white\ light yellow ))
    ]]]
|
    [[[^table\
    ((^pastel_gray_fill,white\ pastel gray ))
    ((^pastel_orange_fill,white\ pastel orange ))
    ((^pastel_red_fill,white\ pastel red ))
    ((^pastel_pink_fill,white\ pastel pink ))
    ((^pastel_violet_fill,white\ pastel violet ))
    ((^pastel_blue_fill,white\ pastel blue ))
    ((^pastel_cyan_fill,white\ pastel cyan ))
    ((^pastel_green_fill,white\ pastel green ))
    ((^pastel_yellow_fill,white\ pastel yellow ))
    ]]]
|
    [[[^table\
    ((^white_fill,pastel_gray\ white ))
    ]]]
))
]]]

!! List

Four spaces per level.

*   List
*   List
    *   Sub-list
    *   Sub-list
        #   Numbered sub-list
        #   Numbered sub-list
            #   Numbered sub-list
            #   Numbered sub-list
        #   Numbered
            sub-list
*   List
    *   Sub-list
        *   Sub-list
        *   Sub-list
    *   Sub-list
        *   Sub-list
        *   Sub-list
*   List§
    ...

{{{^dash\
*   List
*   List
    *   Sub-list
    *   Sub-list
        #   Numbered sub-list
        #   Numbered sub-list
            #   Numbered sub-list
            #   Numbered sub-list
        #   Numbered
            sub-list
*   List
    *   Sub-list
        *   Sub-list
        *   Sub-list
    *   Sub-list
        *   Sub-list
        *   Sub-list
*   List§
    ...
}}}

!! Link

@@http://www.github.com This is a link@@

@@http://www.github.com [[image.jpg:20]]@@

@@http://www.github.com@@

!! Image

Small :

[[image.jpg:20]][[image_2.jpg:20]]§
[[image_3.jpg:20]][[image_4.jpg:20]][[image_5.jpg:20]]

Medium :

[[image_3.jpg:40]][[image_4.jpg:40]]

Large :

[[image.jpg]]§
[[image_2.jpg:]]§
[[image_4.jpg:,100]]

Custom :

[[image_5.jpg:50vw,50%]]

Effects :

[[^shadow_3\image_6.jpg:20]] [[^shadow_6\image_6.jpg:20]] [[^shadow_9\image_6.jpg:20]] [[^shadow_-6\image_6.jpg:20]]

[[^round_10\image_6.jpg:20]] [[^round_20\image_6.jpg:20]] [[^round_50\image_6.jpg:20]] [[^opacity_50\image_6.jpg:20]]

[[^blur_1\image_6.jpg:20]] [[^lightness_130\image_6.jpg:20]] [[^contrast_180\image_6.jpg:20]] [[^saturation_200\image_6.jpg:20]]

[[^hue_180\image_6.jpg:20]] [[^inverse_100\image_6.jpg:20]] [[^gray_100\image_6.jpg:20]] [[^sepia_100\image_6.jpg:20]]

!! Styling

{{{^?id,big,padding=1rem,border-style=dotted,background-color=rgb(128^,128^,128^,0.2),$00c,center\
You can use any CSS id, class or property you need.
}}}

{{^&onclick="alert('^\^\^,^:^^')"\Click me!}}

!! Extensibility

{{^!%%% <progress max="100"$></progress>\}} 

Progress : %%%^&value="40"\ 

{{^!$$$ <del$>,!$$$ </del>\}}

$$$^~00f\ This text has been deleted.$$$

{{^![[ <del$>,!]] </del>\}}
[[This is not an image.]]
{{^![[,!]]\}}

!! HTML

²Pendown tags² can be mixed with <span style="color:green">HTML tags</span>.
</xmp>
<script src="../pendown.js"></script>
```

### Frequently asked questions

> How can I force Pendown to use black as the default text color ?

Replace `<xmp>` by `<xmp class="black">` in the HTML file.

> How can I hide the Pendown text until it has been converted into HTML ?

Replace `<xmp>` by `<xmp style="display:none">` in the HTML file.

> How can I generate a PDF file from my Pendown HTML file ?

* Open it in Chrome or Chromium.
* Press `Ctrl-P`.
* Select the PDF printer.
* Click on `More settings` to enable `Background graphics` and disable `Headers and footers`.
* Click on `Print`.

### Troubleshooting

> The Pendown page doesn't show the converted text.

Check that the Pendown file extension is ".html".

Check that your text is between the `<xmp>` and `</xmp>` tags.

Check that the relative paths to "pendown.css" and "pendown.js" are correct.

> The Pendown page doesn't use the Comic Sans MS or Consolas font as in the "sample.png" image.

Check that both fonts are properly installed on your system.

> The Pendown page doens't show the page breaks in the browser.

This is normal, page breaks are only applied when the web page is printed from the browser, or when the generated HTML file is loaded in LibreOffice Writer.

## Server-side compiler

Pendown documents can also be converted offline through a command line tool.

It's available as a single file application implemented in the D language.

### Installation

Install the [DMD 2 compiler](https://dlang.org/download.html) appropriate to your system (Linux, Windows or macOS).

Then build the executable with the following command line :

```bash
dmd -m64 pendown.d
```

### Command line

```bash
pendown [options] input_file output_file
```

### Options

```
--colorize : generate a Pendown file from a source code file
--process : generate a HTML file from a Pendown file
--loadable : make the HTML file loadable in LibreOffice Writer
--script : make the HTML file import the Pendown script file
--style : make the HTML file import the Pendown style file
--language c|cpp|cs|d|java|js|ts : set the source code language
--tabulation 4 : set the text tabulation space count
--indentation 4 : set the list indentation space count
--page 21 29.7 2 1 1 1 : resize the images for a LibreOffice Writer document of this page width, height, left margin, right margin, top margin and bottom margin
--path PENDOWN_FOLDER/ : set the path of the imported Pendown files 
``` 

### Examples

```bash
pendown --process --style --path ../ document.pd document.html
```

Converts a Pendown file to a HTML file which imports Pendown's CSS file from the upper folder.

```bash
pendown --process --page 18 27.7 --style --path ../ document.pd document.html
```

Converts a Pendown file to a HTML file which can be imported in LibreOffice Writer

```bash
pendown --script --style --path ../ document.pd document.html
```

Converts a Pendown file to a HTML file which imports Pendown's Javascript and CSS style files from the upper folder,
so that the Pendown tags will be converted directly by the web browser.

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

## Limitations

* Lists are not processed inside preformatted blocks.
* A Pendown text can't contain `<xmp>` tags if it is to be converted to HTML by the web browser script.

## Version

3.0

## Author

Eric Pelzer (ecstatic.coder@gmail.com).

## License

This project is licensed under the GNU General Public License version 3.

See the [LICENSE.md](LICENSE.md) file for details.
