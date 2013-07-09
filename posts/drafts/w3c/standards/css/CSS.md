CSS CURRENT STATUS
================

Completed Work
--------------

###Standards

####Selectors API Level 1[2013-02-21]

Selectors, which are widely used in CSS, are patterns that match against elements in a tree structure [SELECT][CSS21]. The Selectors API specification defines methods for retrieving Element nodes from the DOM by matching against a group of selectors. It is often desirable to perform DOM operations on a specific set of elements in a document. These methods simplify the process of acquiring specific elements, especially compared with the more verbose techniques defined and used in the past.

####Media Queries[2012-06-19]

HTML4 and CSS2 currently support media-dependent style sheets tailored for different media types. For example, a document may use sans-serif fonts when displayed on a screen and serif fonts when printed. ‘screen’ and ‘print’ are two media types that have been defined. Media queries extend the functionality of media types by allowing more precise labeling of style sheets.

A media query consists of a media type and zero or more expressions to limit the scope of style sheets. Among the media features that can be used in media queries are ‘width’, ‘height’, and ‘color’. By using media queries, presentations can be tailored to a specific range of output devices without changing the content itself.

####CSS Namespaces Module[2011-09-29]

This CSS Namespaces module defines the syntax for using namespaces in CSS. It defines the @namespace rule for declaring the default namespace and binding namespaces to namespace prefixes, and it also defines a syntax that other specifications can adopt for using those prefixes in namespace-qualified names.

####Selectors Level 3[2011-09-29]

Selectors are patterns that match against elements in a tree. Selectors have been optimized for use with HTML and XML, and are designed to be usable in performance-critical code.

CSS (Cascading Style Sheets) is a language for describing the rendering of HTML and XML documents on screen, on paper, in speech, etc. CSS uses Selectors for binding style properties to elements in the document. This document describes extensions to the selectors defined in CSS level 2. These extended selectors will be used by CSS level 3.

Selectors define the following function:

	expression ∗ element → boolean

That is, given an element and a selector, this specification defines whether that element matches the selector.

These expressions can also be used, for instance, to select a set of elements, or a single element from a set of elements, by evaluating the expression across all the elements in a subtree. STTS (Simple Tree Transformation Sheets), a language for transforming XML trees, uses this mechanism. [STTS]

####CSS Color Module Level 3[2011-06-07]

CSS (Cascading Style Sheets) is a language for describing the rendering of HTML and XML documents on screen, on paper, in speech, etc. It uses color related properties and respective values to color the text, backgrounds, borders, and other parts of elements in a document. This specification describes color values and properties for foreground color and group opacity. These include properties and values from CSS level 2 and new values.

####A MathML for CSS Profile[2011-06-07]

This document describes a profile of MathML 3.0 that admits formatting with Cascading Style Sheets.

####Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification[2011-06-07]

