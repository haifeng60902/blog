HTML CURRENT STATUS HTML 当前状态
=================

Completed Work 已完成工作
--------------

###Standards 标准


####RDFa Core 1.1[2012-06-07] RDFa 核心 1.1

RDFa Core is a specification for attributes to express structured data in any markup language. The embedded data already available in the markup language (e.g., XHTML) is reused by the RDFa markup, so that publishers don't need to repeat significant data in the document content.

####XHTML+RDFa 1.1[2012-06-07]

RDFa Core 1.1 defines attributes and syntax for embedding semantic markup in Host Languages. This document defines one such Host Language. This language is a superset of XHTML 1.1, integrating the attributes as defined in RDFa Core 1.1.

####RDFa Lite 1.1[2012-06-07]

RDFa Lite is a small subset of RDFa consisting of a few attributes that may be applied to most simple to moderate structured data markup tasks. While it is not a complete solution for advanced markup tasks, it does provide a good entry point for beginners.

####XHTML™ Basic 1.1 - Second Edition[2010-11-23] XHTML Basic 1.1 - 第二版

The XHTML Basic document type includes the minimal set of modules required to be an XHTML host language document type, and in addition it includes images, forms, basic tables, and object support. It is designed for Web clients that do not support the full set of XHTML features; for example, Web clients such as mobile phones, PDAs, pagers, and settop boxes. The document type is rich enough for content authoring.

XHTML Basic is designed as a common base that may be extended. The goal of XHTML Basic is to serve as a common language supported by various kinds of user agents.

This revision, 1.1, supercedes version 1.0 as defined in http://www.w3.org/TR/2000/REC-xhtml-basic-20001219. In this revision, several new features have been incorporated into the language in order to better serve the small-device community that is this language's major user:

+ XHTML Forms (defined in [XHTMLMOD])
+ Intrinsic Events (defined in [XHTMLMOD])
+ The value attribute for the li element (defined in [XHTMLMOD])
+ The target attribute (defined in [XHTMLMOD])
+ The style element (defined in [XHTMLMOD])
+ The style attribute (defined in [XHTMLMOD])
+ XHTML Presentation module (defined in [XHTMLMOD])
+ The inputmode attribute (defined in Section 5 of this document)
+ The document type definition is implemented using XHTML modules as defined in " XHTML Modularization" [XHTMLMOD].

####XHTML™ 1.1 - Module-based XHTML - Second Edition[2010-11-23] XHTML 1.1 - 基于模块的 XHTMLl - 第二版

XHTML 1.1 redefines XHTML 1.0 based on a modular design, with support for Ruby Annotation. This new edition corrects various bugs and introduces XML Schema modules.

####XHTML-Print - Second Edition[2010-11-23] XHTML 打印 - 第二版

XHTML-Print is member of the family of XHTML languages defined by the Modularization of XHTML [XHTMLMOD]. It is designed to be appropriate for printing from mobile devices to low-cost printers that might not have a full-page buffer and that generally print from top-to-bottom and left-to-right with the paper in a portrait orientation. XHTML-Print is also targeted at printing in environments where it is not feasible or desirable to install a printer-specific driver and where some variability in the formatting of the output is acceptable.

####RDFa in XHTML: Syntax and Processing[2008-10-14] XHTML 中的 RDFa：语法和执行

####Document Object Model (DOM) Level 2 HTML Specification[2003-01-09] DOM2 HTML 规范

####XHTML™ 1.0 The Extensible HyperText Markup Language (Second Edition)[2002-08-01] XHTML 1.0 可扩展超文本标记语言（第二版）

This specification defines the Second Edition of XHTML 1.0, a reformulation of HTML 4 as an XML 1.0 application, and three DTDs corresponding to the ones defined by HTML 4. The semantics of the elements and their attributes are defined in the W3C Recommendation for HTML 4. These semantics provide the foundation for future extensibility of XHTML. Compatibility with existing HTML user agents is possible by following a small set of guidelines.

####Ruby Annotation[2001-05-31] Ruby 注释

"Ruby" are short runs of text alongside the base text, typically used in East Asian documents to indicate pronunciation or to provide a short annotation. This document proposes a set of CSS properties associated with the 'Ruby' elements. They can be used in combination with the Ruby elements of HTML.

####HTML 4.01 Specification[1999-12-24] HTML 4.01 规范

