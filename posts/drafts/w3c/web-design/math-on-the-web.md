MATH ON THE WEB

MathML (Mathematics Markup Language) is the Web's technology for storing and transporting mathematical formulas. It can be used both for including formulas in documents (such as essays and articles) and for exchange of data between mathematical software.

current status：
+ MathML

What is MathML?

MathML is a formal language for expressing mathematics. It is based on XML to be compatible with a large range of software products.

W3C published the first version of MathML in 1998. MathML was updated and expanded in 2003. The third version, which adds, among other things, support for right-to-left languages, elementary (“school�� math, and integration of the OpenMath content dictionaries, is expected in 2009/2010.

What is MathML used for?

Conceptually, MathML has two parts: presentation and content. They form a single language and it is easy to mix them, but they focus on different goals: the presentation part expresses the two-dimensional look of a formula and is most suitable for publications, such as articles and books; the content part focuses on the semantics and is most suitable as the interchange format between applications for engineering, statistics, etc.

MathML “presentation��markup is typically inserted in XML-based document formats, including XHTML (and soon HTML) mixed with the document's text. MathML “content��markup is more often used on its own.

Examples

The markup of a simple formula might look like this:

	<msqrt> <mi> x </mi> <mo> + </mo> <mfrac>
	<mi> a </mi> <mi> b </mi> </mfrac> </msqrt>

This would display as [] with the root sign and the fraction bar automatically adjusted in size and aligned. The mi element indicates that the x has the role of an identifier and the tree-like structure of the mark-up expresses part of the meaning and helps automatic processing of the formula.

The following examples require a MathML-enabled viewer. Here is Einstein's mass-energy equivalence:

	E = m ⁢ c2

Gauss's standard normal distribution:

	φ ⁡ x = 1 2 ⁢ π ⁢ e - 12 ⁢ x2

Quadratic formula:

	x = -b ± b2 - 4 ⁢ a ⁢ c 2 ⁢ a

Learn More

The Math home page has more information, including lists of available software, tutorials and the latest news about MathML and related specifications.