CSS 2.1 is derived from and is intended to replace CSS2. It supports media-specific style sheets so that authors may tailor the presentation of their documents to visual browsers, aural devices, printers, braille devices, handheld devices, etc. It also supports content positioning, table layout, features for internationalization and some properties related to user interface. CSS 2.1 corrects a few errors in CSS2 (the most important being a new definition of the height/width of absolutely positioned elements, more influence for HTML's "style" attribute and a new calculation of the 'clip' property), and adds a few highly requested features which have already been widely implemented. But most of all CSS 2.1 represents a "snapshot" of CSS usage: it consists of all CSS features that are implemented interoperably at the date of publication of the Recommendation.

####Associating Style Sheets with XML documents 1.0 (Second Edition)[2010-10-28]

This document allows a style sheet to be associated with an XML document by including one or more processing instructions with a target of xml-stylesheet in the document's prolog.

####Cascading Style Sheets (CSS1) Level 1 Specification[2008-04-11]

####Document Object Model (DOM) Level 2 Style Specification[2000-11-13]

This specification defines the Document Object Model Level 2 Style Sheets and Cascading Style Sheets (CSS), a platform- and language-neutral interface that allows programs and scripts to dynamically access and update the content and of style sheets documents.

###Group Notes

####CSS Print Profile[2013-03-14]

This specification defines a subset of Cascading Style Sheets Level 2, revision 1 [CSS21] and CSS3 Module: Paged Media [PAGEMEDIA] for printing to low-cost devices. It is designed for printing in situations where it is not feasible or desirable to install a printer-specific driver, and for situations were some variability in the output is acceptable.

This profile is designed to work in conjunction with XHTML-Print [XHTMLPRINT] and defines a minimum level of conformance as well as an extension set that provides stronger layout control for the printing of mixed text and images, tables and image collections.

####Requirements for Japanese Text Layout[2012-04-03]

Describes requirements for general Japanese layout realized with technologies like CSS, SVG and XSL-FO. The document is mainly based on a standard for Japanese layout, JIS X 4051, however, it also addresses areas which are not covered by JIS X 4051.

####Cascading Style Sheets (CSS) Snapshot 2007[2011-05-12]

This document collects together into one definition all the specs that together form the current state of Cascading Style Sheets (CSS). The primary audience is CSS implementors, not CSS authors, as this definition includes modules by specification stability, not Web browser adoption rate.

####Cascading Style Sheets (CSS) Snapshot 2010[2011-05-12]

This document collects together into one definition all the specs that together form the current state of Cascading Style Sheets (CSS) as of 2010.

####CSS Techniques for Web Content Accessibility Guidelines 1.0[2000-11-06]

This document describes techniques for authoring accessible Cascading Style Sheets (CSS). Cascading Style Sheets are defined by the W3C Recommendations "CSS Level 1" [CSS1] and "CSS Level 2" [CSS2]. This document is intended to help authors of Web content who wish to claim conformance to "Web Content Accessibility Guidelines 1.0" ([WCAG10]). While the techniques in this document should help people author CSS that conforms to "Web Content Accessibility Guidelines 1.0", these techniques are neither guarantees of conformance nor the only way an author might produce conforming content.

This document is part of a series of documents about techniques for authoring accessible Web content. For information about the other documents in the series, please refer to "Techniques for Web Content Accessibility Guidelines 1.0" [WCAG10-TECHS].

Note: This document contains a number of examples that illustrate accessible solutions in CSS but also deprecated examples that illustrate what content developers should not do. The deprecated examples are highlighted and readers should approach them with caution -- they are meant for illustrative purposes only.

####List of suggested extensions to CSS[1998-12-10]

Drafts
------

###Candidate Recommendations

####CSS Values and Units Module Level 3[2013-04-04]

This CSS3 module describes the various values and units that CSS properties accept. Also, it describes how values are computed from "specified" (which is what the cascading process yields) through "computed" and "used" into "actual" values. The main purpose of this module is to define common values and units in one specification which can be referred to by other modules. As such, it does not make sense to claim conformance with this module alone.

####CSS Conditional Rules Module Level 3[2013-04-04]

Style rules in CSS can depend on external factors: the output media ('@media'), the capabilities of the user agent ('@supports') and the URI of the document ('@document').

####CSS Flexible Box Layout Module[2012-09-18]

The draft describes a CSS box model optimized for interface design. It provides an additional layout system alongside the ones already in CSS. [CSS21] In this new box model, the children of a box are laid out either horizontally or vertically, and unused space can be assigned to a particular child or distributed among the children by assignment of “flex” to the children that should expand. Nesting of these boxes (horizontal inside vertical, or vertical inside horizontal) can be used to build layouts in two dimensions.

####CSS Backgrounds and Borders Module Level 3[2012-07-24]

CSS is a language for describing the rendering of structured documents (such as HTML and XML) on screen, on paper, in speech, etc. This draft contains the features of CSS level 3 relating to borders and backgrounds. It includes and extends the functionality of CSS level 2 [CSS21], which builds on CSS level 1 [CSS1] . The main extensions compared to level 2 are borders consisting of images, boxes with multiple backgrounds, boxes with rounded corners and boxes with shadows.

This module replaces two earlier drafts: CSS3 Backgrounds and CSS3 Border.

####CSS Image Values and Replaced Content Module Level 3[2012-04-17]

The draft defines how to refer to images and other external objects from within CSS, including fallback images in different formats, special URLs for vector images of color gradients, and different ways to set the size of images and other objects.

####CSS Speech Module[2012-03-20]

CSS (Cascading Style Sheets) is a language for describing the rendering of HTML and XML documents on screen, on paper, in speech, etc. CSS defines aural properties that give control over rendering XML to speech. This draft describes the text to speech properties proposed for CSS level 3. These are designed for match the model described in the Speech Synthesis Markup Language (SSML) Version 1.0 [SSML10]

The CSS3 Speech Module is a community effort and if you would like to help with implementation and driving the specification forward along the W3C Recommendation track, please contact the editors.

####CSS Multi-column Layout Module[2011-04-12]

This module describes multi-column layout in CSS. It builds on the CSS3 Box model module and adds functionality to flow the content of an element into multiple columns.

####CSS Style Attributes[2010-10-12]

Describes the syntax and interpretation of the CSS fragment that can be used in "style" attributes inside mark-up, e.g., in HTML, SVG and MathML.

####CSS Mobile Profile 2.0[2008-12-10]

This specification defines in general a subset of CSS 2.1 [CSS21] that is to be considered a baseline for interoperability between implementations of CSS on constrained devices (e.g. mobile phones). Its intent is not to produce a profile of CSS incompatible with the complete specification, but rather to ensure that implementations that due to platform limitations cannot support the entire specification implement a common subset that is interoperable not only amongst constrained implementations but also with complete ones. Additionally, this specification aligns itself as much as possible with the OMA Wireless CSS 1.1 [WCSS11] specification. At the same time, OMA is doing alignment work in OMA Wireless CSS 1.2 [WCSS12]. It is aimed at aligning the mandatory compliance items between CSS Mobile Profile 2.0 and OMA Wireless CSS 1.2 [WCSS12].

####CSS Marquee Module Level 3[2008-12-05]

CSS describes the rendering of documents on various media. When documents (e.g., HTML) are laid out on visual media (e.g., screen or print) and the contents of some element are too large for a given area, CSS allows the designer to specify whether and how the overflow is displayed. One way, available on certain devices, is the “marquee” effect: the content is animated and moves automatically back and forth. This module defines the properties to control that effect.

####CSS TV Profile 1.0[2003-05-14]

This specification defines a subset of Cascading Style Sheets Level 2 and CSS3 Module: Color specifications tailored to the needs and constraints of TV devices.

###Last Call Drafts

####CSS Custom Properties for Cascading Variables Module Level 1[2013-06-20]

This module contains features of CSS relating to variables. A variable is a type of value that is accepted by all properties and several properties can share the same variable.

####CSS Text Decoration Module Level 3[2013-01-03]

This module contains the features of CSS relating to text decoration, such as underlines, text shadows, and emphasis marks.

####CSS Basic User Interface Module Level 3 (CSS3 UI)[2012-01-17]

This section is informative.

CSS (Cascading Style Sheets) is a language for describing the rendering of HTML and XML documents on screen, on paper, in speech, etc. It uses various selectors, properties and values to style basic user interface elements in a document. This specification describes those user interface related selectors, properties and values that are proposed for CSS level 3 to style HTML and XML (including XHTML and XForms). It includes and extends user interface related features from the selectors, properties and values of CSS level 2 revision 1 and Selectors specifications.

###Other Working Drafts

####Compositing and Blending Level 1[2013-06-25]

Compositing describes how shapes of different elements are combined into a single image by overlaying, masking, blending, etc. The specification also defines a syntax for using compositing in CSS.

####Web Animations 1.0[2013-06-25]

This specification defines a model for synchronization and timing of changes to the presentation of a Web page. This specification also defines an application programming interface for interacting with this model and it is expected that further specifications will define declarative means for exposing these features.

####CSS Masking Level 1[2013-06-20]

CSS Masking provides two means for partially or fully hiding portions of visual elements: masking and clipping. Masking describes how to use another graphical element or image as a luminance or alpha mask. Clipping describes the visible region of visual elements. This module defines faetures for both SVG and CSS.

####CSS Shapes Module Level 1[2013-06-20]

CSS Shapes control the geometric shapes used for wrapping inline flow content outside an element.

####CSS Exclusions Module Level 1[2013-05-28]

The module defines (1) properties to assign a shape (circle or polygon) to CSS boxes, to control the line length more precisely than with margins; (2) properties to define how text in other boxes wraps around such a shaped box; and (3) properties to turn an absolutely positioned box into an exclusion, causing text to wrap around it, too.

####CSS Regions Module Level 1[2013-05-28]

The CSS Regions specification defines CSS properties to distribute the content of one element over multiple, disconnected regions, such as the regions defined by CSS Grid Layout.

####Filter Effects 1.0[2013-05-23]

Filter effects are a way of processing an element's rendering before it is displayed in the document. Typically, rendering an element via CSS or SVG can conceptually described as if the element, including its children, are drawn into a buffer (such as a raster image) and then that buffer is composited into the elements parent. Filters apply an effect before the compositing stage. Examples of such effects are blurring, changing color intensity and warping the image.

Although originally designed for use in SVG, filter effects are a set a set of operations to apply on an image buffer and therefore can be applied to nearly any presentational environment, including CSS. They are triggered by a style instruction (the ‘filter’ property). This specification describes filters in a manner that allows them to be used in content styled by CSS, such as HTML and SVG. It also defines a CSS property value function that produces a CSS  value.

####CSS Box Alignment Module Level 3[2013-05-14]

This module contains the features of CSS relating to the alignment of boxes within their containers in the various CSS box layout models: block layout, table layout, flex layout, and grid layout.

####Requirements for Hangul Text Layout and Typography[2013-05-14]

This document describes requirements for general Korean language/Hangul text layout and typography realized with technologies like CSS, SVG and XSL-FO. The document is mainly based on a project to develop the international standard for Korean text layout. It is similar in intent to the Japanese Layout Requirements WG Note.

####Selectors Level 4[2013-05-02]

Selectors are patterns that match against elements in a tree. They are a core component of CSS (Cascading Style Sheets), which uses Selectors to bind style properties to elements in a document.

####CSS Overflow Module Level 3[2013-04-18]

CSS is a language for describing the rendering of structured documents (such as HTML and XML) on screen, on paper, in speech, etc. This module contains the features of CSS relating to new mechanisms of overflow handling in visual media (e.g., screen or paper). In interactive media, it describes features that allow the overflow from a fixed size container to be handled by pagination (displaying one page at a time). It also describes features, applying to all visual media, that allow the contents of an element to be spread across multiple fragments, allowing the contents to flow across multiple regions or to have different styles for different fragments.

####CSS Grid Layout[2013-04-02]

The Grid Layout module of CSS allows designers to define invisible grids of horizontal and vertical lines. Elements from a document can then be anchored to points in the grid, which allows them to be visually aligned to each other, even if they are not next to each other in the source.

####CSS Paged Media Module Level 3[2013-03-14]

This module describes the page model that partitions a flow into pages. It builds on the Box model module and introduces and defines the page model and paged media. It adds functionality for pagination, page margins, page size and orientation, headers and footers, widows and orphans, and image orientation. Finally it extends generated content to enable page numbering and running headers / footers.

####CSS Counter Styles Level 3[2013-02-21]

This module introduces the ‘@counter-style’ rule, which allows authors to define their own custom counter styles for use with CSS list-marker and generated-content counters. It also predefines a set of common counter styles.

####CSS Animations[2013-02-19]

CSS Animations allow an author to modify CSS property values over time.

####CSS Fonts Module Level 3[2013-02-12]

This CSS3 module describes how font properties are specified and how font resources are loaded dynamically. The contents of this specification are a consolidation of content previously divided into CSS3 Fonts and CSS3 Web Fonts modules.

####CSS Transitions[2013-02-12]

CSS Transitions allows property changes in CSS values to occur smoothly over a specified duration.

####CSS Cascading and Inheritance Level 3[2013-01-03]

This CSS3 module describes how values are assigned to properties. CSS allows several style sheets to influence the rendering of a document, and the process of combining these style sheets is called “cascading”. If no value can be found through cascading, a value can be inherited from the parent element or the property's initial value is used.

####CSS Writing Modes Module Level 3[2012-11-15]

This module specifies the text layout model in CSS and the properties that control it. It covers bidirectional and vertical text.

####CSS Text Module Level 3[2012-11-13]

This CSS3 module defines properties for text manipulation and specifies their processing model. It covers line breaking, justification and alignment, white space handling, text decoration and text transformation.

####CSS Intrinsic & Extrinsic Sizing Module Level 3[2012-09-27]

This module of CSS defines keywords for the 'width' and 'height' properties to allow a designer to specify that an element should be as small as possible, as large as possible, or as large as possible up to the limit of its containing block. The 'width' and 'height' properties themselves are defined in the CSS Box Model.

####CSS Transforms[2012-09-11]

CSS transforms allows elements styled with CSS to be transformed in two-dimensional or three-dimensional space.

####CSS Image Values and Replaced Content Module Level 4[2012-09-11]

The specification describes how CSS uses images: external images linked via a URL, sets of fallback images and various built-in color gradients. Images can be resized or cropped.

####CSS Fragmentation Module Level 3[2012-08-23]

This CSS module defines the style properties that specify the points in a document where text may be broken to start a new page, a new column, or any similar kind of region.

####Fullscreen[2012-07-03]

This specification defines an API to allow elements to be rendered fullscreen.

####Selectors API Level 2[2012-06-28]

The Selectors API specification defines methods for retrieving Element nodes from the DOM by matching against a group of selectors (as used in CSS).

####CSS Positioned Layout Module Level 3[2012-02-07]

CSS Positioned Layout defines the five ways to lay out elements with CSS: four ways from CSS level 2 ('static', 'relative', 'absolute' and 'fixed') and a fifth way, to position elements relative to a page box.

####CSS 2D Transforms[2011-12-15]

CSS 2D Transforms allows elements rendered by CSS to be transformed in two-dimensional space.

####CSS Template Layout Module[2011-11-29]

CSS is a simple, declarative language for creating style sheets that specify the rendering of HTML and other structured documents. This specification is part of level 3 of CSS (“CSS3”) and contains features to describe layouts at a high level, meant for tasks such as the positioning and alignment of “widgets” in a graphical user interface or the layout grid for a page or a window, in particular when the desired visual order is different from the order of the elements in the source document. Other CSS3 modules contain properties to specify fonts, colors, text alignment, list numbering, tables, etc.

The features in this module are described together for easier reading, but are usually not implemented as a group. CSS3 modules often depend on other modules or contain features for several media types. Implementers should look at the various “profiles” of CSS, which list consistent sets of features for each type of media.

####CSS Generated Content for Paged Media Module[2011-11-29]

This module describes features often used in printed publications. In particular, this specification describes how CSS style sheets can express running headers and footers, leaders, cross-references, footnotes, sidenotes, named flows, hyphenation, new counter styles, character substitution, image resolution, page floats, advanced multi-column layout, conditional content, crop and cross marks, bookmarks, CMYK colors, continuation markers, change bars, line numbers, named page lists, and generated lists. Along with two other CSS3 modules – multi-column layout and paged media – this module offers advanced functionality for presenting structured documents on paged media.

####CSS Device Adaptation[2011-09-15]

This specification provides a way for an author to specify, in CSS, the size, zoom factor, and orientation of the viewport that is used as the base for the initial containing block.

####CSSOM View Module[2011-08-04]

The APIs introduced by this specification provide authors with a way to inspect and manipulate the view information of a document. This includes getting the position of element layout boxes, obtaining the width of the viewport through script, and also scrolling an element.

####CSSOM[2011-07-12]

CSSOM defines APIs (including generic parsing and serialization rules) for Media Queries, Selectors, and CSS itself.

####CSS3 Ruby Module[2011-06-30]

The set of CSS properties proposed in this document can be used in combination with the ruby elements of HTML to produce the stylistic effects needed to display ruby text appropriately relative to base text.

####CSS Lists and Counters Module Level 3[2011-05-24]

This CSS level 3 module describes how lists are styled.

####CSS 3D Transforms Module Level 3[2009-03-20]

CSS 3D Transforms extends CSS Transforms to allow elements rendered by CSS to be transformed in three-dimensional space.

####Behavioral Extensions to CSS[2007-10-19]

Behavioral Extensions provide a way to link to binding technologies, such as XBL, from CSS style sheets. This allows bindings to be selected using the CSS cascade, and thus enables bindings to transparently benefit from the user style sheet mechanism, media selection, and alternate style sheets.

####CSS Grid Positioning Module Level 3[2007-09-05]

This module describes integration of grid-based layout (similar to the grids traditionally used in books and newspapers) with CSS sizing and positioning.

####CSS basic box model[2007-08-09]

CSS (Cascading Style Sheets) describes the rendering of documents on various media. When textual documents (e.g., HTML) are laid out on visual media (e.g., screen or print), CSS models the document as a hierarchy of boxes containing words, lines, paragraphs, tables, etc. each with properties such as size, color and font.

This module describes the basic types of boxes, with their padding and margin, and the normal “flow” (i.e., the sequence of blocks of text with margins in-between). It also defines “floating” boxes, but other kinds of layout, such as tables, absolute positioning, ruby annotations, grid layouts, columns and numbered pages, are described by other modules. Also, the layout of text inside each line (including the handling of left-to-right and right-to-left scripts) is defined elsewhere.

Boxes may contain either horizontal or vertical lines of text. Boxes of different orientations may be mixed in one flow. (This is a level 3 feature.)

####CSS3 Hyperlink Presentation Module[2004-02-24]

CSS (Cascading Style Sheets) is a simple language for describing the presentation of documents. This specification is a module of level 3 of CSS and contains the functionality required to describe the presentation of hyperlink source anchors and the effects of hyperlink activation.

####The CSS 'Reader' Media Type[2004-02-24]

'Reader' is a keyword for use in Media Queries [MEDIAQ]. When a Media Query that includes the 'reader' keyword is attached to (a link to) a style sheet, it indicates that that style sheet is designed to be used by a "reader" device (typically a screen reader), that both displays and speaks a document at the same time. It may also display the document and render it in braille at the same time, or do all three.

Media Queries (and thus 'reader') can be used in documents in HTML [HTML401], XML [XML10], SVG [SVG10], CSS [CSS21] and other formats, wherever they link to a style sheet, and potentially also in links to other resources. (But the latter is not treated in this specification.)

####CSS3 module: Presentation Levels[2003-08-13]

Presentation levels are integer values attached to elements in a document. Elements that are below, at, or above a certain threshold can be styled differently. This feature has two compelling use cases. First, slide presentations with transition effects can be described. For example, list items can be progressively revealed by sliding in from the side. Second, outline views of documents, where only the headings to a certain level are visible, can be generated.

####CSS3 module: Syntax[2003-08-13]

This CSS3 module describes the basic structure of CSS style sheets, some of the details of the syntax, and the rules for parsing CSS style sheets. It also describes (in some cases, informatively) how stylesheets can be linked to documents and how those links can be media-dependent. Additional details of the syntax of some parts of CSS described in other modules will be described in those modules. The selectors module has a grammar for selectors. Modules that define properties give the grammar for the values of those properties, in a format described in this document.

####CSS3 Generated and Replaced Content Module[2003-05-14]

This CSS3 Module describes how to insert and move content around a document, in order to create footnotes, endnotes, section notes. Inserted content can also introduce counters and strings, which can be used for running headers and footers, section numbering, and lists. Finally, techniques for declaring replaced images, as well as scaling and cropping them using CSS, are described.

####CSS3 module: Border[2002-11-07]

CSS is a language for describing the rendering of structured documents (such as HTML and XML) on screen, on paper, in speech, etc. This draft contains the features of CSS level 3 relating to borders and backgrounds. It includes and extends the functionality of CSS level 2 [CSS21], which builds on CSS level 1 [CSS1] . The main extensions compared to level 2 are borders consisting of images, boxes with multiple backgrounds, boxes with rounded corners and boxes with shadows.

This module replaces two earlier drafts: CSS3 Backgrounds and CSS3 Border.

####CSS3 module: line[2002-05-15]

Describes the positioning in the block progression direction both of elements and text within lines and of the lines themselves. This positioning is often relative to a baseline. It also describes special features for formatting of first lines and drop caps.

####CSS3 introduction[2001-05-23]

The members of the CSS&FP Working Group have decided to modularize the CSS specification. This modularization will help to clarify the relationships between the different parts of the specification, and reduce the size of the complete document. It will also allow us to build specific tests on a per module basis and will help implementors in deciding which portions of CSS to support. Furthermore, the modular nature of the specification will make it possible for individual modules to be updated as needed, thus allowing for a more flexible and timely evolution of the specification as a whole.

This document lists all the modules to be contained in the future CSS3 specification.

Obsolete Specifications
-----------------------

###Retired

####User Interface for CSS3[2002-08-02]

####Aural Cascading Style Sheets (ACSS) Specification[1999-09-02]

This document describes style sheet properties for rendering Web documents as synthesized speech. Using style sheets rather than HTML tag extensions allows the same document to be read with visual, aural, or mulitmodal presentation without cluttering up the document or having to produce three (or more) separate parallel documents - which has been shown to result in consistency and update problems. This approach provides greatly improved document accessibility for visually disabled people (the information is better presented and is just as up-to-date as the visual version) without requiring compromises in the visual design of the document.

####Web Fonts[1999-09-02]

This document presents a set of properties allowing font specification by a user agent as well as additional font decoration properties like font effects, emphasis, smoothing, etc... The font specification is very close to the similar section in CSS 2 [CSS2]. The font decoration properties are new to CSS3.

####Positioning HTML Elements with Cascading Style Sheets[1999-09-02	]

The HyperText Markup Language (HTML) is a simple markup language used to create hypertext documents that are portable from one platform to another. HTML documents are SGML documents with generic semantics that are appropriate for representing information from a wide range of applications. CSS (Cascading Style Sheets) is a style sheets language that can be applied to HTML to control the style of a document: which fonts and colors to use, how much white space to insert, etc. The following specification extends CSS to support the positioning and visibility of HTML elements in three-dimensional space. Familiarity with both CSS1 and HTML 3.2 are assumed.

####CSS Printing Extensions[1999-09-02]

This specification describes a set of extensions to Cascading Style Sheets (CSS) to better support printing from the Web. These extensions let style sheets express page breaks, page boxes, and media dependencies. Also, a way to point to an alternate print document is described. This is a first pass at a rather formidable problem, but one which can yield good results in the near term.