This specification defines the HyperText Markup Language (HTML), the publishing language of the World Wide Web. This specification defines HTML 4.01, which is a subversion of HTML 4. In addition to the text, multimedia, and hyperlink features of the previous versions of HTML (HTML 3.2 [HTML32] and HTML 2.0 [RFC1866]), HTML 4 supports more multimedia options, scripting languages, style sheets, better printing facilities, and documents that are more accessible to users with disabilities. HTML 4 also takes great strides towards the internationalization of documents, with the goal of making the Web truly World Wide.

HTML 4 is an SGML application conforming to International Standard ISO 8879 -- Standard Generalized Markup Language [ISO8879].

####HTML 3.2 Reference Specification[1997-01-14] HTML 3.2 参考规范

###Group Notes 小组记录

####HTML: The Markup Language (an HTML language reference)[2013-05-28] HTML：标记语言（HTML 语言参考）

This document describes the HTML markup language and provides details to help producers of HTML content create documents that conform to the language. It is not the normative specification but intended for authors.

####HTML5: Edition for Web Authors[2013-05-28] HTML5：Web 开发者版

This document is a strict subset of the HTML5 specification that omits user-agent (UA) implementation details. It is targeted toward Web authors and others who are not UA implementors and who want a view of the HTML specification that focuses more precisely on details relevant to using the HTML language to create Web documents and Web applications.

####main element - an HTML5 extension specification[2013-05-28] 主要元素 - HTML5 扩展规范

This specification is an extension to the HTML5 specification. It defines an element to be used for the identification of the main content area of a document. The main element formalises the common practice of identification of the main content section of a document using the id values such as 'content' and 'main'. It also defines an HTML element that embodies the semantics and function of the WAI-ARIA landmark role=main.

####Microdata to RDF[2012-10-09	] RDF 微数据

HTML microdata [MICRODATA] is an extension to HTML used to embed machine-readable data into HTML documents. Whereas the microdata specification describes a means of markup, the output format is JSON. This specification describes processing rules that may be used to extract RDF [RDF-CONCEPTS] from an HTML document containing microdata.

####RDFa API[2012-07-05]

RDFa [RDFA-CORE] enables authors to publish structured information that is both human- and machine-readable. Concepts that have traditionally been difficult for machines to detect, like people, places, events, music, movies, and recipes, are now easily marked up in Web documents. While publishing this data is vital to the growth of Linked Data, using the information to improve the collective utility of the Web for humankind is the true goal. To accomplish this goal, it must be simple for Web developers to extract and utilize structured information from a Web document. This document details such a mechanism; an RDFa Application Programming Interface (RDFa API) that allows simple extraction and usage of structured information from a Web document.

####RDFa 1.1 Primer[2012-06-07] RDFa 1.1 入门

HTML and RDFa (Resource Description Framework in Attributes) provides a set of markup attributes to augment visual information on the Web with machine-readable hints. In this Primer, we show how to express data using RDFa in HTML, and in particular how to mark up existing human-readable Web page content to express machine-readable data.

####HTML Data Guide[2012-03-08] HTML 数据指导

This guide aims to help publishers and consumers of HTML data use it well. With several syntaxes and vocabularies to choose from, it provides guidance about how to decide which meets the publisher's or consumer's needs. It discusses when it is necessary to mix syntaxes and vocabularies and how to publish and consume data that uses multiple formats. It describes how to create vocabularies that can be used in multiple syntaxes and general best practices about the publication and consumption of HTML data.

####HTML/XML Task Force Report[2012-02-09] HTML/XML 工作组报告

####HLink[2010-12-16]

The HLink module defined in this specification provides XHTML Family Members with the ability to specify which attributes of elements represent Hyperlinks, and how those hyperlinks should be traversed, and extends XLink use to a wider class of languages than those restricted to the syntactic style allowed by XLink.

####XFrames[2010-12-16]

XFrames is an XML application for composing documents together, replacing HTML Frames. By being a separate application from XHTML, it allows content negotiation to determine if the user agent accepts frames; by encoding the 'population' of frames in the URI, it allows framesets to be bookmarked.

####XHTML Role Attribute Module[2010-12-16] XHTML 角色属性模块

The XHTML Role Attribute defined in this specification allows the author to annotate XML Languages with machine-extractable semantic information about the purpose of an element. Use cases include accessibility, device adaptation, server-side processing, and complex data description. This attribute can be integrated into any markup language based upon XHTML Modularization [XHTMLMOD].

####XHTML Access Module[2010-12-16] XHTML 可访问性模块

The XHTML Access module defines an element that, when used in conjunction with other XHTML modules in XHTML Family Markup Languages, enables a more robust accessibility model than is presently possible.

####XHTML Media Types - Second Edition[2009-01-16] XHTML 媒体类型 - 第二版

XHTML Media Types recapitulates which media types can and should be used with the different flavors of XHTML, and under what conditions.

####Offline Web Applications[2008-05-30] 离线 Web 应用

Offline Web Applications highlights the features in HTML 5 that address the challenge of building Web applications that work while offline.

####XHTML 1.0 in XML Schema[2002-09-02] 使用 XML 语义的 XHTML 1.0

This document describes XML Schemas for XHTML 1.0.

####XHTML+SMIL Profile[2002-01-31] XHTML+SMIL 简介

The XHTML+SMIL profile defines a set of XHTML abstract modules that support a subset of the SMIL 2.0 specification.

Drafts 草案
------

###Candidate Recommendations 候选推荐

####HTML Media Capture[2013-05-09] HTML 媒体捕获

This specification defines HTML form enhancements that provide access to the audio, image and video capture capabilities of the device.

####HTML5[2012-12-17]

This specification defines the 5th major revision of the core language of the World Wide Web: the Hypertext Markup Language (HTML). In this version, new features are introduced to help Web application authors, new elements are introduced based on research into prevailing authoring practices, and special attention has been given to defining clear conformance criteria for user agents in an effort to improve interoperability.

####HTML Canvas 2D Context[2012-12-17]

Defines the flat cartesian surface that is the context for the canvas element (for drawing).

####CSS Style Attributes[2010-10-12] CSS 样式属性

Describes the syntax and interpretation of the CSS fragment that can be used in "style" attributes inside mark-up, e.g., in HTML, SVG and MathML.

###Last Call Drafts 最终草案

####Internationalization Tag Set (ITS) Version 2.0[2013-05-21] 国际化标签集（ITS）2.0 版

This document defines data categories and their implementation as a set of elements and attributes called the Internationalization Tag Set (ITS) 2.0. ITS 2.0 is the successor of ITS 1.0; it is designed to foster the creation of multilingual Web content, focusing on HTML5, XML based formats in general, and to leverage localization workflows based on the XML Localization Interchange File Format (XLIFF). In addition to HTML5 and XML, algorithms to convert ITS attributes to RDFa and NIF are provided.

###Other Working Drafts 其他工作草案

####HTML5 Image Description Extension[2013-06-06] HTML5 图像描述扩展

This specification defines a longdesc attribute to link extended descriptions with images in HTML5-based content.

####Differences from HTML4[2013-05-28] 与 HTML4 的差异

HTML 5 defines the fifth major revision of the core language of the World Wide Web, HTML. "HTML 5 differences from HTML 4" describes the differences between HTML 4 and HTML 5 and provides some of the rationale for the changes. This document may not provide accurate information as the HTML 5 specification is still actively in development. When in doubt, always check the HTML 5 specification itself. [HTML5]

####HTML Canvas 2D Context, Level 2[2013-05-28]

This specification defines the 2D Context, Level 2 for the HTML canvas element. The 2D Context provides objects, methods, and properties to draw and manipulate graphics on a canvas drawing surface.

####HTML 5.1[2013-05-28]

This specification defines the 5th major version, first minor revision of the core language of the World Wide Web: the Hypertext Markup Language (HTML). In this version, new features continue to be introduced to help Web application authors, new elements continue to be introduced based on research into prevailing authoring practices, and special attention continues to be given to defining clear conformance criteria for user agents in an effort to improve interoperability.

####Metadata for the Multilingual Web - Usage Scenarios and Implementations[2013-03-07]

An overview of usage scenarios and implementations demonstrating applications of the Internationalization Tag Set (ITS) 2.0. The usage scenarios are ranging from simple machine translation or human translation quality check to training for machine translation systems or automatic text analyis.

####The srcset attribute[2013-02-28] 路径集合属性

When authors adapt their sites for high-resolution displays, they often need to be able to use different assets representing the same image. We address this need for adaptive, bitmapped content images by adding a srcset attribute to the img element.

####Public Identifiers for entity resolution in XHTML[2013-02-28]

This document adds an additional public identifier that should be recognised by XHTML user agents and cause the HTML character entity definitions to be loaded.

####The picture element[2013-02-26] 图像元素

The picture element is an image container whose source content is determined by one or more CSS media queries.

####Use Cases and Requirements for Standardizing Responsive Images[2013-02-26] 标准化响应式图像用例和标准

This document captures the use cases and requirements for standardizing a solution for responsive images.

####Using WAI-ARIA in HTML[2013-02-14]

This document is a practical guide for developers on how to add accessibility information to HTML elements using ARIA, a markup mechanism for making Web content and Web applications more accessible to people with disabilities.

####HTML5: Techniques for providing useful text alternatives[2012-10-25] HTML5：提供有用文本提示的技术

This document contains author conformance requirements for use of the alt attribute in HTML5 and best practice guidance for authors of HTML documents on providing text alternatives for images.

####Polyglot Markup: HTML-Compatible XHTML Documents[2012-10-25] 多语言标记：兼容 HTML 的 XHTML 文档

A document that uses polyglot markup is document that is a stream of bytes that parses into identical document trees (with the exception of the xmlns attribute on the root element) when processed as HTML and when processed as XML. Polyglot markup that meets a well defined set of constraints is interpreted as compatible, regardless of whether they are processed as HTML or as XHTML, per the HTML5 specification.

####HTML Microdata[2012-10-25] HTML 微数据

This specification defines a mechanism for machine-readable data to be embedded in HTML documents in an easy-to-write manner, with an unambiguous parsing model. It is compatible with numerous other data formats including RDF and JSON.

####HTML to Platform Accessibility APIs Implementation Guide[2012-10-25] HTML 跨平台可访问性接口实现指导

This document maps HTML elements and attributes to accessibility API roles, states and properties on a variety of platforms.

####Use Cases & Exploratory Approaches for Ruby Markup[2012-07-10] Ruby 标记用例和探索性方法

This document looks at a number of use cases involving ruby, and examines the pros and cons of a number of alternative approaches for meeting those use cases using the current HTML5 model, the XHTML Ruby Annotation model, and two other models. The aim is to clarify which use cases are supported by the existing markup models (HTML5 or XHTML), and where they are not, provide suggestions about how the markup model could be adapted to support those use cases. Implementers and standards developers can then take this background information and the suggestions in this document to specify and implement a comprehensive markup model for ruby in HTML5.

####Media Accessibility User Requirements[2012-01-03] 媒体可访问性用户标准

Aggregates requirements of a user with disabilities with respect to audio and video on the Web, providing background on user needs, alternative content technologies, and their application on the Web.

####XForms for HTML[2008-12-19]

XForms for HTML provides a set of attributes and script methods that can be used by the tags or elements of an HTML or XHTML web page to simplify the integration of data-intensive interactive processing capabilities from XForms.

####HTML Design Principles[2007-11-26] HTML 设计原则

HTML 5 defines the fifth major revision of the core language of the World Wide Web, HTML. This document describes the set of guiding principles used by the HTML Working Group for the development of HTML5. The principles offer guidance for the design of HTML in the areas of compatibility, utility and interoperability.

Obsolete Specifications 已淘汰规范
-----------------------

###Retired 已废弃

####HTML 5 Publication Notes[2008-06-10] 发布记录

HTML 5 Publication Notes is a companion document to the HTML 5 specification that gives more context about a given version of the drafts.

####An XHTML + MathML + SVG Profile[2002-08-09]

An XHTML+MathML+SVG profile is a profile that combines XHTML 1.1 [XHTML11], MathML 2.0 [MathML2] and SVG 1.1 [SVG11] together. This profile enables mixing XHTML, MathML and SVG in the same document using XML namespaces [XMLNS] mechanism, while allowing validation of such a mixed-namespace document. An XHTML 1.1 + MathML 2.0 + SVG 1.1 DTD driver is provided. An XHTML version of this document is conforming to this DTD.

####HTML Working Group Roadmap[2000-11-08] HTML 工作组线路图

The HTML Working Group is chartered with the development of an extensible, sub-settable version of HTML that is compatible with XML. It is also chartered with the development of some extensions to HTML - notably in the area of forms. This group's current activities commenced in August 1998, and the group was rechartered in June 2000. The purpose of this document is to describe the activities of the HTML Working Group, define general milestones for each sub-project, and outline the inter-dependencies among the various deliverables.

####XHTML™ Document Profile Requirements[1999-09-06] XHTML 文档简介标准